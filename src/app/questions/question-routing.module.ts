import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuestionComponent } from './question/question.component';
import { SingleChoiceComponent } from './question/single-choice/single-choice.component';
import { MultipleChoiceComponent } from './question/multiple-choice/multiple-choice.component';
import { QuestionTypeComponent } from './question/question-type/question-type.component';


const questionRoutes: Routes = [
	{
		path: 'question', component: QuestionComponent, children: [
			{path: 'question-type', component: QuestionTypeComponent},
			// {path: 'multiple-choice', component: MultipleChoiceComponent},
		]
	}
]

@NgModule({
	imports: [RouterModule.forChild(questionRoutes)],
	exports: [RouterModule]
})
export class QuestionRouting { }