import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { QuestionComponent } from '../questions/question/question.component';
import { CoreRoutingModule } from './core-routing.module';
import { AuthService } from '../auth/auth.service';
import { QuestionTypeComponent } from '../questions/question/question-type/question-type.component';
import { SingleChoiceComponent } from '../questions/question/question-type/single-choice/single-choice.component';
import { MultipleChoiceComponent } from '../questions/question/question-type/multiple-choice/multiple-choice.component';
import { TextComponent } from '../questions/question/question-type/text/text.component';
import { OrderComponent } from '../questions/question/question-type/order/order.component';
import { ConnectingComponent } from '../questions/question/question-type/connecting/connecting.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { TestsModule } from '../tests/tests.module';


@NgModule({
	declarations: [
		HomeComponent,
		HeaderComponent,
		ProfileComponent,
		QuestionComponent,
		QuestionTypeComponent,
		SingleChoiceComponent,
		MultipleChoiceComponent,
		TextComponent,
		OrderComponent,
		ConnectingComponent,
		EditProfileComponent,
	],
	imports: [
		CommonModule,
		FormsModule,
		CoreRoutingModule,
		ReactiveFormsModule,
		TestsModule,
	],
	providers: [AuthService],
	bootstrap: [],
	entryComponents: [
		SingleChoiceComponent,
		MultipleChoiceComponent,
		TextComponent,
		OrderComponent,
		ConnectingComponent
	]

})
export class CoreModule { }
