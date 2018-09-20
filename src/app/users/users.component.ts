import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/users.service';

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
	allUsers;

	constructor(private userService: UserService) { }

	ngOnInit() {
		this.allUsers = this.userService.getAll().subscribe(
			res => console.log(res)
		);
	}

}
