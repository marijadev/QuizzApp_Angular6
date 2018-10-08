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
			for (let prop in questionObj) {
				if (prop === 'id') {
					this.singleQuestion.id = questionObj[prop];
				} else if (prop === 'question') {
					this.singleQuestion.question = questionObj[prop];
				} else if (prop === 'answers') {
					const arrayOfAnswers = questionObj[prop];

					for (let i = 0; i < arrayOfAnswers.length; i++) {
						this.singleQuestion.answers.push(arrayOfAnswers[i].answer);
					}
				}
			}
		}

		// this.testForm.addControl('newAnswer', this.fb.array([
		// 	this.singleQuestion.answers.forEach(answer => answer, this.fb.control('answer'))
		// ]));
	};
}
