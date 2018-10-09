import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';

import { TestService } from '../../shared/services/test.service';
import { SingleItemComponent } from './testItemComponents/single-item/single-item.component';
import { MultipleItemComponent } from './testItemComponents/multiple-item/multiple-item.component';
import { TextItemComponent } from './testItemComponents/text-item/text-item.component';
import { OrderItemComponent } from './testItemComponents/order-item/order-item.component';
import { ConnectingItemComponent } from './testItemComponents/connecting-item/connecting-item.component';
import { questionTypes } from '../../shared/constants';

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
	componentRef_: any;
	constructor(private componentResolver: ComponentFactoryResolver, private route: Router, private actRoute: ActivatedRoute, private testService: TestService) { }

	ngOnInit() {
		this.testService.fakeRequest().subscribe((data) => {
			// console.log(data)
			if (data) {
				this.testData.id = data.id;
				this.testData.user = data.user;
				this.testData.questions = data.questions;
			}
			this.questionTypes = Object.keys(questionTypes);

			if (this.testData.questions) {
				this.testService.getQuestions(this.testData.questions);
				this.addDynamicQuestion();
			}
		})
		// creating new FormGroup
		this.testForm = new FormGroup({});
	}

	addDynamicQuestion() {
		this.testData.questions.map(question => {
			if (this.questionTypes[0] == question.type) {
				const componentFactory = this.componentResolver.resolveComponentFactory(SingleItemComponent);
				this.componentRef_ = this.container.createComponent(componentFactory);

				this.testService.questionsByType.single.push(question);
				// console.log('single ', this.testService.questionsByType.single)

			} else if (this.questionTypes[1] == question.type) {
				const componentFactory = this.componentResolver.resolveComponentFactory(MultipleItemComponent);
				this.componentRef_ = this.container.createComponent(componentFactory);

				this.testService.questionsByType.multiple.push(question);
				// console.log('multiple ', this.testService.questionsByType.multiple)

			} else if (this.questionTypes[2] == question.type) {
				const componentFactory = this.componentResolver.resolveComponentFactory(TextItemComponent);
				this.componentRef_ = this.container.createComponent(componentFactory);

				this.testService.questionsByType.text.push(question);
				// console.log('text', this.testService.questionsByType.text)

			} else if (this.questionTypes[3] == question.type) {
				const componentFactory = this.componentResolver.resolveComponentFactory(OrderItemComponent);
				this.componentRef_ = this.container.createComponent(componentFactory);

				this.testService.questionsByType.order.push(question);
				// console.log('order', this.testService.questionsByType.order)

			} else if (this.questionTypes[4] == question.type) {
				const componentFactory = this.componentResolver.resolveComponentFactory(ConnectingItemComponent);
				this.componentRef_ = this.container.createComponent(componentFactory);

				this.testService.questionsByType.connecting.push(question);
				// console.log('connecting', this.testService.questionsByType.connecting)
			}
			this.componentRef_.instance.testForm = this.testForm;

			return null;
		});
	};

	onSubmitAnswer() {
		// console.log('submit works')
	}

	onPreviousPage() {
		// this.route.navigate(['/home/tests'], { relativeTo: this.actRoute });
	}




}
