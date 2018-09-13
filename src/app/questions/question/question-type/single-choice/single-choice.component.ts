import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
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
		this.questionForm.addControl('answers', this.fb.array([this.createAnswer()]));
	}

	createAnswer() {
		return this.fb.group({
			answer: new FormControl(null, [Validators.required]),
			value: new FormControl(null)
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
		console.log(answersArray)
		// const result = answersArray.value.filter(item => item.value === true).length == 1 ? true : false;
		return answersArray;
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
	}

	deleteAnswer(index: number) {
		const answersArray = this.answers.value;
		console.log(index)
		if (answersArray.length > 1) {
			this.answers.removeAt(index);
			console.log(answersArray)
			console.log('true')
		}
	}

}