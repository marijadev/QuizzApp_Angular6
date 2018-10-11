import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRouting } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { CoreModule } from './core/core.module';
import { UsersComponent } from './users/users.component';
import { ResultsComponent } from './results/results.component';
import { TestsComponent } from './tests/tests.component';
import { PassedTestsComponent } from './tests/passed-tests/passed-tests.component';
import { QuestionService } from './questions/question.service';
import { TrueFalseDirective } from './shared/true-false.directive';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from './shared/services/users.service';
import { ProfileService } from './shared/services/profile.service';
import { AuthGuard } from './shared/guards/auth.guard';
import { TokenStorageService } from './shared/services/token-storage.service';
import { MyInterceptor } from './shared/services/my-interceptor';
import { DataService } from './shared/services/data.service';
import { TestTypeComponent } from './tests/test-type/test-type.component';
import { TestComponent } from './tests/test/test.component';
import { TestService } from './shared/services/test.service';
import { SingleUserComponent } from './users/single-user/single-user.component';

@NgModule({
	declarations: [
		AppComponent,
		UsersComponent,
		ResultsComponent,
		TestsComponent,
		PassedTestsComponent,
		TrueFalseDirective,
		TestTypeComponent,
		TestComponent,
		SingleUserComponent
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
		AuthGuard,
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
