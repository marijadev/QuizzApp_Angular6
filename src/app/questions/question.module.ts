import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { MultipleChoiceComponent } from './question/question-type/multiple-choice/multiple-choice.component';
import { SingleChoiceComponent } from './question/question-type/single-choice/single-choice.component';
import { TextComponent } from './question/question-type/text/text.component';
import { OrderComponent } from './question/question-type/order/order.component';
import { ConnectingComponent } from './question/question-type/connecting/connecting.component';

@NgModule({
	declarations: [
	// SingleChoiceComponent,
	// MultipleChoiceComponent,
	// TextComponent,
	// OrderComponent,
	// ConnectingComponent,
],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		HttpModule,
	],
	providers: [],
	bootstrap: []
})
export class QuestionModule { }
