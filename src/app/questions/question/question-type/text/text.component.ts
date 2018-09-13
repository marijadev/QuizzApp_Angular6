import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { QuestionService } from '../../../../questions/question.service';

@Component({
	selector: 'app-text',
	templateUrl: './text.component.html',
	styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {
	questionForm: FormGroup;

	constructor(private fb: FormBuilder, private qService: QuestionService) { }

	ngOnInit() {
		this.questionForm.addControl('answers', new FormControl(null, [Validators.required]));
	}

	get answers(): FormArray {
		return this.questionForm.get('answers') as FormArray;
	}

	get values() {
		return this.answers.value;
	}
}
