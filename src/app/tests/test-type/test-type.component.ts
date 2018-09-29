import { Component, OnInit, ViewChild } from '@angular/core';
import { SlideInOutAnimation } from '../../shared/animations';
import { NgForm } from '@angular/forms';
import { TestService } from '../../shared/services/test.service';

@Component({
	selector: 'app-test-type',
	templateUrl: './test-type.component.html',
	styleUrls: ['./test-type.component.scss'],
	animations: [SlideInOutAnimation]
})
export class TestTypeComponent implements OnInit {
	@ViewChild('fDiff') formDiff: NgForm;
	@ViewChild('fCat') formCat: NgForm;
	@ViewChild('fDiffCat') formDiffCat: NgForm;
	animationStateDifficulty = 'out ';
	animationStateCategory = 'out ';
	animationStateDifficultyCategory = 'out ';
	isTestTypeVisible: boolean;

	constructor(private testService: TestService) { }

	ngOnInit() { }

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
		let request = '';
		if (form == this.formDiff) {
			request = form.value;
			// console.log('formDiff ', form.value)
		} else if (form == this.formCat) {
			request = form.value;
			// console.log('formCat ', form)
		} else if (form == this.formDiffCat) {
			request = form.value;
			// console.log('formDiffCat ', form)
		}
		//here goes post request for the generated test

		this.testService.toggleTestTypeSelectedVisibility();

		return;
	}
}
