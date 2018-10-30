import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from '../admin/users/users.component';
import { QuestionComponent } from '../admin/questions/question/question.component';
import { PendingTestsComponent } from '../admin/pending/pendingTests.component';
import { TestsComponent } from '../tests/tests.component';
import { PassedTestsComponent } from '../tests/passed-tests/passed-tests.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { TestComponent } from '../tests/test/test.component';

const coreRoutes: Routes = [
	{
		path: 'home', component: HomeComponent, canActivate: [AuthGuard], children: [
			{ path: 'question', component: QuestionComponent},
			{ path: 'pending-tests', component: PendingTestsComponent },
			{ path: 'users', component: UsersComponent },
			{ path: 'passed-tests', component: PassedTestsComponent },
			{ path: 'tests', component: TestsComponent },
			{ path: 'test', component: TestComponent },
		]
	},
	{ path: '**', redirectTo: '' }
]

@NgModule({
	imports: [RouterModule.forChild(coreRoutes)],
	exports: [RouterModule]
})

export class CoreRoutingModule { }