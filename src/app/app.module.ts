import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRouting } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
	BrowserModule,
	FormsModule,
	AuthModule,
	AppRouting,
	CoreModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
