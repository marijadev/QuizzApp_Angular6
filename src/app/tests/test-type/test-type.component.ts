import { Component, OnInit, ViewChild } from '@angular/core';
import { SlideInOutAnimation } from '../../shared/animations';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-test-type',
	templateUrl: './test-type.component.html',
	styleUrls: ['./test-type.component.scss'],
	animations: [SlideInOutAnimation]
})
export class TestTypeComponent implements OnInit {
	// @ViewChild('f') form: NgForm;
	animationStateDifficulty = 'out ';
	animationStateCategory = 'out ';
	animationStateDifficultyCategory = 'out ';
	currentAnimation;
	constructor() { }

	ngOnInit() {
	}

	onTypeSelect(headline: string) {
		if (headline === 'difficulty') {
			this.animationStateCategory = this.animationStateCategory === 'out' && 'out';
			this.animationStateDifficultyCategory = this.animationStateDifficultyCategory === 'out' && 'out';
			this.animationStateDifficulty = this.animationStateDifficulty === 'in' ? 'out' : 'in';
		} else if (headline === 'category') {
			this.animationStateDifficulty = this.animationStateDifficulty === 'out' && 'out';
			this.animationStateDifficultyCategory = this.animationStateDifficultyCategory === 'out' && 'out';
			this.animationStateCategory = this.animationStateCategory === 'in' ? 'out' : 'in';
		} else if (headline === 'difficulty-category') {
			this.animationStateDifficulty = this.animationStateDifficulty === 'out' && 'out';
			this.animationStateCategory = this.animationStateCategory === 'out' && 'out';
			this.animationStateDifficultyCategory = this.animationStateDifficultyCategory === 'in' ? 'out' : 'in';
		}
	}

	onGenerateTest(form: NgForm) {
		console.log(form)
	}
}
