import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TestService } from '../../../../shared/services/test.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
	selector: 'app-order-item',
	templateUrl: './order-item.component.html',
	styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {
	testForm: FormGroup;
	questionsArr: object[];
	singleQuestion = {
		id: 0,
		question: '',
		difficulty: '',
		type: '',
		category: '',
		answers: []
	};
	constructor(private fb: FormBuilder, private testService: TestService) { };

	ngOnInit() {
		if (this.testService.questionsByType.order) {
			this.questionsArr = this.testService.questionsByType.order;
			const questionObj = this.questionsArr[0];
			for (let prop in questionObj) {
				if (prop === 'id') {
					this.singleQuestion.id = questionObj[prop];
				} else if (prop === 'question') {
					this.singleQuestion.question = questionObj[prop];
				} else if (prop === 'answers') {
					const arrayOfAnswers = questionObj[prop];

					for (let i = 0; i < arrayOfAnswers.length; i++) {
						this.singleQuestion.answers.push(arrayOfAnswers[i].answer);
					};
				};
			};
		};
	};

	onDrop(event: CdkDragDrop<string[]>) {
		moveItemInArray(this.singleQuestion.answers, event.previousIndex, event.currentIndex);
	  };
}
