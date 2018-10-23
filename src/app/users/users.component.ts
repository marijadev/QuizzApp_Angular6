import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { UserService } from '../shared/services/users.service';
import { User } from '../shared/user.model';
import { QuestionService } from '../questions/question.service';
import { HttpClient } from '@angular/common/http';
import { API_URL, status } from '../shared/constants';

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit, OnDestroy {
	allUsers;
	@Output() currentUsers = [];
	subscription;
	userChosen = false;
	selectedUser;
	categories;
	difficulties;
	statuses;
	filteredBy;
	dropdownsShowed = {
		difficultyDropdown: false,
		categoryDropdown: false,
		statusDropdown: false,
	};
	testTypeObj = {
		type: '',
		userId: 0
	};
	statusTypeObj = {
		status: 0,
		userId: 0
	};
	singleUsersObj = {
		id: 0
	};

	constructor(private http: HttpClient, private userService: UserService, private qService: QuestionService) { };

	ngOnInit() {
		this.http.get(API_URL.userCategories).subscribe(data => this.categories = data);
		this.difficulties = this.qService.questionDifficulty;
		this.statuses = status;

		this.displayAllUsers();
	};

	displayAllUsers() {
		this.allUsers = this.userService.getAll().subscribe(
			res => {
				res.map(user => {
					this.currentUsers.push(new User(user.id, user.username, user.password, user.name, user.surname, user.phone, user.admin))
				});
				this.filteredBy = 'USERS';
			}
		);
	};

	getAllUsers(e) {
		this.allUsers = [];
		this.displayAllUsers();
	}

	onUserSelect(user) {
		this.userChosen = true;
		this.selectedUser = user;
	}

	onItemSelected(e, type: string, item: string) {
		console.log('type', type, 'item', item)
		if (type === 'status') {
			const statusName = item === 'Passed' ? 'Passed' : 'Failed';
			this.filteredBy = `Status / ${statusName}`;
			this.statusTypeObj.status = item === 'Passed' ? 1 : 0;
			this.http.post(API_URL.userTestsStatus, this.statusTypeObj).subscribe(data => {
			});
		} else if (type === 'difficulty') {
			this.filteredBy = `Difficulty / ${item}`;
			this.testTypeObj.type = item;
			this.http.post(API_URL.userTestsDiff, this.testTypeObj).subscribe(data => {
			});
		} else if (type === 'category') {
			this.filteredBy = `Category / ${item}`;
			this.testTypeObj.type = item;
			this.http.post(API_URL.userTestsCat, this.testTypeObj).subscribe(data => {
			})
		}
	}

	onElementHover(e, type: string) {
		if (type === 'difficulty') {
			this.dropdownsShowed.difficultyDropdown = true;
		} else if (type === 'category') {
			this.dropdownsShowed.categoryDropdown = true;
		} else if (type === 'status') {
			this.dropdownsShowed.statusDropdown = true;
		};
	};

	onElementUnhover(e, type: string) {
		if (type === 'difficulty') {
			this.dropdownsShowed.difficultyDropdown = false;
		} else if (type === 'category') {
			this.dropdownsShowed.categoryDropdown = false;
		} else if (type === 'status') {
			this.dropdownsShowed.statusDropdown = false;
		};
	};



	ngOnDestroy() {
		
	}
};

