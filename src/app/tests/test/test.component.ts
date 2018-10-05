import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { map, flatMap } from 'rxjs/operators';

import { TestService } from '../../shared/services/test.service';

@Component({
	selector: 'app-test',
	templateUrl: './test.component.html',
	styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
	testData = {
		id: 0, 
		user: {}, 
		questions: []
	};

	constructor(private testService: TestService,private route: Router, private actRoute: ActivatedRoute) { }

	ngOnInit() {
		this.testService.fakeRequest().subscribe((data) => {
			if(data) {
				// console.log('data ', data)
				this.testData.id = data.id;
				this.testData.user = data.user;
				this.testData.questions = data.questions;
			}
		})
		console.log(this.testData)
	}

	onPreviousPage() {
		// this.route.navigate(['/home/tests'], { relativeTo: this.actRoute });
	}


}
