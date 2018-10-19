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
			console.log('pending',data)
			for (let prop in data) {
				const currentTest = data[prop].questions;
				if (currentTest.length > 1) {
					this.multipleTextQuestionsList.push(data[prop])
				} else {
					this.testList.push(data[prop]);
				};
			};
		});
	};

	onSubmit(e, id, value) {
		for (let index in this.testList) {
			const currentTest = this.testList[index].questions;
			const currentTestId = this.testList[index].id;
			if (currentTestId === id) {
				this.testList[index].questions[0].answers[0].value = value;
				this.http.post(API_URL.reviewQuestion, this.testList[index]).subscribe();
				this.testList.splice(this.testList[index], 1);
			};
		};
	};
};
