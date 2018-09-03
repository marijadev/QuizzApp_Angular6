import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { UsersComponent } from './users.component';

const usersRoutes: Routes = [
	{path: 'users', component: UsersComponent}
]
@NgModule({
	imports: [RouterModule.forChild(usersRoutes)],
	exports: [RouterModule]
})

export class UsersRouting{}
