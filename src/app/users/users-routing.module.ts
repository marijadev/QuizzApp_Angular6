import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { UsersComponent } from './users.component';
import { UserType } from '../shared/guards/user-type.guard';
import { SingleUserComponent } from './single-user/single-user.component';

const usersRoutes: Routes = [
	{ path: 'users', component: UsersComponent, canActivate: [UserType] },
]
@NgModule({
	imports: [RouterModule.forChild(usersRoutes)],
	exports: [RouterModule]
})

export class UsersRouting { }
