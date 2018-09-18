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
	answerArrayLength: number;
	constructor(private fb: FormBuilder, private qService: QuestionService) { }

	ngOnInit() {
		this.questionForm.addControl('answers', this.fb.array([this.createAnswer()], answersOrder => {
			return this.validate(answersOrder as FormArray)
		}));
	}

	createAnswer() {
		return this.fb.group({
			answer: new FormControl(null, [Validators.required]),
			value: new FormControl(1, [Validators.min(1), Validators.required])
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
		let valueArray = [];
		this.answerArrayLength = valueArray.length;
		let currentValue;

		for (let i = 0; i < control.length; i++) {
			currentValue = control.value[i].value;
			valueArray.push(currentValue);
		}

		if (valueArray.includes(currentValue) == false) {
			return null;
		}
		console.log(valueArray)
		return { 'valueRepeat': true }
	};

	ngOnDestroy() {
		this.questionForm.removeControl('answers');
	}


}
