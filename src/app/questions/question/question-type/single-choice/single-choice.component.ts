import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { QuestionService } from '../../../../questions/question.service';

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

	constructor(private fb: FormBuilder, private qService: QuestionService) { }

	ngOnInit() {
		this.answerForm = this.fb.group({
			answers: this.fb.array([this.fb.group({ answer: '', value: false })])
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
			value: false
		}));
		// console.log(this.answerForm.controls.answers.value)
	}

	get values() {
		const array = this.answerForm.get('answers') as FormArray;
		let value = 0;
		let result = false;
		array.value.map(obj => {
			if (obj.value === true) {
				value++;
			}
			if (value === 0 || value > 1) {
				result = false;
				return result
			}
			result = true;
			return result;
		})

		if (result === false) {
			this.qService.isChildFormValid = false;
			console.log('cannot submit')
			return null;
		} else {
			this.qService.isChildFormValid = true;
			console.log('submit')
			this.formAnswers = array.value;
			return this.formAnswers;
		}
		// console.log(array.value)
	}

	deleteAnswer(index) {
		if (this.formAnswers.length > 1) {
			this.answers.removeAt(index);
		}
	}

}