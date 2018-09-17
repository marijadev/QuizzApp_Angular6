import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
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
		this.questionForm.addControl('answer', new FormControl(null, [Validators.required]));
	}

	get answers(): FormControl{
		return this.questionForm.get('answer') as FormControl;
	}

	get values() {
		return this.answers.value;
	}

	// validate(control:FormControl): { [s: string]: boolean } {
	// 	if (control !== ' ') {
	// 		return null;
	// 	}
	// 	return {'textFieldEmpty': true}
	// }
}
