import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { TestService } from '../../../../shared/services/test.service';

@Component({
	selector: 'app-single-item',
	templateUrl: './single-item.component.html',
	styleUrls: ['./single-item.component.scss']
})
export class SingleItemComponent implements OnInit {
	testForm: FormGroup;
	questionsArr: object[];
	singleQuestion;
	question;
	questionInvalid: boolean = false;

	constructor(private fb: FormBuilder, private testService: TestService) { };

	ngOnInit() {
		if (this.singleQuestion) {
			this.question = this.singleQuestion;
		};
	};

	onChecked(e: any, index: number) {
		const answers = this.question.answers;
		const id = this.question.id;
		for (let i = 0; i < answers.length; i++) {
			answers[i].chosen = 0; 

			if (i === index) {
				answers[i].chosen = 1;
			};
		};
		this.testService.onSingleTestQuestionsUpdate(id, this.question);
	};
};
