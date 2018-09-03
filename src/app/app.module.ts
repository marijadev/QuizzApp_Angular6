import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRouting } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { CoreModule } from './core/core.module';
import { QuestionModule } from './questions/question.module';
import { UsersComponent } from './users/users.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ResultsComponent,
  ],
  imports: [
	BrowserModule,
	FormsModule,
	AuthModule,
	CoreModule,
	QuestionModule,
	AppRouting,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
