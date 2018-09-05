import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from '../users/users.component';
import { QuestionComponent } from '../questions/question/question.component';
import { ResultsComponent } from '../results/results.component';
import { HeaderComponent } from './header/header.component';
import { TestsComponent } from '../tests/tests.component';
import { PassedTestsComponent } from '../tests/passed-tests/passed-tests.component';
import { QuestionTypeComponent } from '../questions/question/question-type/question-type.component';
import { SingleChoiceComponent } from '../questions/question/question-type/single-choice/single-choice.component';
import { MultipleChoiceComponent } from '../questions/question/question-type/multiple-choice/multiple-choice.component';

const coreRoutes: Routes = [
	{
		path: 'home', component: HomeComponent, children: [
			{
				path: 'question', component: QuestionComponent, children: [
					{
						path: 'type', component: QuestionTypeComponent, children: [
							{ path: 'single-choice', component: SingleChoiceComponent },
							{ path: 'multiple-choice', component: MultipleChoiceComponent },
						]
					}
				]
			},
			{ path: 'results', component: ResultsComponent },
			{ path: 'users', component: UsersComponent },
			{ path: 'passed-tests', component: PassedTestsComponent },
			{ path: 'tests', component: TestsComponent },
		]
	},
	{ path: 'header', component: HeaderComponent },
]

@NgModule({
	imports: [RouterModule.forChild(coreRoutes)],
	exports: [RouterModule]
})

export class CoreRoutingModule { }