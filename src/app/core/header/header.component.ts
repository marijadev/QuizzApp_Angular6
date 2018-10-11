import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../auth/auth.service';
import { UserService } from '../../shared/services/users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	userType: number;

	constructor(private router: Router, private actRoute: ActivatedRoute, private usersService: UserService) { }

	ngOnInit() {
		const user = this.usersService.getCurrentUser();
		this.userType = user['admin'];
	};
};
