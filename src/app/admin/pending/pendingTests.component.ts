import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../shared/constants';

@Component({
	selector: 'app-pending-tests',
	templateUrl: './pendingTests.component.html',
	styleUrls: ['./pendingTests.component.scss']
})
export class PendingTestsComponent implements OnInit {
	testList;
	listOfTestsWithMultipleQuestions = [];
	listOfTestsWithOneQuestion = [];
	currentTest;
	fakeMultipleTestsWithFlags = [];

	constructor(private http: HttpClient) { }

	ngOnInit() {
		this.http.get(API_URL.unreviewedTests).subscribe(data => {
			this.testList = data;
			for (let i = 0; i < this.testList.length; i++) {
				const test = this.testList[i];
				if (test['questions'].length > 1) {
					this.listOfTestsWithMultipleQuestions.push(test);
					this.createFakeTestsArrayWithFlags();
				} else if (test['questions'].length === 1) {
					this.listOfTestsWithOneQuestion.push(test);
				};
			};
		});
	};

	onSubmitOneQuestion(e, id, value) {
		for (let index in this.listOfTestsWithOneQuestion) {
			const currentTest = this.listOfTestsWithOneQuestion[index].questions;
			const currentTestId = this.listOfTestsWithOneQuestion[index].id;
			if (currentTestId === id) {
				this.listOfTestsWithOneQuestion[index].questions[0].answers[0].value = value;
				this.http.post(API_URL.reviewQuestion, this.listOfTestsWithOneQuestion[index]).subscribe();
				this.listOfTestsWithOneQuestion.splice(this.listOfTestsWithOneQuestion[index], 1);
			};
		};
	};

	createFakeTestsArrayWithFlags() {
		for (let i = 0; i < this.listOfTestsWithMultipleQuestions.length; i++) {
			const currentTest = this.listOfTestsWithMultipleQuestions[i];
			const currentTestID = this.listOfTestsWithMultipleQuestions[i].id;
			const currentTestQuestions = this.listOfTestsWithMultipleQuestions[i].questions;
			const currentTestQuestionsIDs = currentTestQuestions.map(question => question.id);

			let testsObjWithFlags = {
				testID: currentTestID,
				test: JSON.parse(JSON.stringify(currentTest)),
				checked: []
			};

			for (let i = 0; i < currentTestQuestionsIDs.length; i++) {
				const isCheckedFlag = {
					questionID: currentTestQuestionsIDs[i],
					checked: false
				};
				testsObjWithFlags.checked.push(isCheckedFlag)
			};
			this.fakeMultipleTestsWithFlags.push(testsObjWithFlags);
		};
	};


	onSubmitMultipleQuestions(e, testId: number, questionIndex: number, value: number) {
		for (let i = 0; i < this.fakeMultipleTestsWithFlags.length; i++) {
			const realTest = this.listOfTestsWithMultipleQuestions[i];
			const fakeTest = this.fakeMultipleTestsWithFlags[i];
			const fakeTestId = fakeTest.testID;
			const fakeTestQuestionsInTest = fakeTest.test.questions;
			let fakeTestChecked = fakeTest.checked;
			let checkedCounter = 0;

			if (fakeTestId === testId) {
				for (let i = 0; i < fakeTestQuestionsInTest.length; i++) {
					const currentQ = fakeTestQuestionsInTest[i];
					const currentQId = currentQ.id;

					if (currentQId === questionIndex) {
						currentQ.answers[0].value = value;
						realTest.questions.splice(realTest.questions[i], 1);
						fakeTestChecked[i].checked = true;
					};
				};
			};
			
			for (let i = 0; i < fakeTestChecked.length; i++) {
				const singleChecked = fakeTestChecked[i];
				if (singleChecked.checked === true) {
					checkedCounter++;
				};
			};
			if (checkedCounter === fakeTestChecked.length) {
				this.http.post(API_URL.reviewQuestion, fakeTest.test).subscribe();
			};
		};
	};
};
