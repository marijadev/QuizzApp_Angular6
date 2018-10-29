import { Component, OnInit, Output, OnDestroy, Input } from '@angular/core';
import { UserService } from '../shared/services/users.service';
import { User } from '../shared/user.model';
import { QuestionService } from '../questions/question.service';
import { HttpClient } from '@angular/common/http';
import { API_URL, status, allUsersTestRequests } from '../shared/constants';
import { SingleTest } from '../shared/single-test.model';
import { PaginationService } from '../shared/pagination/pagination.service';

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit, OnDestroy {
	@Output() currentUsers = [];
	private currentTests = [];
	private userChosen = false;
	private selectedUser;
	private selectedView = 'users';
	private categories;
	private difficulties;
	private statuses;
	private statistics;

	private filteredBy: string;
	objectActive;
	flag: string;
	private dropdownsShowed = {
		difficultyDropdown: false,
		categoryDropdown: false,
		statusDropdown: false,
	};
	usersObj = {
		page: 0
	}

	pager: any = {};
	pagedItems: any[];


	constructor(private http: HttpClient, private pageService: PaginationService, private userService: UserService, private qService: QuestionService) { };

	ngOnInit() {
		this.http.get(API_URL.userCategories).subscribe(data => this.categories = data);
		this.difficulties = this.qService.questionDifficulty;
		this.statuses = status;

		this.currentUsers = [];

		this.displayAllUsers();
	};

	setPage(page: number) {
		if (page < 1 || page > this.pager.totalPages) {
			return;
		}

		if (this.objectActive) {
			if (this.objectActive.status) {
				allUsersTestRequests.testStatusObj.page = page;

				this.userService.getAllTests(API_URL.allTestsStatus, allUsersTestRequests.testStatusObj).subscribe(data => {
					this.displayAllTests(data, page);
				});
			} else if (this.objectActive.type) {
				allUsersTestRequests.testTypeObj.page = page;

				if (this.flag === 'difficulty') {
					this.userService.getAllTests(API_URL.allTestsDifficulty, allUsersTestRequests.testTypeObj).subscribe(data => {
						this.displayAllTests(data, page);
					});
				} else if (this.flag === 'category') {
					this.userService.getAllTests(API_URL.allTestsCategory, allUsersTestRequests.testTypeObj).subscribe(data => {
						this.displayAllTests(data, page);
					});
				};
			};
		};
	}

	displayAllUsers() {
		this.userService.getAll(this.usersObj).subscribe(res => {
			const users = res.users;

			users.map(user => {
				this.currentUsers.push(new User(user.id, user.username, user.password, user.name, user.surname, user.phone, user.admin, user.photo))
			});
			this.filteredBy = 'USERS';
			this.pager = this.pageService.getPager(this.currentUsers.length);
		});
	};

	displayAllTests(result, page) {
		this.currentTests = [];
		
		const tests = result.tests;
		tests.map(test => {
			this.currentTests.push(new SingleTest(test.id, test.date, test.questions, test.result, test.status, test.user));
		});

		console.log('tests',page)
		this.pager = this.pageService.getPager(result.length, page);
	};

	getAllUsers(e) {
		if (this.selectedView !== 'users') {
			this.currentUsers = [];
			this.displayAllUsers();
			this.selectedView = 'users';
		};
	};

	// on user select
	onUserSelect(user) {
		this.userChosen = true;
		this.selectedUser = user;
	}

	// do something on filtered by:
	onItemSelected(e, type: string, item: string) {
		this.selectedView = 'tests';

		if (type === 'status') {
			const statusName = item === 'Passed' ? 'Passed' : 'Failed';

			this.filteredBy = `Status / ${statusName}`;
			allUsersTestRequests.testStatusObj.page = 0;
			this.statistics = null;

			if (item === 'Passed') {
				allUsersTestRequests.testStatusObj.status = 1;
			} else if (item === 'Failed') {
				allUsersTestRequests.testStatusObj.status = 0;
			}
			this.objectActive = allUsersTestRequests.testStatusObj;

			this.userService.getAllTests(API_URL.allTestsStatus, allUsersTestRequests.testStatusObj).subscribe(data => {
				this.displayAllTests(data, 1);
			});
		} else if (type === 'difficulty') {
			this.filteredBy = `Difficulty / ${item}`;
			allUsersTestRequests.testTypeObj.type = item;
			allUsersTestRequests.testStatistics.type = item;
			this.objectActive = allUsersTestRequests.testTypeObj;
			this.flag = 'difficulty';

			this.getStatistics(API_URL.statisticsForDifficulty, allUsersTestRequests.testStatistics).subscribe(statistics => {
				this.statistics = statistics;
			});
			this.userService.getAllTests(API_URL.allTestsDifficulty, allUsersTestRequests.testTypeObj).subscribe(data => {
				this.displayAllTests(data, 1);
			});
		} else if (type === 'category') {
			this.filteredBy = `Category / ${item}`;
			allUsersTestRequests.testTypeObj.type = item;
			allUsersTestRequests.testStatistics.type = item;
			this.objectActive = allUsersTestRequests.testTypeObj;
			this.flag = 'category';

			this.getStatistics(API_URL.statisticsForCategory, allUsersTestRequests.testStatistics).subscribe(statistics => {
				this.statistics = statistics;
			});
			this.userService.getAllTests(API_URL.allTestsCategory, allUsersTestRequests.testTypeObj).subscribe(data => {
				this.displayAllTests(data, 1);
			});
		};
	};


	getStatistics(url, obj) {
		return this.http.post(url, obj);
	}

	// show dropdown on mouseenter
	onElementHover(e, type: string) {
		if (type === 'difficulty') {
			this.dropdownsShowed.difficultyDropdown = true;
		} else if (type === 'category') {
			this.dropdownsShowed.categoryDropdown = true;
		} else if (type === 'status') {
			this.dropdownsShowed.statusDropdown = true;
		};
	};

	// hide dropdown on mouseleave
	onElementUnhover(e, type: string) {
		if (type === 'difficulty') {
			this.dropdownsShowed.difficultyDropdown = false;
		} else if (type === 'category') {
			this.dropdownsShowed.categoryDropdown = false;
		} else if (type === 'status') {
			this.dropdownsShowed.statusDropdown = false;
		};
	};

	ngOnDestroy() { }
};

