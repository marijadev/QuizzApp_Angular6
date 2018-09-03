import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { QuestionRouting } from './question-routing.module';


@NgModule({
	declarations: [
	],
	imports: [
		CommonModule,
		FormsModule,
		QuestionRouting
	],
	providers: [],
	bootstrap: []
})
export class QuestionModule { }
