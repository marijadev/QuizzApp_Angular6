import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SingleItemComponent } from './test/testItemComponents/single-item/single-item.component';
import { MultipleItemComponent } from './test/testItemComponents/multiple-item/multiple-item.component';
import { OrderItemComponent } from './test/testItemComponents/order-item/order-item.component';
import { TextItemComponent } from './test/testItemComponents/text-item/text-item.component';
import { ConnectingItemComponent } from './test/testItemComponents/connecting-item/connecting-item.component';


@NgModule({
	declarations: [
		SingleItemComponent,
		MultipleItemComponent,
		OrderItemComponent,
		TextItemComponent,
		ConnectingItemComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
	],
	providers: [],
	bootstrap: [],
	entryComponents: []

})
export class TestsModule { }
