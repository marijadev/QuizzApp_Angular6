import { Component, OnInit, Input } from '@angular/core';
import { QuestionService } from '../../questions/question.service';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { categories, status, API_URL } from '../../shared/constants';

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

	constructor(private http: HttpClient, private qService: QuestionService) { };

	ngOnInit() {
		this.categories = categories;
		this.status = status;
		this.difficulties = this.qService.questionDifficulty;
		// console.log(this.user)
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

	onItemSelected(e, type: string, item: string) {
		if (type === 'status') {
			this.statusTypeObj.status = item === 'Passed' ? 1 : 0;
			this.http.post(API_URL.userTestsStatus, this.statusTypeObj).subscribe(data => {
				this.userTests = data;
				console.log(this.userTests)
			});
		}

		else if (type === 'difficulty') {
			this.testTypeObj.type = item;
			this.http.post(API_URL.userTestsDiff, this.testTypeObj).subscribe(data => console.log(data));
		}

		else if (type === 'category') {
			this.testTypeObj.type = item;
			this.http.post(API_URL.userTestsCat, this.testTypeObj).subscribe(data => console.log(data));
		};
	};
};
