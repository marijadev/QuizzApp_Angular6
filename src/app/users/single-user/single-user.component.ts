import { Component, OnInit, Input } from '@angular/core';
import { QuestionService } from '../../questions/question.service';
import { HttpClient } from '@angular/common/http';

import { categories, status, API_URL, testRequests } from '../../shared/constants';
import { UserService } from 'src/app/shared/services/users.service';

@Component({
	selector: 'app-single-user',
	templateUrl: './single-user.component.html',
	styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent implements OnInit {
	@Input() user;
	private listOfTests;
	private categories: string[];
	private difficulties: string[];
	private statuses: string[];
	private filteredBy = 'all';
	private filteredHeadlinePath = 'all';

	constructor(private http: HttpClient, private qService: QuestionService, private usersService: UserService) { };

	ngOnInit() {
		this.categories = categories;
		this.statuses = status;
		this.difficulties = this.qService.questionDifficulty;

		if (this.user) {
			testRequests.userTestsObj.id = this.user.id;
			testRequests.testStatusObj.userId = this.user.id;
			testRequests.testTypeObj.userId = this.user.id;

			this.http.post(API_URL.singleUserTests, testRequests.userTestsObj).subscribe(data => {
				this.listOfTests = data;
			});
		};
	};

	onItemSelected(e, type: string, item: string) {
		if (type === 'all') {
			this.listOfTests = [];
			this.filteredBy = 'all';
			this.filteredHeadlinePath = `all`;

			this.http.post(API_URL.singleUserTests, testRequests.userTestsObj).subscribe(data => {
				this.listOfTests = data;
			});
		} else if (type === 'status') {
			this.listOfTests = [];
			this.filteredBy = 'status';
			this.filteredHeadlinePath === `status / ${item}`;
			testRequests.testStatusObj.status = item === 'Passed' ? 1 : 0;

			this.http.post(API_URL.userTestsStatus, testRequests.testStatusObj).subscribe(data => {
				this.listOfTests = data;
			});
		} else if (type === 'difficulty') {
			this.listOfTests = [];
			this.filteredBy = 'difficulty';
			this.filteredHeadlinePath = `difficulty / ${item}`;
			testRequests.testTypeObj.type = item;

			this.http.post(API_URL.userTestsDiff, testRequests.testTypeObj).subscribe(data => {
				this.listOfTests = data;
			});
		} else if (type === 'category') {
			this.listOfTests = [];
			this.filteredBy = 'category';
			this.filteredHeadlinePath = `category / ${item}`;
			testRequests.testTypeObj.type = item;

			this.http.post(API_URL.userTestsCat, testRequests.testTypeObj).subscribe(data => {
				this.listOfTests = data;
			})
		};
	};

};
