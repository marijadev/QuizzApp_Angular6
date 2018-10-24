import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ResultsComponent } from './results/results.component';
import { TestsComponent } from './tests/tests.component';
import { SingleUserComponent } from './users/single-user/single-user.component';
import { TestTypeComponent } from './tests/test-type/test-type.component';
import { TestComponent } from './tests/test/test.component';

import { AppRouting } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import {NgxPaginationModule} from 'ngx-pagination';

import { QuestionService } from './questions/question.service';
import { AuthService } from './auth/auth.service';
import { ProfileService } from './shared/services/profile.service';
import { UserService } from './shared/services/users.service';
import { TokenStorageService } from './shared/services/token-storage.service';
import { DataService } from './shared/services/data.service';
import { TestService } from './shared/services/test.service';

import { AuthGuard } from './shared/guards/auth.guard';
import { UserType } from './shared/guards/user-type.guard';
import { TrueFalseDirective } from './shared/true-false.directive';
import { MyInterceptor } from './shared/services/my-interceptor';
import { ErrorsHandler } from './shared/services/errors-handler';

@NgModule({
	declarations: [
		AppComponent,
		UsersComponent,
		ResultsComponent,
		TestsComponent,
		SingleUserComponent,
		TestTypeComponent,
		TestComponent,
		TrueFalseDirective,
	],
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		FormsModule,
		AuthModule,
		CoreModule,
		AppRouting,
		HttpClientModule,
		BrowserAnimationsModule,
		NgxPaginationModule
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: MyInterceptor,
			multi: true
		},
		{
			provide: ErrorHandler,
			useClass: ErrorsHandler,
		},
		AuthGuard,
		UserType,
		AuthService,
		QuestionService,
		UserService,
		ProfileService,
		TokenStorageService,
		DataService,
		TestService
	],
	bootstrap: [AppComponent],
})
export class AppModule { }
