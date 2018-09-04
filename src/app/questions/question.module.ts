import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { QuestionRouting } from './question-routing.module';


@NgModule({
	declarations: [
	],
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
