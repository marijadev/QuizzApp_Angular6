import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { QuestionModule } from '../questions/question.module';
import { QuestionComponent } from '../questions/question/question.component';
import { CoreRoutingModule } from './core-routing.module';
import { AuthService } from '../auth/auth.service';
import { QuestionTypeComponent } from '../questions/question/question-type/question-type.component';


@NgModule({
	declarations: [
		HomeComponent,
		HeaderComponent,
		ProfileComponent,
		QuestionComponent,
		QuestionTypeComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		QuestionModule,
		CoreRoutingModule,
		ReactiveFormsModule
	],
	providers: [AuthService],
	bootstrap: []
})
export class CoreModule { }
