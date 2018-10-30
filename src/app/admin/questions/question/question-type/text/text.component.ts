import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { QuestionService } from '../../../../questions/question.service';

@Component({
	selector: 'app-text',
	templateUrl: './text.component.html',
	styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {

	constructor(private fb: FormBuilder, private qService: QuestionService) { }

	ngOnInit() {

	}

}
