import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { QuestionService } from '../../../../questions/question.service';

@Component({
	selector: 'app-text',
	templateUrl: './text.component.html',
	styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {
	answerForm: FormGroup;
	formAnswers: Answers;
	arrayOfAnswers: EventEmitter<any> = new EventEmitter<any>();
	selectedCheckbox: boolean = false;

	constructor(private fb: FormBuilder, private qService: QuestionService) { }

	ngOnInit() {
		this.answerForm = this.fb.group({
			answers: this.fb.array([this.fb.group({ answer: '' })])
		})
	}

	get answers() {
		const array = this.answerForm.get('answers') as FormArray;
		this.formAnswers = array.value;
		return array;
	}

	get values() {
		const array = this.answerForm.get('answers') as FormArray;
			this.formAnswers = array.value;
			return this.formAnswers;
	}
}
