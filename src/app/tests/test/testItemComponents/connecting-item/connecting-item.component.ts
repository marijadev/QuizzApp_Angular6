import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { moveItemInArray, transferArrayItem, CdkDrag, CdkDrop, CdkDragDrop } from '@angular/cdk/drag-drop';

import { TestService } from '../../../../shared/services/test.service';


@Component({
	selector: 'app-connecting-item',
	templateUrl: './connecting-item.component.html',
	styleUrls: ['./connecting-item.component.scss']
})
export class ConnectingItemComponent implements OnInit {
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
	answersLeft;
	answersRight;
	draggedAnswers = ['placeholder'];

	constructor(private fb: FormBuilder, private testService: TestService) { };

	ngOnInit() {
		if (this.testService.questionsByType.connecting) {
			this.questionsArr = this.testService.questionsByType.connecting;
			const questionObj = this.questionsArr[0];
			this.singleQuestion.id = questionObj['id'];
			this.singleQuestion.question = questionObj['question'];
			this.singleQuestion.type = questionObj['type'];
			this.singleQuestion.difficulty = questionObj['difficulty'];
			this.singleQuestion.category = questionObj['category'];
			this.singleQuestion.answers = questionObj['answers'];
			this.sortAnswers();
		};
	};

	sortAnswers() {
		const arrayOfAnswers = this.singleQuestion.answers;
		let odd = [];
		let even = [];
		for (let i = 0; i < arrayOfAnswers.length; i++) {
			if (i % 2 === 0) {
				odd.push(arrayOfAnswers[i]);
			} else if (i % 2 !== 0) {
				even.push(arrayOfAnswers[i])
			};
		};
		this.answersLeft = odd;
		this.answersRight = even;
	};

	addToList(event: CdkDragDrop<string[]>) {
		const answers = this.singleQuestion.answers;
		let chosenArray = [];
		if (event.previousContainer === event.container) {
			moveItemInArray(
				event.container.data,
				event.previousIndex,
				event.currentIndex
			);
		}
		else {
			transferArrayItem(
				event.previousContainer.data,
				event.container.data,
				event.previousIndex,
				event.currentIndex
			);
		};

		for (let i = 0; i < this.draggedAnswers.length; i++) {
			if (this.draggedAnswers[i] === 'placeholder') {
				this.draggedAnswers.splice(i);
			}
		}
		// this.draggedAnswers.map(answer => {
		// 	chosenArray.push(answer['value']);
		// });
		// for (let i = 0; i < answers.length; i++) {
		// 	answers[i].chosen = chosenArray[i];
		// };
		console.log('dragged', this.draggedAnswers)
		console.log('chosen ', chosenArray)
	};
};
