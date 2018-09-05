import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Question } from '../../shared/question.model';
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
	questionTypes: string[] = ['Single Choice', 'Multiple Choice', 'Text', 'Connecting', 'Order'];
	subscription: Observable<any>;

	newQuestion: Question = {
		id: null,
		question: '',
		category: '',
		difficulty: '',
		type: '',
		answers: []
	};

	constructor(private router: Router, private actRoute: ActivatedRoute, private questionService: QuestionService) { }

	ngOnInit() {
		this.questionForm = new FormGroup({
			'question': new FormControl(null),
			'category': new FormControl(null),
			'difficulty': new FormControl(null),
			'type': new FormControl(null)
		})

	}

	onSubmitQuestion() {
		this.newQuestion.id = Math.floor(Math.random() * 100000) + 1;
		this.newQuestion.question = this.questionForm.controls.question.value;
		this.newQuestion.category = this.questionForm.controls.category.value;
		this.newQuestion.difficulty = this.questionForm.controls.difficulty.value;
		this.newQuestion.type = this.questionForm.controls.type.value;
		this.newQuestion.answers = null;
	}

	onTypeChange(e: any) {
		const type = e.target.value;
		const formattedType = type.replace(/\s+/g, '-').toLowerCase();

		this.newQuestion.type = formattedType;
		this.router.navigate(['type/' + formattedType], { relativeTo: this.actRoute })
	}


}
