import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { QuestionService } from '../../../../questions/question.service';

@Component({
	selector: 'app-order',
	templateUrl: './order.component.html',
	styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
	questionForm: FormGroup;
	constructor(private fb: FormBuilder, private qService: QuestionService) { }

	ngOnInit() {
		this.questionForm.addControl('answers', this.fb.array([this.createAnswer()], answersOrder => {
			return this.validate(answersOrder as FormArray)
		}));
	}

	createAnswer() {
		return this.fb.group({
			answer: new FormControl(null, [Validators.required]),
			value: new FormControl(0)
		})
	}

	get answers(): FormArray {
		return this.questionForm.get('answers') as FormArray;
	}

	addAnswer() {
		const answer = this.createAnswer();
		this.answers.push(answer);
	}

	get values() {
		const answersArray = this.answers.value;
		return answersArray;
	}

	deleteAnswer(index: number) {
		const answersArray = this.answers.value;
		if (answersArray.length > 1) {
			this.answers.removeAt(index);
		}
	}

	validate(control: FormArray): { [s: string]: boolean } {
		// let lastValue = 1;
		// let currentValue;

		// for (let i = 1; i < control.length; i++) {
		// 	if (lastValue === control.value.length) {
		// 		console.log('control.value: ', control.value[i].value)
		// 		return null;
		// 	}
		// }
		return { 'orderInvalid': true };
	}

	ngOnDestroy() {
		this.questionForm.removeControl('answers');
	}


}
