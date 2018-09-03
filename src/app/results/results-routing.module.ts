import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ResultsComponent } from './results.component';


const resultsRoutes: Routes = [
	{ path: 'results', component: ResultsComponent }
]
@NgModule({
	imports: [RouterModule.forChild(resultsRoutes)],
	exports: [RouterModule]
})

export class ResultsRouting { }
