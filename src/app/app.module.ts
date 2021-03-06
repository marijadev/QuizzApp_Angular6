import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { UsersComponent } from './admin/users/users.component';
import { PendingTestsComponent } from './admin/pending/pendingTests.component';
import { TestsComponent } from './tests/tests.component';
import { SingleUserComponent } from './admin/users/single-user/single-user.component';
import { TestTypeComponent } from './tests/test-type/test-type.component';
import { TestComponent } from './tests/test/test.component';

import { AppRouting } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';

import { QuestionService } from './admin/questions/question.service';
import { AuthService } from './auth/auth.service';
import { ProfileService } from './shared/services/profile.service';
import { UserService } from './shared/services/users.service';
import { TokenStorageService } from './shared/services/token-storage.service';
import { DataService } from './shared/services/data.service';
import { TestService } from './shared/services/test.service';

import { AuthGuard } from './shared/guards/auth.guard';
import { UserType } from './shared/guards/user-type.guard';
import { MyInterceptor } from './shared/services/my-interceptor';
import { ErrorsHandler } from './shared/services/errors-handler';
import { PaginationService } from './shared/services/pagination.service';

@NgModule({
	declarations: [
		AppComponent,
		UsersComponent,
		PendingTestsComponent,
		TestsComponent,
		SingleUserComponent,
		TestTypeComponent,
		TestComponent,
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
		TestService,
		PaginationService
	],
	bootstrap: [AppComponent],
})
export class AppModule { }
