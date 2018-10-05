import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TestService } from '../../../../shared/services/test.service';

@Component({
	selector: 'app-order-item',
	templateUrl: './order-item.component.html',
	styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {
	testForm: FormGroup;
	questionsArr: object[];
	constructor(private fb: FormBuilder, private testService: TestService) { };

	ngOnInit() {
		if (this.testService.questionsByType.order) {
			this.questionsArr = this.testService.questionsByType.order;
		}
		this.testForm.addControl('newAnswer', this.fb.array([null]));
	};

}
