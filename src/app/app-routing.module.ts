import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router' 

import { LoginComponent } from './auth/login/login.component';

const appRoutes: Routes = [
	{ path: '', component: LoginComponent },
	{ path: '**', redirectTo: 'login' }
]

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})
export class AppRouting {}