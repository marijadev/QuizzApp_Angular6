import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';


@Component({
	selector: 'app-single-choice',
	templateUrl: './single-choice.component.html',
	styleUrls: ['./single-choice.component.scss']
})
export class SingleChoiceComponent implements OnInit {
	answerForm: FormGroup;
	formAnswers: Answers;
	arrayOfAnswers: EventEmitter<any> = new EventEmitter<any>();
	selectedCheckbox: boolean = false;

	constructor(private fb: FormBuilder, ) { }

	ngOnInit() {
		this.answerForm = this.fb.group({
			answers: this.fb.array([this.fb.group({ answer: '', value: false })])
		})
	}

	get answers() {
		const array = this.answerForm.get('answers') as FormArray;
		console.log(array.value)
		this.formAnswers = array.value;
		return array;
	}

	addAnswer() {
		this.answers.push(this.fb.group({
			answer: '',
			value: false
		}));
		// console.log(this.answerForm.controls.answers.value)
	}

	get values() {
		const array = this.answerForm.get('answers') as FormArray;
		this.formAnswers = array.value;
		return this.formAnswers;
	}

	deleteAnswer(index) {
		if (index !== 0) {
			this.answers.removeAt(index);
		}
	}

}