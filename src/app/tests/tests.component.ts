import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-tests',
	templateUrl: './tests.component.html',
	styleUrls: ['./tests.component.scss']
})
export class TestsComponent implements OnInit {
	testTypeSelected: boolean = false;
	constructor() { }

	ngOnInit() {
	}

}
