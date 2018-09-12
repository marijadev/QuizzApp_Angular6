import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { QuestionService } from '../../../../questions/question.service';

@Component({
	selector: 'app-order',
	templateUrl: './order.component.html',
	styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
	answerForm: FormGroup;
	formAnswers: Answers;
	arrayOfAnswers: EventEmitter<any> = new EventEmitter<any>();
	order;

	constructor(private fb: FormBuilder, private qService: QuestionService) { }

	ngOnInit() {
		this.answerForm = this.fb.group({
			answers: this.fb.array([this.fb.group({ answer: '', value: '' })])
		})
	}

	get answers() {
		const array = this.answerForm.get('answers') as FormArray;
		this.formAnswers = array.value;
		return array;
	}

	addAnswer() {
		this.answers.push(this.fb.group({
			answer: '',
			value: ''
		}));
		// console.log(this.answerForm.controls.answers.value)
	}

	get values() {
		const inputArray = this.answerForm.get('answers') as FormArray;
		let inputValues = inputArray.value.slice().map(item => item.value);
		let inputAnswers = inputArray.value.slice().map(item => item.answer);
		let orderSort = inputValues.filter(val => val !== '').sort();
		console.log('answers: ', inputAnswers.length, 'values: ', orderSort.length)

	
		this.formAnswers = inputArray.value;
		return this.formAnswers;
	}

	deleteAnswer(index) {
		if (this.formAnswers.length > 1) {
			this.answers.removeAt(index);
		}
	}


}
