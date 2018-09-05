import { Component, OnInit, Injectable, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { QuestionService } from '../../question.service';

@Injectable()
@Component({
	selector: 'app-question-type',
	templateUrl: './question-type.component.html',
	styleUrls: ['./question-type.component.scss']
})
export class QuestionTypeComponent implements OnInit {
	type: string;

	constructor(private route: ActivatedRoute, router: Router, private questionService: QuestionService) { }

	ngOnInit() {

	}


}
