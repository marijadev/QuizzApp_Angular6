import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { QuestionService } from '../question.service';
import { Question } from '../../shared/question.model';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
	selector: 'app-question',
	templateUrl: './question.component.html',
	styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
	questionForm: FormGroup;
	type: string;
	difficulties: string[] = ['Easy', 'Medium', 'Difficult'];
	categories: string[] = ['JavaScript', 'Java', 'PHP'];
	questionTypes: string[] = ['Single Choice', 'Multiple Choice', 'Text', 'Connecting', 'Order'];

	newQuestion: Question = {
		id: null,
		question: '',
		category: '',
		difficulty: '',
		type: '',
		answers: []
	};

	constructor(private router: Router, private actRoute: ActivatedRoute) { }

	ngOnInit() {
		this.questionForm = new FormGroup({
			'question': new FormControl(null),
			'category': new FormControl(null),
			'difficulty': new FormControl(null),
			'type': new FormControl(null)
		})
	}

	// createQuestion(id: number, question: string, category: string, difficulty: string, type: string, answers: object[]) {
	// 	this.newQuestion.id = id;
	// 	this.newQuestion.question = question;
	// 	this.newQuestion.category = category;
	// 	this.newQuestion.difficulty = difficulty;
	// 	this.newQuestion.type = type;
	// 	this.newQuestion.answers = answers;
	// }

	onSubmitQuestion() {
		// console.log(this.questionForm.controls)
		// const id = Math.floor(Math.random() * 100000) + 1;
		// const question = this.questionForm.controls.question.value;
		// const category = this.questionForm.controls.category.value;
		// const difficulty = this.questionForm.controls.difficulty.value;
		// const type = this.questionForm.controls.type.value;
		// const answers = null;
		// console.log(this.questionForm.controls.question.value)
	}
	
	onTypeChange(e: any) {
		this.newQuestion.type = e.target.value;
		this.router.navigate(['/type/single-choice' ], {relativeTo: this.actRoute})
		console.log(this.actRoute)

	}

}
