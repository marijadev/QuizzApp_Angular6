import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../shared/constants';

@Component({
	selector: 'app-results',
	templateUrl: './results.component.html',
	styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
	testList = [];
	multipleTextQuestionsList = [];
	constructor(private http: HttpClient) { }

	ngOnInit() {
		this.http.get(API_URL.unreviewedTests).subscribe(data => {
			for (let prop in data) {
				const currentTest = data[prop].questions;
				if (currentTest.length > 1) {
					this.multipleTextQuestionsList.push(data[prop])
				} else {
					this.testList.push(data[prop]);
				}
			};
		});
		console.log('testList',this.testList)
	};

	onSubmit(e, id, value) {
		console.log(id, value)
		for (let prop in this.testList) {
			const currentTest = this.testList[prop].questions;
			const currentTestId = this.testList[prop].id;
			if (currentTestId === id) {
				// console.log(this.testList[prop])
			this.testList[prop].questions[0].answers[0].value = value;
			}
		};
		
	};
};
