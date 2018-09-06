import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Route, Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	@ViewChild('f') loginForm: NgForm;
	sampleUsers = {
		admins: [
			{ id: 1, email: 'sample@test.com', password: 111, status: 'admin' },
			{ id: 2, email: 'admin@test.com', password: 222, status: 'admin' }
		],
		users: [
			{ id: 1, email: 'foo@test.com', password: 333, status: 'user' },
			{ id: 2, email: 'user@test.com', password: 444, status: 'user' }
		]
	}
	constructor(private router: Router, private actRoute: ActivatedRoute, private authService: AuthService) { }

	ngOnInit() {
	}

	onSubmit(form: NgForm) {
		const email = form.value.email;
		const password = form.value.password;
		const userStatus = this.checkIsUser(email, password) ? this.checkIsUser(email, password) : this.checkIsAdmin(email, password);

		this.authService.login(email, password, userStatus);
		if (userStatus === 'admin') {
			this.router.navigate(['/home/question/type/single-choice'], { relativeTo: this.actRoute });
		} else if (userStatus === 'user') {
			this.router.navigate(['/home/passed-tests'], { relativeTo: this.actRoute });
		} else {
			console.log('not logged in')
		}
	}

	checkIsAdmin(email, password) {
		const admins = this.sampleUsers.admins;
		let currentEmail;
		let currentPassword;
		let currentStatus;
		let finalStatus;

		for (let obj of admins) {
			currentEmail = obj.email;
			currentPassword = obj.password;
			currentStatus = obj.status;
			if (currentEmail === email && currentStatus === 'admin' && currentPassword == password) {
				finalStatus = currentStatus;
				return finalStatus;
			} return false;
		}
		return finalStatus;
	}

	checkIsUser(email, password) {
		const users = this.sampleUsers.users;
		let currentEmail;
		let currentPassword;
		let currentStatus;
		let finalStatus;

		for (let obj of users) {
			currentEmail = obj.email;
			currentPassword = obj.password;
			currentStatus = obj.status;
			if (currentEmail === email && currentStatus === 'user' && currentPassword == password) {
				finalStatus = currentStatus;
				return finalStatus;
			} finalStatus = false;
		}
	}

}
