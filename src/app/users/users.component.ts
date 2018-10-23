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
			}
		);
	};

	getAllUsers(e) {
		this.allUsers = [];
		this.displayAllUsers();
		console.log('called')
	}

	onUserSelect(user) {
		this.userChosen = true;
		this.selectedUser = user;
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

