import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';

const coreRoutes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'header', component:HeaderComponent },
]

@NgModule({
	declarations: [
		HomeComponent,
		HeaderComponent,
		ProfileComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		RouterModule.forChild(coreRoutes)
	],
	exports: [RouterModule],
	providers: [],
	bootstrap: []
})
export class CoreModule { }
