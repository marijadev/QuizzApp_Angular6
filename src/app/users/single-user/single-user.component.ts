import { Component, OnInit, Input } from '@angular/core';
import { QuestionService } from '../../questions/question.service';
import { HttpClient } from '@angular/common/http';
import { formatDate } from '../../shared/constants';

import { categories, status, API_URL } from '../../shared/constants';
import { UserService } from 'src/app/shared/services/users.service';

@Component({
	selector: 'app-single-user',
	templateUrl: './single-user.component.html',
	styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent implements OnInit {
	@Input() user;
	categories: string[];
	difficulties: string[];
	status: string[];
	optionsShowed: boolean = false;
	dropdownsShowed = {
		difficultyDropdown: false,
		categoryDropdown: false,
		statusDropdown: false,
	};
	testTypeObj = {
		type: '',
		userId: 0
	};
	statusTypeObj = {
		status: 0,
		userId: 0
	};
	private userTests;
	listOfTests = [];
	singleTestData = {
		id: 0,
		date: 0,
		questions: [],
		result: 0,
		status: 0,
		user: {}
	};

	constructor(private http: HttpClient, private qService: QuestionService, private usersService: UserService) { };

	ngOnInit() {
		this.categories = categories;
		this.status = status;
		this.difficulties = this.qService.questionDifficulty;
	};

	onUserChosen(id: number) {
		this.optionsShowed = !this.optionsShowed;
		this.testTypeObj.userId = id;
		this.statusTypeObj.userId = id;
	};

	onElementHover(e, type: string) {
		if (type === 'difficulty') {
			this.dropdownsShowed.difficultyDropdown = true;
		} else if (type === 'category') {
			this.dropdownsShowed.categoryDropdown = true;
		} else if (type === 'status') {
			this.dropdownsShowed.statusDropdown = true;
		};
	};

	onElementUnhover(e, type: string) {
		if (type === 'difficulty') {
			this.dropdownsShowed.difficultyDropdown = false;
		} else if (type === 'category') {
			this.dropdownsShowed.categoryDropdown = false;
		} else if (type === 'status') {
			this.dropdownsShowed.statusDropdown = false;
		};
	};

	fillUserTests(data) {
		this.userTests = data;
		this.listOfTests = [];
		this.userTests.map(test => {
			let date = formatDate(test.date);
			const id = test.id;
			this.listOfTests.push({ date, id })
		})
	}

	onItemSelected(e, type: string, item: string) {
		this.optionsShowed = !this.optionsShowed;
		if (type === 'status') {
			this.statusTypeObj.status = item === 'Passed' ? 1 : 0;
			this.http.post(API_URL.userTestsStatus, this.statusTypeObj).subscribe(data => {
				this.fillUserTests(data);
				// console.log(this.userTests)
				// console.log(this.listOfTests)
			});
		} else if (type === 'difficulty') {
			this.testTypeObj.type = item;
			this.http.post(API_URL.userTestsDiff, this.testTypeObj).subscribe(data => {
				this.fillUserTests(data);
			});
		} else if (type === 'category') {
			this.testTypeObj.type = item;
			this.http.post(API_URL.userTestsCat, this.testTypeObj).subscribe(data => {
				this.fillUserTests(data);
			})
		}
	}

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
			// console.log('test', this.singleTestData)
		});
	}
};
