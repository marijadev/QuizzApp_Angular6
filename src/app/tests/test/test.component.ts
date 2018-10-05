import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormArray, Validators, FormControl } from '@angular/forms';

import { TestService } from '../../shared/services/test.service';
import { SingleItemComponent } from './testItemComponents/single-item/single-item.component';
import { MultipleItemComponent } from './testItemComponents/multiple-item/multiple-item.component';
import { TextItemComponent } from './testItemComponents/text-item/text-item.component';
import { OrderItemComponent } from './testItemComponents/order-item/order-item.component';
import { ConnectingItemComponent } from './testItemComponents/connecting-item/connecting-item.component';

@Component({
	selector: 'app-test',
	templateUrl: './test.component.html',
	styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
	testData = {
		id: 0,
		user: {},
		questions: []
	};
	@ViewChild('dynamic', { read: ViewContainerRef }) container: ViewContainerRef;
	testForm: FormGroup;
	questionTypes: string[];
	childInstance: any;
	testQuestions;

	constructor(private componentResolver: ComponentFactoryResolver, private route: Router, private actRoute: ActivatedRoute, private testService: TestService) { }

	ngOnInit() {
		this.testService.fakeRequest().subscribe((data) => {
			if (data) {
				this.testData.id = data.id;
				this.testData.user = data.user;
				this.testData.questions = data.questions;
			}
			this.questionTypes = this.testService.checkTestQuestionType(this.testData.questions);
		})
		// create new FormGroup
		this.testForm = new FormGroup({
		});

		this.testService.getQuestions(this.testData.questions);
	}

	visibleQuestionItem() {
		this.testQuestions = this.questionTypes.map(type => {
			if (type == this.questionTypes[0]) {
				const componentFactory = this.componentResolver.resolveComponentFactory(SingleItemComponent);
				this.childInstance.push(this.container.createComponent(componentFactory).instance);
			} else if (type == this.questionTypes[1]) {
				const componentFactory = this.componentResolver.resolveComponentFactory(MultipleItemComponent);
				this.childInstance.push(this.container.createComponent(componentFactory).instance);
			} else if (type == this.questionTypes[2]) {
				const componentFactory = this.componentResolver.resolveComponentFactory(TextItemComponent);
				this.childInstance.push(this.container.createComponent(componentFactory).instance);
			} else if (type == this.questionTypes[3]) {
				const componentFactory = this.componentResolver.resolveComponentFactory(OrderItemComponent);
				this.childInstance.push(this.container.createComponent(componentFactory).instance);
			} else if (type == this.questionTypes[4]) {
				const componentFactory = this.componentResolver.resolveComponentFactory(ConnectingItemComponent);
				this.childInstance.push(this.container.createComponent(componentFactory).instance);
			} return null;
		});
	};


	onPreviousPage() {
		// this.route.navigate(['/home/tests'], { relativeTo: this.actRoute });
	}




}
