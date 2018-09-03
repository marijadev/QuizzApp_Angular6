import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	constructor(private router: Router,private authService: AuthService) { }

	ngOnInit() {

	}

	onSubmit(form: NgForm) {
		const email = form.value.email;
		const password = form.value.password;
		this.authService.login(email, password);

		this.router.navigate(['/home']);
		// console.log(form.value.email)
	}

}
