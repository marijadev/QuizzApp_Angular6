import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	@ViewChild('f') loginForm: NgForm;

	constructor(private router: Router, private actRoute: ActivatedRoute, private authService: AuthService, private http: HttpClient) { }

	ngOnInit() {
	}

	onSubmit(form: NgForm) {
		if (this.loginForm.invalid) { return; }

		const username = form.value.username;
		const password = form.value.password;

		this.authService.login(username, password).subscribe(
			user => {
				if (user.admin === 1) {
					this.router.navigate(['/home/question'], { relativeTo: this.actRoute });
				} else if (user.admin === 0) {
					this.router.navigate(['/home/passed-tests'], { relativeTo: this.actRoute });
				}
			}
		)
		// this.http.get('/server/login').subscribe(data => console.log(data));
	}

}
