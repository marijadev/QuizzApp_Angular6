import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL, formatDate } from 'src/app/shared/constants';

@Component({
	selector: 'app-passed-tests',
	templateUrl: './passed-tests.component.html',
	styleUrls: ['./passed-tests.component.scss']
})
export class PassedTestsComponent implements OnInit {
	statusObj = {
		status: 1
	}
	testList = [];
	singleTestData = {
		id: 0,
		date: 0,
		questions: [],
		result: 0,
		status: 0,
		user: {}
	};
	viewTests = 'Passed';
	questionsValid = [];
	questionsInvalid = [];

	constructor(private http: HttpClient) { }

	ngOnInit() {
		this.http.post(API_URL.userStatusTests, this.statusObj).subscribe(data => {
			for (let prop in data) {
				const test = {
					id: 0,
					date: ''
				};
				test.date = formatDate(data[prop]['date']);
				test.id = data[prop]['id'];
				this.testList.push(test);
			};
		});
	};

	onTestStatusSelect(e, statusNum: number) {
		this.questionsValid = [];
		this.questionsInvalid = [];

		if(statusNum === 1) {
			this.viewTests = 'Passed'
		} else if(statusNum === 0) {
			this.viewTests = 'Failed';
		} 

		this.statusObj.status = statusNum;
		this.testList = [];
		this.http.post(API_URL.userStatusTests, this.statusObj).subscribe(data => {
			console.log('test', data)
			
			for (let prop in data) {
				const test = {
					id: 0,
					date: ''
				};
				test.date = formatDate(data[prop]['date']);
				test.id = data[prop]['id'];
				this.testList.push(test);
			};
		});
	};

	onSingleTestSelected(event, test) {
		this.questionsValid = [];
		this.questionsInvalid = [];

		const singleTestID = {
			testId: test.id
		};
		this.http.post(API_URL.demoTest, singleTestID).subscribe(data => {
			console.log('single test', data)
			for (let prop in data) {
				this.singleTestData.date = data['date'];
				this.singleTestData.id = data['id'];
				this.singleTestData.questions = data['questions'];
				this.singleTestData.result = data['result'];
				this.singleTestData.status = data['status'];
				this.singleTestData.user = data['user'];
			}

			this.singleTestData.questions.map(question => {
				if (question.type === 'Single Choice') {
					let counter = 0;
					const answers = question.answers;
					for (let i = 0; i < answers.length; i++) {
						if (answers[i].value === answers[i].chosen) {
							counter++;
						}
					}
					if (counter === answers.length) {
						this.questionsValid.push(question);
					} this.questionsInvalid.push(question)
				} 
				else if (question.type === 'Multiple Choice') {
					let counter = 0;
					const answers = question.answers;
					for (let i = 0; i < answers.length; i++) {
						if (answers[i].value === answers[i].chosen) {
							counter++;
						}
					}
					if (counter === answers.length) {
						this.questionsValid.push(question);
					} this.questionsInvalid.push(question)
				} 
				else if (question.type === 'Text') {
					question.answers.map(answer => {
						if (answer.value === answer.chosen) {
							this.questionsValid.push(question);
						} else {
							this.questionsInvalid.push(question)
						};
					});
				} 
				else if (question.type === 'Connecting') {
					const answersArr = question.answers;
					let counter = 0;
					for (let i = 0; i < answersArr.length; i++) {
						if (answersArr[i].value === answersArr[i].chosen) {
							counter++;
						};
					};
					if (counter === answersArr.length) {
						this.questionsValid.push(question)
					} else {
						this.questionsInvalid.push(question)
					};
				} else if (question.type === 'Order') {
					const answersArr = question.answers;
					let counter = 0;
					for (let i = 0; i < answersArr.length; i++) {
						if (answersArr[i].value === answersArr[i].chosen) {
							counter++;
						};
					};
					if (counter === answersArr.length) {
						this.questionsValid.push(question)
					} else {
						this.questionsInvalid.push(question)
					};
				};
				return question.answers;
			});
		});
	};
};
