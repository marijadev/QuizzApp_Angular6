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
	singleQuestion;
	question;
	constructor(private fb: FormBuilder, private testService: TestService) { };

	ngOnInit() {
		if (this.singleQuestion) {
			this.question = this.singleQuestion;
		};
		this.question.answers.push({
			id: null,
			answer: '',
			value: 0,
			chosen: 0
		});
	};

	onTextAdded(e: any) {
		const userAnswer = e.srcElement.value;
		const id = this.question.id;
		if(userAnswer) {
			this.question.answers[0].answer = userAnswer;
		};
		this.testService.onSingleTestQuestionsUpdate(id, this.question);
	};
};