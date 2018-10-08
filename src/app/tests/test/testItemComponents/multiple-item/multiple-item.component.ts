import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TestService } from '../../../../shared/services/test.service';

@Component({
	selector: 'app-multiple-item',
	templateUrl: './multiple-item.component.html',
	styleUrls: ['./multiple-item.component.scss']
})
export class MultipleItemComponent implements OnInit {
	testForm: FormGroup;
	questionArr: object[];
	constructor(private fb: FormBuilder, private testService: TestService) { };

	ngOnInit() {
		if (this.testService.questionsByType.multiple) {
			this.questionArr = this.testService.questionsByType.multiple;
		}
		this.testForm.addControl('newAnswer', this.fb.array([null]));
	};
}
