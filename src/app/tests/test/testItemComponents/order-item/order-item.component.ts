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
	answerList = [];
	answerValues = [];
	answersUI = [];

	constructor(private fb: FormBuilder, private testService: TestService) { };

	ngOnInit() {
		if (this.testService.questionsByType.order) {
			this.questionsArr = this.testService.questionsByType.order;
			const questionObj = this.questionsArr[0];

			this.singleQuestion.id = questionObj['id'];
			this.singleQuestion.type = questionObj['type'];
			this.singleQuestion.difficulty = questionObj['difficulty'];
			this.singleQuestion.category = questionObj['category'];
			this.answersUI = questionObj['answers'].slice();
			this.singleQuestion.answers = questionObj['answers'];
		};
	};

	onDrop(event: CdkDragDrop<string[]>) {
		moveItemInArray(this.answersUI, event.previousIndex, event.currentIndex);
		let chosenArray = this.answersUI.map(answer => answer.value);
		// console.log('chosen array ', chosenArray)
		let answers = this.singleQuestion.answers;
		for (let i = 0; i < answers.length; i++) {
			// console.log('answ-', answers[i].value, 'test-', chosenArray[i])
			answers[i].chosen = chosenArray[i];
		}
		console.log(answers);
		// console.log(this.singleQuestion)
	};
}
