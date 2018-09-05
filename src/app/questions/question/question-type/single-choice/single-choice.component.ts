import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
	selector: 'app-single-choice',
	templateUrl: './single-choice.component.html',
	styleUrls: ['./single-choice.component.scss']
})
export class SingleChoiceComponent implements OnInit {
	answerForm: FormGroup;
	constructor(private fb: FormBuilder) { }

	ngOnInit() {
		this.answerForm = this.fb.group({
			title: [],
			answers: this.fb.array([this.fb.group({ point: '' })])
		})
	}

	get answers() {
		return this.answerForm.get('answers') as FormArray;
	}

	addAnswer() {
		this.answers.push(this.fb.group({ point: '' }));
	}

	deleteAnswer(index) {
		if (index !== 0) {
			this.answers.removeAt(index);
		}
	}

}
