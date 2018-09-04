import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';

import { Question } from '../shared/question.model';

@Injectable()
export class QuestionService {
	// questionTypes: string[] = ['Single Choice', 'Multiple Choice', 'Text', 'Connecting', 'Order'];
	// newQuestion: Question = {
	// 	id: null,
	// 	question: '',
	// 	category: '',
	// 	difficulty: '',
	// 	type: '',
	// 	answers: []
	// };

	constructor(private router: Router, private actRoute: ActivatedRoute) { }


}
