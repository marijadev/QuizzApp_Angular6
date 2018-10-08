import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';

import { TestService } from '../../../../shared/services/test.service';

@Component({
	selector: 'app-single-item',
	templateUrl: './single-item.component.html',
	styleUrls: ['./single-item.component.scss']
})
export class SingleItemComponent implements OnInit {
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
		if (this.testService.questionsByType.single) {
			this.questionsArr = this.testService.questionsByType.single;
			const questionObj = this.questionsArr[0];
			for (let prop in questionObj) {
				if (prop === 'id') {
					this.singleQuestion.id = questionObj[prop];
				} else if (prop === 'question') {
					this.singleQuestion.question = questionObj[prop];
				} else if (prop === 'answers') {
					const arrayOfAnswers = questionObj[prop];

					for (let i = 0; i < arrayOfAnswers.length; i++) {
						this.singleQuestion.answers.push(arrayOfAnswers[i].answer);
					};
				};
			};
		};
	};
};
