import { Component, OnInit, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Question } from '../../shared/question.model';


@Component({
	selector: 'app-question',
	templateUrl: './question.component.html',
	styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
	type: string;
	@ViewChild('vc', { read: ViewContainerRef }) viewContainer: ViewContainerRef;
	@ViewChild('sng') singleC: TemplateRef<any>;
	@ViewChild('mlt') multiC: TemplateRef<any>;
	@ViewChild('txt') textC: TemplateRef<any>;
	@ViewChild('ord') orderC: TemplateRef<any>;
	@ViewChild('cnn') conneC: TemplateRef<any>;

	questionForm: FormGroup;
	difficulties: string[] = ['Easy', 'Medium', 'Difficult'];
	categories: string[] = ['JavaScript', 'Java', 'PHP'];
	questionTypes: string[] = ['Single Choice', 'Multiple Choice', 'Text', 'Connecting', 'Order'];
	subscription: Observable<any>;
	newQuestion: Question = {
		id: null,
		question: '',
		category: '',
		difficulty: '',
		type: '',
		answers: []
	};

	constructor(private router: Router, private actRoute: ActivatedRoute) { }

	ngOnInit() {
		this.questionForm = new FormGroup({
			'question': new FormControl(null),
			'category': new FormControl(null),
			'difficulty': new FormControl(null),
			'type': new FormControl(null)
		})
	}

	onTypeChange(e: any) {
		const type = e.target.value;
		this.newQuestion.type = type;
		this.type = type;
		this.viewContainer.remove();
		this.checkQuestionType();
	}

	onSubmitQuestion() {
		this.newQuestion.id = Math.floor(Math.random() * 100000) + 1;
		this.newQuestion.question = this.questionForm.controls.question.value;
		this.newQuestion.category = this.questionForm.controls.category.value;
		this.newQuestion.difficulty = this.questionForm.controls.difficulty.value;
		this.newQuestion.type = this.questionForm.controls.type.value;
		this.newQuestion.answers = null;
	}

	checkQuestionType() {
		switch (this.type) {
			case "Single Choice":
				this.viewContainer.createEmbeddedView(this.singleC);
				break;
			case "Multiple Choice":
				this.viewContainer.createEmbeddedView(this.multiC);
				break;
			case "Text":
				this.viewContainer.createEmbeddedView(this.textC);
				break;
			case "Order":
				this.viewContainer.createEmbeddedView(this.orderC);
				break;
			case "Connecting":
				this.viewContainer.createEmbeddedView(this.conneC);
				break;
		}
	}
}
