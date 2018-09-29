import { Component, OnInit } from '@angular/core';
import { TestService } from '../shared/services/test.service';

@Component({
	selector: 'app-tests',
	templateUrl: './tests.component.html',
	styleUrls: ['./tests.component.scss']
})
export class TestsComponent implements OnInit {
	isTestSelectionVisible: boolean;

	constructor(private testService: TestService) {
		this.isTestSelectionVisible = this.testService.testTypeSelected;
		this.testService.testTypeSelectedChange.subscribe(value => this.isTestSelectionVisible = value);

	}

	ngOnInit() {
		this.isTestSelectionVisible = this.testService.testTypeSelected;
	}

}
