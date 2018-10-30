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
		this.questionForm.addControl('answers', this.fb.array([this.createAnswer()], answersArray => {
			return this.validate(answersArray as FormArray);
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
		let trueLength = 0;
		for (let i = 0; i < control.value.length; i++) {
			if (control.value[i].value === true) {
				trueLength++;
			}
		}
		if (trueLength > 1 || trueLength === 0) {
			return { 'checkboxValid': true };
		}
		return null;
	}

	ngOnDestroy() {
		this.questionForm.removeControl('answers');
	}
}