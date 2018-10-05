import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';

import { TestService } from '../../../../shared/services/test.service';

@Component({
	selector: 'app-single-item',
	templateUrl: './single-item.component.html',
	styleUrls: ['./single-item.component.scss']
})
export class SingleItemComponent implements OnInit {
	testForm: FormGroup;
	questionsArr: object[];
	constructor(private fb: FormBuilder, private testService: TestService) { };

	ngOnInit() {
		if (this.testService.questionsByType.single) {
			this.testService.questionsByType.single;
		}
		console.log('questions arr ',this.questionsArr)
		this.testForm.addControl('newAnswer', this.fb.array([null]));
	};
};
