import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const loginRoutes: Routes = [
	{ path: '', component: LoginComponent }
]

@NgModule({
	declarations: [
		LoginComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		RouterModule.forChild(loginRoutes)
	],
	exports: [RouterModule],
	providers: [],
	bootstrap: []
})
export class AuthModule { }
