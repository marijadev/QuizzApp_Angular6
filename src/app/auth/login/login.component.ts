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

	constructor(private router: Router, private actRoute: ActivatedRoute, private authService: AuthService) { }

	ngOnInit() {

	}

	onSubmit(form: NgForm) {
		const email = form.value.email;
		const password = form.value.password;
		this.authService.login(email, password);

		this.router.navigate(['/home/question'], { relativeTo: this.actRoute });
		// console.log(form.value.email)
	}

}
