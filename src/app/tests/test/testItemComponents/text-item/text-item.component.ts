import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TestService } from '../../../../shared/services/test.service';

@Component({
	selector: 'app-text-item',
	templateUrl: './text-item.component.html',
	styleUrls: ['./text-item.component.scss']
})
export class TextItemComponent implements OnInit {
	testForm: FormGroup;
	questionsArr: any;
	singleQuestion = {
		id: 0,
		question: '',
		difficulty: '',
		type: '',
		category: '',
		answers: []
	};
	constructor(private fb: FormBuilder, private testService: TestService) { };

	ngOnInit() {
		if (this.testService.questionsByType.text) {
			this.questionsArr = this.testService.questionsByType.text;
			const questionObj = this.questionsArr[0];
			this.singleQuestion.id = questionObj['id'];
			this.singleQuestion.question = questionObj['question'];
			this.singleQuestion.type = questionObj['type'];
			this.singleQuestion.difficulty = questionObj['difficulty'];
			this.singleQuestion.category = questionObj['category'];
			this.singleQuestion.answers = questionObj['answers'];
		};
	};

	onTextAdded(e: any) {
		const userAnswer = e.srcElement.value;
		this.singleQuestion.answers = [{
			id: null,
			answer: userAnswer,
			value: 0,
			chosen: 0
		}];
	};
};