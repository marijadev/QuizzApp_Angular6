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
	singleQuestion;
	answersLeft;
	answersRight;
	draggedAnswers = ['placeholder'];
	question;

	constructor(private fb: FormBuilder, private testService: TestService) { };

	ngOnInit() {
		if (this.singleQuestion) {
			this.question = this.singleQuestion;
			this.sortAnswers();
		};
	};

	sortAnswers() {
		const arrayOfAnswers = this.question.answers;
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
		let chosenArray = [];
		const id = this.question.id;
		if (event.previousContainer === event.container) {
			moveItemInArray(
				event.container.data,
				event.previousIndex,
				event.currentIndex
			);
		} else {
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

		for (let i = 0; i < this.draggedAnswers.length; i++) {
			const currentAnswer = this.draggedAnswers[i];
			const value = currentAnswer['value'];
			chosenArray.push(value);
		}
		if (this.answersRight.length === 0) {
			for (let i = 0; i < this.draggedAnswers.length; i++) {
				const currentAnswer = this.draggedAnswers[i];
				currentAnswer['chosen'] = chosenArray[i];
			};
		} else {
			for (let i = 0; i < this.draggedAnswers.length; i++) {
				const currentAnswer = this.draggedAnswers[i];
				currentAnswer['chosen'] = 0;
			};
		};
		this.question.answers = [...this.answersLeft, ...this.draggedAnswers];
		this.testService.onSingleTestQuestionsUpdate(id, this.question);
	};
};
