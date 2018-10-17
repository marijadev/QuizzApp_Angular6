import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { SingleItemComponent } from './test/testItemComponents/single-item/single-item.component';
import { MultipleItemComponent } from './test/testItemComponents/multiple-item/multiple-item.component';
import { OrderItemComponent } from './test/testItemComponents/order-item/order-item.component';
import { TextItemComponent } from './test/testItemComponents/text-item/text-item.component';
import { ConnectingItemComponent } from './test/testItemComponents/connecting-item/connecting-item.component';
import { CoreRoutingModule } from '../core/core-routing.module';
import { PassedTestsComponent } from './passed-tests/passed-tests.component';
import { PlusOnePipe } from '../shared/plus-one.pipe';

@NgModule({
	declarations: [
		SingleItemComponent,
		MultipleItemComponent,
		OrderItemComponent,
		TextItemComponent,
		ConnectingItemComponent,
		PassedTestsComponent,
		PlusOnePipe
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		CoreRoutingModule,
		DragDropModule
	],
	exports: [ PlusOnePipe ],
	providers: [],
	bootstrap: [],
	entryComponents: [
		SingleItemComponent,
		MultipleItemComponent,
		OrderItemComponent,
		TextItemComponent,
		ConnectingItemComponent
	]

})
export class TestsModule { }
