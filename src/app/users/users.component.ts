import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/users.service';
import { User } from '../shared/user.model';

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
	allUsers;
	currentUsers = [];
	constructor(private userService: UserService) { };

	ngOnInit() {
		this.allUsers = this.userService.getAll().subscribe(
			res => {
				res.map(user => {
					this.currentUsers.push(new User(user.id, user.username, user.password, user.name, user.surname, user.phone, user.admin))
					// console.log('current ', this.currentUsers);
				});
			});
	};
};

