import { Component, OnInit } from '@angular/core';

import { UserService } from '../../shared/services/users.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	userType: number;

	constructor(private usersService: UserService) { }

	ngOnInit() {
		const user = this.usersService.getCurrentUser();
		this.userType = user['admin'];
	};
};
