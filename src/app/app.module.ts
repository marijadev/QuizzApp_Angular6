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
import { SingleItemComponent } from './tests/test/single-item/single-item.component';
import { TextItemComponent } from './tests/test/text-item/text-item.component';
import { MultipleItemComponent } from './tests/test/testItemComponents/multiple-item/multiple-item.component';
import { OrderItemComponent } from './tests/test/testItemComponents/order-item/order-item.component';
import { ConnectingItemComponent } from './tests/test/testItemComponents/connecting-item/connecting-item.component';

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
		SingleItemComponent,
		TextItemComponent,
		MultipleItemComponent,
		OrderItemComponent,
		ConnectingItemComponent,
	],
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		FormsModule,
		AuthModule,
		CoreModule,
		AppRouting,
		HttpClientModule,
		BrowserAnimationsModule
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
