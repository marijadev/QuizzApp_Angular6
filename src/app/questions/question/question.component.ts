import { Component, OnInit, ViewChild, ViewContainerRef, Input, ForwardRefFn } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray, ValidationErrors } from '@angular/forms';

import { Question } from '../../shared/question.model';
import { ComponentFactoryResolver } from '@angular/core';
import { SingleChoiceComponent } from './question-type/single-choice/single-choice.component';
import { MultipleChoiceComponent } from './question-type/multiple-choice/multiple-choice.component';
import { TextComponent } from './question-type/text/text.component';
import { OrderComponent } from './question-type/order/order.component';
import { questionTypes, API_URL } from '../../shared/constants';
import { QuestionService } from '../question.service';
import { ConnectingComponent } from './question-type/connecting/connecting.component';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-question',
	templateUrl: './question.component.html',
	styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
	type: string;
	componentRef_: any;
	childInstance: any;
	@ViewChild('dynamic', { read: ViewContainerRef }) container: ViewContainerRef;
	questionForm: FormGroup;
	difficulties: string[] = ['Easy', 'Medium', 'Difficult'];
	categories;
	questionTypes: string[];
	newQuestion: Question = {
		id: null,
		question: '',
		category: '',
		difficulty: '',
		type: '',
		answers: []
	};
	childInvalid = false;

	constructor(private componentResolver: ComponentFactoryResolver, private qService: QuestionService, private http: HttpClient) { }

	ngOnInit() {
		this.questionForm = new FormGroup({
			'question': new FormControl(null, [Validators.required]),
			'category': new FormControl(null, [Validators.required]),
			'difficulty': new FormControl(null, [Validators.required]),
			'type': new FormControl(null, [Validators.required]),
		}, {
			validators: [(control: FormGroup): ValidationErrors | null => {
				// if(!!this.childInstance) {
				// 	return this.childInstance.validate(control);
				// } 
				return null;
			}]
		});
		this.http.get(API_URL.userCategories).subscribe(data => this.categories = data);
		this.questionTypes = Object.keys(questionTypes);
	}

	visibleComponent = () => {
		this.container.clear();

		if (this.type == 'Single Choice') {
			const componentFactory = this.componentResolver.resolveComponentFactory(SingleChoiceComponent);
			this.componentRef_ = this.container.createComponent(componentFactory);
			this.childInstance = this.componentRef_.instance;
		}
		else if (this.type == 'Multiple Choice') {
			const componentFactory = this.componentResolver.resolveComponentFactory(MultipleChoiceComponent);
			this.componentRef_ = this.container.createComponent(componentFactory);
			this.childInstance = this.componentRef_.instance;
		}
		else if (this.type == 'Text') {
			const componentFactory = this.componentResolver.resolveComponentFactory(TextComponent);
			this.componentRef_ = this.container.createComponent(componentFactory);
		}
		else if (this.type == 'Order') {
			const componentFactory = this.componentResolver.resolveComponentFactory(OrderComponent);
			this.componentRef_ = this.container.createComponent(componentFactory);
		}
		else if (this.type == 'Connecting') {
			const componentFactory = this.componentResolver.resolveComponentFactory(ConnectingComponent);
			this.componentRef_ = this.container.createComponent(componentFactory);
		}
		this.componentRef_.instance.questionForm = this.questionForm;
	}

	onTypeChange(e: any) {
		this.newQuestion.type = e.target.value;
		this.type = e.target.value;
		this.visibleComponent();
	}
	onSubmitQuestion() {
		for (let property in this.newQuestion) {
			property = null;
		}
		this.newQuestion.id = Math.floor(Math.random() * 100000) + 1;
		this.newQuestion.question = this.questionForm.controls.question.value;
		this.newQuestion.category = this.questionForm.controls.category.value;
		this.newQuestion.difficulty = this.questionForm.controls.difficulty.value;
		this.newQuestion.type = this.questionForm.controls.type.value;
		for (let i = 0; i < this.componentRef_.instance.values.length; i++) {
			if (this.componentRef_.instance.values[i].value) {
				this.componentRef_.instance.values[i].value = 1;
			}
		}
		this.newQuestion.answers = this.componentRef_.instance.values;
		console.log(this.newQuestion)
		this.questionForm.reset();
		return this.http.post('/server/admin/newq', this.newQuestion)
	}

	ngOnDestroy() {
		if (this.componentRef_) {
			this.componentRef_.destroy();
		}
	}
}
