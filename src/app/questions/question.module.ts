import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { QuestionRouting } from './question-routing.module';
import { SingleChoiceComponent } from './question/single-choice/single-choice.component';
import { MultipleChoiceComponent } from './question/multiple-choice/multiple-choice.component';


@NgModule({
	declarations: [
	SingleChoiceComponent,
	MultipleChoiceComponent],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		QuestionRouting,
		HttpModule,
	],
	providers: [],
	bootstrap: []
})
export class QuestionModule { }
