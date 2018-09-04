import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { QuestionComponent } from './question/question.component';


const questionRoutes: Routes = [
	{ path: '', component: QuestionComponent, children:[
		// {path: 'single-type', component: S}
	] }
]

@NgModule({
	imports: [RouterModule.forChild(questionRoutes)],
	exports: [RouterModule]
})
export class QuestionRouting {}