import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-single-item',
	templateUrl: './single-item.component.html',
	styleUrls: ['./single-item.component.scss']
})
export class SingleItemComponent implements OnInit {
	testForm: FormGroup;
	questionsArr: object[];
	constructor(private fb: FormBuilder) { }

	ngOnInit() {
		this.testForm.addControl('newAnswer', this.fb.array([this.createQuestion()]))
	}
	
	createQuestion() {
		return this.fb.group({
			answer: new FormControl(null, [Validators.required]),
			checked: new FormControl(0)
		})
	}
}
