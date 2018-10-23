import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class TestService implements OnInit, OnDestroy {
	testTypeSelected: boolean = false;
	testTypeSelectedChange: Subject<boolean> = new Subject<boolean>();
	private questionsArr: object[];
	testRequestObj: {
		url,
		testObj
	}
	subscription;

	constructor(private http: HttpClient) {
		this.testTypeSelected = false;
		this.subscription = this.testTypeSelectedChange.subscribe((value) => {
			this.testTypeSelected = value;
		});
	};

	ngOnInit() { };

	//change screen if test-type is selected or test is submitted
	toggleTestTypeSelectedVisibility() {
		this.testTypeSelectedChange.next(!this.testTypeSelected);
	};

	//request for generating new test
	testRequest() {
		const url = this.testRequestObj.url;
		const testObject = this.testRequestObj.testObj;

		if (this.testRequestObj) {
			return this.http.post<any>(url, testObject).pipe(map(response => response))
		};
	};

	//populate test questionsArr property
	singleTestQuestions(questions: object[]) {
		return this.questionsArr = questions;
	};

	//populate questionsArr with user's answers
	onSingleTestQuestionsUpdate(id: number, question: object) {
		const questions = this.testQuestions;
		for (let i = 0; i < questions.length; i++) {
			const currentQ = questions[i];
			if (currentQ['id'] == id) {
				this.testQuestions[i] = question;
			};
		};
		console.log('questions in testService', questions)
	};

	//get test questions from questionsArr property
	get testQuestions() {
		if (this.questionsArr) {
			return this.questionsArr;
		};
	};

	ngOnDestroy() {
		this.subscription.unsubscribe();
	};
};
