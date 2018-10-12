import { Component, OnInit, Input } from '@angular/core';
import { QuestionService } from '../../questions/question.service';

import { categories, status } from '../../shared/constants';

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
		id: 0
	};
	statusTypeObj = {
		status: 0,
		id: 0
	};

	constructor(private qService: QuestionService) { };

	ngOnInit() {
		this.categories = categories;
		this.status = status;
		this.difficulties = this.qService.questionDifficulty;
		// console.log(this.user)
	};

	onUserChosen(id: number) {
		this.optionsShowed = !this.optionsShowed;
		this.testTypeObj.id = id;
		this.statusTypeObj.id = id;
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
		if(type === 'status') {
			this.statusTypeObj.status = item === 'Passed' ? 1 : 0;
		} else if(type === 'difficulty') {
			this.testTypeObj.type = item;
		} else if(type === 'category') {
			this.testTypeObj.type = item;
		};
	};
};
