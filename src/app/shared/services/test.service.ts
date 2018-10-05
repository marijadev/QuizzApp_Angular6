import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { questionTypes } from '../../shared/constants';

@Injectable({
	providedIn: 'root'
})
export class TestService {
	testTypeSelected: boolean = false;
	testTypeSelectedChange: Subject<boolean> = new Subject<boolean>();
	private questionsArr: object[];

	constructor(private http: HttpClient) {
		this.testTypeSelected = false;
		this.testTypeSelectedChange.subscribe((value) => {
			this.testTypeSelected = value;
		});
	};

	toggleTestTypeSelectedVisibility() {
		this.testTypeSelectedChange.next(!this.testTypeSelected);
	};

	fakeRequest() {
		// FAKE request
		return this.http.get<any>('/server/user/maketest').pipe(map(data => data))
	};

	checkTestQuestionType(questions) {
		let questionTypes = [];

		questions.forEach(question => questionTypes.push(question.type));
		return questionTypes;
	};

		
	getQuestions(questions: object[]) {
		const allQuestions = questions;
		console.log(allQuestions)
		return allQuestions;
	};
	
};
