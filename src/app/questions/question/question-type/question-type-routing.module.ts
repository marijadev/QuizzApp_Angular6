import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SingleChoiceComponent } from './single-choice/single-choice.component';
import { QuestionTypeComponent } from './question-type.component';
import { MultipleChoiceComponent } from './multiple-choice/multiple-choice.component';

const questionTypeRoutes: Routes = [
	{
		path: 'type', component: QuestionTypeComponent, children: [
			{path: 'single-choice', component: SingleChoiceComponent},
			{path: 'multiple-choice', component: MultipleChoiceComponent},
		]
	}
]

@NgModule({
	imports: [RouterModule.forChild(questionTypeRoutes)],
	exports: [RouterModule]
})
export class QuestionTypeRoutingModule { }