import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class QuestionService {
	// questionTypes: string[] = ['Single Choice', 'Multiple Choice', 'Text', 'Connecting', 'Order'];
	newQuestion: {}
	
	constructor(private router: Router) { }


}
