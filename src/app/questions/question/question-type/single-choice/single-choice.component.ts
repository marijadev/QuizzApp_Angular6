import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { QuestionService } from '../../../../questions/question.service';

@Component({
	selector: 'app-single-choice',
	templateUrl: './single-choice.component.html',
	styleUrls: ['./single-choice.component.scss']
})
export class SingleChoiceComponent implements OnInit, OnDestroy {
	questionForm: FormGroup;

	constructor(private fb: FormBuilder, private qService: QuestionService) { }

	ngOnInit() {
		this.questionForm.addControl('answers', this.fb.array([this.createAnswer()]));
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
		// console.log(answersArray)
		// const result = answersArray.filter(item => item.value === true).length == 1 ? true : 0;
		// if (result === 0) {
		// 	this.qService.isChildFormValid = 0;
		// 	console.log('cannot submit')
		// 	return;
		// } else {
		// 	this.qService.isChildFormValid = 1;
		// 	console.log('submit')
		// 	return answersArray;
		// }
		return answersArray;
	}

	deleteAnswer(index: number) {
		const answersArray = this.answers.value;
		if (answersArray.length > 1) {
			this.answers.removeAt(index);
		}
	}

	validate(control: FormGroup): { [s: string]: boolean } {
		// const trueValues: number = this.answers.value.filter(item => item.value === true).length;
		const checked = control.get('value');
console.log(control.get('answer'))
		// return checked === true ? { 'checkboxValid': true } : null;
		return null;
	}

	ngOnDestroy() {
		// this.questionForm.removeControl('answers');
	}
}