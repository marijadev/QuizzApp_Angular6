import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class PaginationService {
	pagedItems = [];
	
	constructor() { }
	
	getPager(totalItems: number, currentPage: number = 1) {
		const pageSize = 4;
		let totalPages = Math.ceil(totalItems / pageSize);

		// ensure current page isn't out of range
		if (currentPage < 1) {
			currentPage = 1;
		} else if (currentPage > totalItems) {
			currentPage = totalItems;
		}

		let startPage: number;
		let endPage: number;

		// less than 4 total pages so show all
		if (totalItems <= 4) {
			startPage = 1;
			endPage = 1;
		} else if (totalItems >= 4){
			// more than 4 pages to show
			startPage = 1;
			endPage = Math.floor(totalItems / pageSize);
		}

		// calculate start and end item indexes
		let startIndex = currentPage;
		let endIndex = Math.floor(totalItems / pageSize);

		// let pages = Array.from(Array((endPage) - startPage).keys()).map(i => startPage + i);
		let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

		console.log('curr page', currentPage)
		console.log('total pages', totalPages)
		console.log('total items', totalItems)
		console.log('start page', startPage)
		console.log('end page', endPage)
		console.log('start index', startIndex)
		console.log('end index', endIndex)
		console.log('pages', pages)

		return {
			totalPages,
			currentPage,
			totalItems,
			startPage,
			endPage,
			startIndex,
			endIndex,
			pages
		};
	};
}
