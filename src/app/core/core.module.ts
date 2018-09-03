import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { QuestionModule } from '../questions/question.module';
import { QuestionComponent } from '../questions/question/question.component';
import { CoreRoutingModule } from './core-routing.module';
import { AuthService } from '../auth/auth.service';


@NgModule({
	declarations: [
		HomeComponent,
		HeaderComponent,
		ProfileComponent,
		QuestionComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		QuestionModule,
		CoreRoutingModule
	],
	providers: [AuthService],
	bootstrap: []
})
export class CoreModule { }
