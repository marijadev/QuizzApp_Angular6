import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { QuestionService } from '../../../question.service';

@Component({
	selector: 'app-connecting',
	templateUrl: './connecting.component.html',
	styleUrls: ['./connecting.component.scss']
})
export class ConnectingComponent implements OnInit {
	questionForm: FormGroup;
	valueCounter: number = 0;
	entriesArr = [];
	constructor(private fb: FormBuilder, private qService: QuestionService) { }

	ngOnInit() {
		this.questionForm.addControl('answers', this.fb.array([this.createAnswer()], answersOrder => {
			return this.validate(answersOrder as FormArray)
		}));
	}

	createAnswer() {
		return this.fb.group({
			answer: new FormControl(null, [Validators.required]),
			answer2: new FormControl(null, [Validators.required])
		});
	}

	get answers(): FormArray {
		return this.questionForm.get('answers') as FormArray;
	}

	addAnswer() {
		const answer = this.createAnswer();
		this.answers.push(answer);
	}

	get values() {
		const resultArray = this.answers.value.map((val, index) => {
			return [{ answer: val.answer, value: index }, { answer: val.answer2, value: index }];
		}).reduce((acc, answerValue) => {
			acc.push(answerValue[0]);
			acc.push(answerValue[1]);

			return acc;
		}, []);
		
		let even = [];
		let odd = [];
		resultArray.map((answer, i) => {
			if (i % 2 === 0) {
				return even.push(answer);
			} else if (i % 2 !== 0) {
				return odd.push(answer)
			}
		})
		return [...even, ...odd];
	}

	deleteAnswer(index: number) {
		const answersArray = this.answers.value;
		if (answersArray.length > 1) {
			this.answers.removeAt(index);
		}
	}

	validate(control: FormArray): { [s: string]: boolean } {
		return null;
	};

	ngOnDestroy() {
		this.questionForm.removeControl('answers');
	}

}
