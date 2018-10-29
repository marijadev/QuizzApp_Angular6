import { Component, OnInit } from '@angular/core';
import { PaginationService } from './pagination.service';

@Component({
	selector: 'app-pagination',
	templateUrl: './pagination.component.html',
	styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

	pager: {
		pages: number,
		currentPage: number,
		totalPages: number[],
	}; 
	pagedItems = [];
	// pagedItems = ['item 1', 'item 2', 'item 3', 'item 4'];

	constructor(private pageService: PaginationService) { }

	ngOnInit() {
	
	};

	fillInTheTotalPages(num: number) {
		let counter = 0;
		let finalArr = [];

		for(let i = 0; i < num; i++) {
			counter++;
			finalArr.push(counter);
		}
		return finalArr;
	};
};
