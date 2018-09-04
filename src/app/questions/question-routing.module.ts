import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuestionComponent } from './question/question.component';
import { SingleChoiceComponent } from './question/single-choice/single-choice.component';
import { MultipleChoiceComponent } from './question/multiple-choice/multiple-choice.component';


const questionRoutes: Routes = [
	{
		path: '', component: QuestionComponent, children: [
			{path: 'single-choice', component: SingleChoiceComponent},
			{path: 'multiple-choice', component: MultipleChoiceComponent},
		]
	}
]

@NgModule({
	imports: [RouterModule.forChild(questionRoutes)],
	exports: [RouterModule]
})
export class QuestionRouting { }