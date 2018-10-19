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
	singleQuestion;
	answersUI = [];
	question;
	constructor(private fb: FormBuilder, private testService: TestService) { };

	ngOnInit() {
		if (this.singleQuestion) {
			this.question = this.singleQuestion;
			this.answersUI = this.question.answers.slice();
		};
	};

	//method from the drag-drop cdk library: 
	//https://netbasal.com/getting-to-know-the-angular-cdk-drag-and-drop-feature-d79ba462ce31
	onDrop(event: CdkDragDrop<string[]>) {
		const id = this.question.id;

		moveItemInArray(this.answersUI, event.previousIndex, event.currentIndex);
		let chosenArray = this.answersUI.map(answer => answer.value);
		let answers = this.question.answers;

		for (let i = 0; i < answers.length; i++) {
			answers[i].chosen = chosenArray[i];
		};
		this.testService.onSingleTestQuestionsUpdate(id, this.question);
	};
};
