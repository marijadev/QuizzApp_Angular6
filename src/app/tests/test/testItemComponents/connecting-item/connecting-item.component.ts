import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TestService } from '../../../../shared/services/test.service';

@Component({
	selector: 'app-connecting-item',
	templateUrl: './connecting-item.component.html',
	styleUrls: ['./connecting-item.component.scss']
})
export class ConnectingItemComponent implements OnInit {
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
	answersLeft;
	answersRight;

	constructor(private fb: FormBuilder, private testService: TestService) { };

	ngOnInit() {
		if (this.testService.questionsByType.connecting) {
			this.questionsArr = this.testService.questionsByType.connecting;
			const questionObj = this.questionsArr[0];
			for (let prop in questionObj) {
				if (prop === 'id') {
					this.singleQuestion.id = questionObj[prop];
				} else if (prop === 'question') {
					this.singleQuestion.question = questionObj[prop];
				} else if (prop === 'answers') {
					const arrayOfAnswers = questionObj[prop];
					let odd= [];
					let even= [];
					for (let i = 0; i < arrayOfAnswers.length; i++) {
						if(i % 2 === 0) {
							odd.push(arrayOfAnswers[i].answer);
						} else if(i % 2 !== 0) {
							even.push(arrayOfAnswers[i].answer)
						}
						// this.singleQuestion.answers.push(arrayOfAnswers[i].answer);
						// console.log('odd ', odd, "even ", even)
					}
					this.answersLeft = odd;
					this.answersRight = even;
				}
			}
		};
	};
}
