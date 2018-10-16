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
		this.statusObj.status = statusNum;
		this.testList = [];
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
	onSingleTestSelected(event, test) {
		const singleTestID = {
			testId: test.id
		};
		this.http.post(API_URL.demoTest, singleTestID).subscribe(data => {
			for (let prop in data) {
				this.singleTestData.date = data['date'];
				this.singleTestData.id = data['id'];
				this.singleTestData.questions = data['questions'];
				this.singleTestData.result = data['result'];
				this.singleTestData.status = data['status'];
				this.singleTestData.user = data['user'];
			}
			console.log('test', this.singleTestData)
		});
	}
};
