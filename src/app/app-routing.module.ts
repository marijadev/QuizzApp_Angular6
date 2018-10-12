import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router' 

import { LoginComponent } from './auth/login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
	{ path: '', component: LoginComponent },
	{ path: 'not-found', component: NotFoundComponent },
	{ path: '**', redirectTo: 'not-found' }
]

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})
export class AppRouting {}