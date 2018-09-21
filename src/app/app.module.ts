import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './shared/services/users.service';
import { ProfileService } from './shared/services/profile.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ResultsComponent,
    TestsComponent,
    PassedTestsComponent,
    TrueFalseDirective,
  ],
  imports: [
	BrowserModule,
	ReactiveFormsModule,
	FormsModule,
	AuthModule,
	CoreModule,
	AppRouting,
	HttpClientModule
  ],
  providers: [AuthService, QuestionService, UserService, ProfileService],
  bootstrap: [AppComponent],
})
export class AppModule { }
