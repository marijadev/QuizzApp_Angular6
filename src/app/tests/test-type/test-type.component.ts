import { Component, OnInit } from '@angular/core';
import { SlideInOutAnimation } from '../../shared/animations';

@Component({
	selector: 'app-test-type',
	templateUrl: './test-type.component.html',
	styleUrls: ['./test-type.component.scss'],
	animations: [SlideInOutAnimation]
})
export class TestTypeComponent implements OnInit {
	animationStateDifficulty = 'out ';
	animationStateCategory = 'out ';
	animationStateDifficultyCategory = 'out ';
	constructor() { }

	ngOnInit() {
	}

	onTypeSelect(headline: string) {
		if (headline === 'difficulty') {
			this.animationStateCategory = this.animationStateCategory === 'out' && 'out';
			this.animationStateDifficultyCategory = this.animationStateDifficultyCategory === 'out' && 'out';
			this.animationStateDifficulty = this.animationStateDifficulty === 'out' ? 'in' : 'out';
		} else if (headline === 'category') {
			this.animationStateDifficulty = this.animationStateDifficulty === 'out' && 'out';
			this.animationStateDifficultyCategory = this.animationStateDifficultyCategory === 'out' && 'out';
			this.animationStateCategory = this.animationStateCategory === 'out' ? 'in' : 'out';
		} else if (headline === 'difficulty-category') {
			this.animationStateDifficulty = this.animationStateDifficulty === 'out' && 'out';
			this.animationStateCategory = this.animationStateCategory === 'out' && 'out';
			this.animationStateDifficultyCategory = this.animationStateDifficultyCategory === 'out' ? 'in' : 'out';
		}
	}
}
