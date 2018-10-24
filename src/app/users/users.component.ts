import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { UserService } from '../shared/services/users.service';
import { User } from '../shared/user.model';
import { QuestionService } from '../questions/question.service';
import { HttpClient } from '@angular/common/http';
import { API_URL, status, formatDate } from '../shared/constants';
import { SingleTest } from '../shared/single-test.model';
import { PaginationInstance } from 'ngx-pagination';

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
	private arrLength: number;
	
	private categories;
	private difficulties;
	private statuses;
	
	private filteredBy: string;
	
	private dropdownsShowed = {
		difficultyDropdown: false,
		categoryDropdown: false,
		statusDropdown: false,
	};
	testTypeObj = {
		page: 0,
		type: ''
	};
	statusTypeObj = {
		status: 0,
		page: 0
	};
	singleUsersObj = {
		id: 0
	};
	usersObj = {
		page: 0
	}
	
	constructor(private http: HttpClient, private userService: UserService, private qService: QuestionService) { };

	ngOnInit() {
		this.http.get(API_URL.userCategories).subscribe(data => this.categories = data);
		this.difficulties = this.qService.questionDifficulty;
		this.statuses = status;
		
		this.currentUsers = [];
		this.displayAllUsers();
	};

	displayAllUsers() {
		this.userService.getAll(this.usersObj).subscribe(res => {
			const users = res.users;
			this.arrLength = res.length;
			users.map(user => {
				this.currentUsers.push(new User(user.id, user.username, user.password, user.name, user.surname, user.phone, user.admin, user.photo))
			});
			this.filteredBy = 'USERS';
		});
	};

	displayAllTests(result) {
		this.currentTests = [];
		this.arrLength = result.length;
		const tests = result.tests;
		tests.map(test => {
			this.currentTests.push(new SingleTest(test.id, formatDate(test.date), test.questions, test.result, test.status, test.user));
		});
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
			if (item === 'Passed') {
				this.statusTypeObj.status = 1;
			} else if (item === 'Failed') {
				this.statusTypeObj.status = 0;
			}
			this.userService.getAllTests(API_URL.allTestsStatus, this.statusTypeObj).subscribe(data => {
				this.displayAllTests(data);
			});
		} else if (type === 'difficulty') {
			this.filteredBy = `Difficulty / ${item}`;
			this.testTypeObj.type = item;

			this.userService.getAllTests(API_URL.allTestsDifficulty, this.testTypeObj).subscribe(data => {
				this.displayAllTests(data);
			});
		} else if (type === 'category') {
			this.filteredBy = `Category / ${item}`;
			this.testTypeObj.type = item;

			this.userService.getAllTests(API_URL.allTestsCategory, this.testTypeObj).subscribe(data => {
				this.displayAllTests(data);
			});
		};
	};

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

	onPageChange(e, page: number) {
		console.log(page)
	}

	ngOnDestroy() {
	}
};

