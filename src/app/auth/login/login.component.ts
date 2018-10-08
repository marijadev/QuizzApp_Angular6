import { Component, OnInit, ViewChild, ErrorHandler } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TokenStorageService } from '../../shared/services/token-storage.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	@ViewChild('f') loginForm: NgForm;

	constructor(private router: Router, private actRoute: ActivatedRoute, private authService: AuthService, private tokenService: TokenStorageService) { }

	ngOnInit() { };

	onSubmit(form: NgForm) {
		if (this.loginForm.invalid) { return; };

		this.authService.login(form.value.username, form.value.password).subscribe(
			user => {
				if (user.admin === 1) {
					this.router.navigate(['/home/question'], { relativeTo: this.actRoute });
				} else if (user.admin === 0) {
					this.router.navigate(['/home/test'], { relativeTo: this.actRoute });
				};
			},
			error => {
				alert('Enter the correct username and password!');
			}

			);
	};
};
