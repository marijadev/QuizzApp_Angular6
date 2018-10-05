import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TestService } from '../../../../shared/services/test.service';

@Component({
	selector: 'app-text-item',
	templateUrl: './text-item.component.html',
	styleUrls: ['./text-item.component.scss']
})
export class TextItemComponent implements OnInit {
	testForm: FormGroup;
	questionsArr: object[];
	constructor(private fb: FormBuilder, private testService: TestService) { };

	ngOnInit() {
		if (this.testService.questionsByType.text) {
			this.questionsArr = this.testService.questionsByType.text;
		}
		this.testForm.addControl('newAnswer', this.fb.array([null]));
	};

}
