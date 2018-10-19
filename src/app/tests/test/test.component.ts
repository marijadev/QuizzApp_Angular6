import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef, EventEmitter, OnDestroy, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';

import { TestService } from '../../shared/services/test.service';
import { SingleItemComponent } from './testItemComponents/single-item/single-item.component';
import { MultipleItemComponent } from './testItemComponents/multiple-item/multiple-item.component';
import { TextItemComponent } from './testItemComponents/text-item/text-item.component';
import { OrderItemComponent } from './testItemComponents/order-item/order-item.component';
import { ConnectingItemComponent } from './testItemComponents/connecting-item/connecting-item.component';
import { questionTypes, API_URL } from '../../shared/constants';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-test',
	templateUrl: './test.component.html',
	styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, OnDestroy {
	testData = {
		id: 0,
		user: {},
		questions: [],
		date: null,
		result: 0,
		status: 0,

	};
	@ViewChild('dynamic', { read: ViewContainerRef }) container: ViewContainerRef;
	testForm: FormGroup;
	questionTypes: string[];
	childInstance: any;
	componentRef_: any;
	subscription;

	constructor(private http: HttpClient, private componentResolver: ComponentFactoryResolver, private route: Router, private actRoute: ActivatedRoute, private testService: TestService) { }

	ngOnInit() {

		this.subscription = this.testService.testRequest().subscribe(data => {
			console.log('test', data)
			if (data) {
				this.testData.id = data.id;
				this.testData.user = data.user;
				this.testData.questions = data.questions;
				this.testData.result = data.result;
				this.testData.status = data.status;
				this.testData.status = data.status;
				this.testData.date = data.date;
			}
			this.questionTypes = Object.keys(questionTypes);

			if (this.testData.questions) {
				this.testService.singleTestQuestions(this.testData.questions);
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
				this.componentRef_.instance.singleQuestion = question;

			} else if (this.questionTypes[1] == question.type) {
				const componentFactory = this.componentResolver.resolveComponentFactory(MultipleItemComponent);
				this.componentRef_ = this.container.createComponent(componentFactory);
				this.componentRef_.instance.singleQuestion = question;

			} else if (this.questionTypes[2] == question.type) {
				const componentFactory = this.componentResolver.resolveComponentFactory(TextItemComponent);
				this.componentRef_ = this.container.createComponent(componentFactory);
				this.componentRef_.instance.singleQuestion = question;

			} else if (this.questionTypes[3] == question.type) {
				const componentFactory = this.componentResolver.resolveComponentFactory(OrderItemComponent);
				this.componentRef_ = this.container.createComponent(componentFactory);
				this.componentRef_.instance.singleQuestion = question;

			} else if (this.questionTypes[4] == question.type) {
				const componentFactory = this.componentResolver.resolveComponentFactory(ConnectingItemComponent);
				this.componentRef_ = this.container.createComponent(componentFactory);
				this.componentRef_.instance.singleQuestion = question;

			}
				this.componentRef_.instance.testForm = this.testForm;

			return null;
		});
	};

	onSubmitTest() {
		//here goes post request
		this.testService.toggleTestTypeSelectedVisibility();
		this.testData.questions = this.testService.testQuestions;
		console.log('test',this.testData)
		return this.http.post(API_URL.testSubmit, this.testData).subscribe();
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
};
