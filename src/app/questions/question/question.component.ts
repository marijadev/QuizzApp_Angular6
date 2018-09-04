import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
	selector: 'app-question',
	templateUrl: './question.component.html',
	styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
	questionForm: FormGroup;
	difficulties: string[] = ['Easy', 'Medium', 'Difficult'];
	categories: string[] = ['JavaScript', 'Java', 'PHP'];
	questionTypes: string[] = ['Single Choice', 'Multiple Choice', 'Text', 'Connecting', 'Order'];

	constructor() { }

	ngOnInit() {
		this.questionForm = new FormGroup({
			'question': new FormControl(null),
			'category': new FormControl(),
			'difficulty': new FormControl(),
			'type': new FormControl()
		})
	}

	onQuestionSubmit() {
		console.log(this.questionForm)
	}

}
