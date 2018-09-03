import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { QuestionModule } from '../questions/question.module';
import { QuestionComponent } from '../questions/question/question.component';
import { UsersComponent } from '../users/users.component';
import { ResultsComponent } from '../results/results.component';

const coreRoutes: Routes = [
	{
		path: 'home', component: HomeComponent, children: [
			{ path: 'users', component: UsersComponent },
			{ path: 'question', component: QuestionComponent },
			{ path: 'results', component: ResultsComponent },
		]
	},
	{ path: 'header', component: HeaderComponent },
]

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
		RouterModule.forChild(coreRoutes)
	],
	exports: [RouterModule],
	providers: [],
	bootstrap: []
})
export class CoreModule { }
