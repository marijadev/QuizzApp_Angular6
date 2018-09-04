import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { QuestionService } from '../question.service';


@Component({
	selector: 'app-question',
	templateUrl: './question.component.html',
	styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
	questionForm: FormGroup;
	difficulties: string[] = ['Easy', 'Medium', 'Difficult'];
	categories: string[] = ['JavaScript', 'Java', 'PHP'];
	questionTypes: string[] = this.questionService.questionTypes;

	constructor(private questionService: QuestionService) { }

	ngOnInit() {
		this.questionForm = new FormGroup({
			'question': new FormControl(null),
			'category': new FormControl(null),
			'difficulty': new FormControl(null),
			'type': new FormControl(null)
		})
	}

	onSubmitQuestion() {
		// console.log(this.questionForm.controls)
		const id = Math.floor(Math.random() * 100000) + 1;
		const question = this.questionForm.controls.question.value;
		const category = this.questionForm.controls.category.value;
		const difficulty = this.questionForm.controls.difficulty.value;
		const type = this.questionForm.controls.type.value;
		const answers = null;

		this.questionService.createQuestion(id, question, category, difficulty, type, answers)
		// console.log(this.questionForm.controls.question.value)
	}

	onTypeChange(e: any) {
		const type = e.target.value;
		this.questionService.checkType(type)
		// console.log(e.target.value)
	}

}
