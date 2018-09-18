import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Route, Router, ActivatedRoute } from '@angular/router';
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
		const username = form.value.username;
		const password = form.value.password;

		this.http.get('https://localhost:4200/api/login').subscribe(data => console.log(data))

		// this.authService.login(username, password).subscribe(
		// 	result => {console.log(result)}
		// )
		// .subscribe(admin => {
		// 	if (admin === 1) {
		// 		this.router.navigate(['/home/question'], { relativeTo: this.actRoute });
		// 	} else if (admin === 0) {
		// 		this.router.navigate(['/home/passed-tests'], { relativeTo: this.actRoute });
		// 	} 
		// }, err => {
		// 	console.log('not logged in');
		// });

	}


}
