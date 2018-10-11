import { Component, OnInit, Output } from '@angular/core';
import { UserService } from '../shared/services/users.service';
import { User } from '../shared/user.model';
import { QuestionService } from '../questions/question.service';

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
	allUsers;
	@Output() currentUsers = [];
	constructor(private userService: UserService, private qService: QuestionService) { };

	ngOnInit() {
		this.allUsers = this.userService.getAll().subscribe(
			res => {
				res.map(user => {
					this.currentUsers.push(new User(user.id, user.username, user.password, user.name, user.surname, user.phone, user.admin))
				});
			}
		);
	};
};

