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
	singleQuestion;
	answers = [];
	question;

	constructor(private fb: FormBuilder, private testService: TestService) { };

	ngOnInit() {
		if (this.singleQuestion) {
			this.question = this.singleQuestion;
		};
	};

	onChecked(e: any, index: number) {
		const answers = this.singleQuestion.answers;
		if (e.srcElement.checked === true || e.srcElement.checked === 1) {
			for (let i = 0; i < answers.length; i++) {
				if (i === index) {
					answers[i].chosen = 1;
				};
			};
		};
		if (e.srcElement.checked === false || e.srcElement.checked === 0 ) {
			for (let i = 0; i < answers.length; i++) {
				if (i === index) {
					answers[i].chosen = 0;
				};
			};
		};
	};
};
