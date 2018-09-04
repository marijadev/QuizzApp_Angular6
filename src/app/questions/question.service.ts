import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { Question } from '../shared/question.model';

@Injectable()
export class QuestionService {
	// questionTypes: string[] = ['Single Choice', 'Multiple Choice', 'Text', 'Connecting', 'Order'];
	newQuestion: Question = {
		id: null,
		question: '',
		category: '',
		difficulty: '',
		type: '',
		answers: []
	};

	constructor(private router: Router) { }

	createQuestion(id: number, question: string, category: string, difficulty: string, type: string, answers: object[]) {
		this.newQuestion.id = id;
		this.newQuestion.question = question;
		this.newQuestion.category = category;
		this.newQuestion.difficulty = difficulty;
		this.newQuestion.type = type;
		this.newQuestion.answers = answers;
	}

}
