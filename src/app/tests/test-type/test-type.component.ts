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
	allowGenerateTest: boolean = false;

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

	validateCheckboxLength(form) {
		let counter: number = 0;
		let selectedTest = '';

		for (let key in form.controls) {
			if (form.controls[key].value === true) {
				counter++;
				selectedTest = key;
			}
		}
		if (counter === 1) {
			this.allowGenerateTest = true;
			this.testService.toggleTestTypeSelectedVisibility();
			return selectedTest;
			//here goes post request for the generated test;
		}
		form.reset();
		return alert('Select only one value!');
	}

	onGenerateDiffTest(form: NgForm) {
		const difficultyTest = {
			type: this.validateCheckboxLength(form)
		}
		return difficultyTest;//here goes post request for the generated test;		
	}

	onGenerateCatTest(form: NgForm) {
		const categoryTest = {
			type: this.validateCheckboxLength(form)
		}
		return categoryTest; //here goes post request for the generated test;
	}

	onGenerateDiffCatTest(form: NgForm) {
		const comboTest = {
			difficulty: this.validateCheckboxLength(form.controls.diff),
			category: this.validateCheckboxLength(form.controls.cat)
		}
		if (this.allowGenerateTest) {
			this.testService.toggleTestTypeSelectedVisibility();
		}
		this.testService.fakeRequest()
		return comboTest;//here goes post request for the generated test;
	}
}
