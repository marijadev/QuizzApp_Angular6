import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TestService } from '../../../../shared/services/test.service';

@Component({
	selector: 'app-multiple-item',
	templateUrl: './multiple-item.component.html',
	styleUrls: ['./multiple-item.component.scss']
})
export class MultipleItemComponent implements OnInit {
	testForm: FormGroup;
	questionsArr: object[];
	singleQuestion = {
		id: 0,
		question: '',
		difficulty: '',
		type: '',
		category: '',
		answers: []
	};
	answers = [];

	constructor(private fb: FormBuilder, private testService: TestService) { };

	ngOnInit() {
		if (this.testService.questionsByType.multiple) {
			this.questionsArr = this.testService.questionsByType.multiple;
			const questionObj = this.questionsArr[0];

			this.singleQuestion.id = questionObj['id'];
			this.singleQuestion.question = questionObj['question'];
			this.singleQuestion.difficulty = questionObj['difficulty'];
			this.singleQuestion.type = questionObj['type'];
			this.singleQuestion.category = questionObj['category'];
			this.singleQuestion.answers = questionObj['answers'];
		};
	};
	
	onChecked(e: any, index: number) {
		const answers = this.singleQuestion.answers;
		if (e.srcElement.checked === true) {
			for (let i = 0; i < answers.length; i++) {
				if (i === index) {
					answers[i].chosen = 1;
				};
			};
		};
		if (e.srcElement.checked === false) {
			for (let i = 0; i < answers.length; i++) {
				if (i === index) {
					answers[i].chosen = 0;
				};
			};
		};
	};
};
