import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { QuestionTypeRoutingModule } from './question/question-type/question-type-routing.module';
import { MultipleChoiceComponent } from './question/question-type/multiple-choice/multiple-choice.component';
import { SingleChoiceComponent } from './question/question-type/single-choice/single-choice.component';

@NgModule({
	declarations: [
	SingleChoiceComponent,
	MultipleChoiceComponent,
],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		HttpModule,
		QuestionTypeRoutingModule,
	],
	providers: [],
	bootstrap: []
})
export class QuestionModule { }
