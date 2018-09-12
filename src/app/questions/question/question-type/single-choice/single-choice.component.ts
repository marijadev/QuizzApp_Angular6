import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { QuestionService } from '../../../../questions/question.service';

@Component({
	selector: 'app-single-choice',
	templateUrl: './single-choice.component.html',
	styleUrls: ['./single-choice.component.scss']
})
export class SingleChoiceComponent implements OnInit {
	questionForm: FormGroup;
	formAnswers: Answers;
	arrayOfAnswers: EventEmitter<any> = new EventEmitter<any>();

	constructor(private fb: FormBuilder, private qService: QuestionService) { }

	ngOnInit() {
		this.questionForm.addControl('answers', this.fb.array([this.fb.control({ answer: '', value: false })]));
		// console.log(this.questionForm)
	}

	get answers() {
		const array = this.questionForm.controls.answers.value;
		// const array = this.questionForm.get('answers') as FormArray;
		this.formAnswers = array;
		console.log(this.formAnswers)
		return this.formAnswers;
	}

	addAnswer() {
		// this.formAnswers.push(this.fb.control({
		// 	answer: '',
		// 	value: false
		// }));
		// console.log(this.formAnswers)
	}

	// get values() {
	// 	const array = this.answerForm.get('answers') as FormArray;
	// 	const result = array.value.filter(item => item.value === true).length == 1 ? true : false;

	// 	if (result === false) {
	// 		this.qService.isChildFormValid = false;
	// 		console.log('cannot submit')
	// 		return;
	// 	} else {
	// 		this.qService.isChildFormValid = true;
	// 		console.log('submit')
	// 		this.formAnswers = array.value;
	// 		return this.formAnswers;
	// 	}
	// }

	// deleteAnswer(index) {
	// 	if (this.formAnswers.length > 1) {
	// 		this.answers.removeAt(index);
	// 	}
	// }

}