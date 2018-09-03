import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from '../users/users.component';
import { QuestionComponent } from '../questions/question/question.component';
import { ResultsComponent } from '../results/results.component';
import { HeaderComponent } from './header/header.component';

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
	imports: [RouterModule.forChild(coreRoutes)],
	exports: [RouterModule]
})

export class CoreRoutingModule { }