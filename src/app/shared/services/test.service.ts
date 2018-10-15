import { Injectable, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { questionTypes } from '../../shared/constants';

@Injectable({
	providedIn: 'root'
})
export class TestService implements OnInit, OnDestroy {
	testTypeSelected: boolean = false;
	testTypeSelectedChange: Subject<boolean> = new Subject<boolean>();
	private questionsArr: object[];
	testRequestObj: {
		url,
		testObj
	}

	questionsByType = {
		single: [],
		multiple: [],
		order: [],
		text: [],
		connecting: []
	}
	subscription;

	constructor(private http: HttpClient) {
		this.testTypeSelected = false;
		this.subscription = this.testTypeSelectedChange.subscribe((value) => {
			this.testTypeSelected = value;
		});
	};

	ngOnInit() { };

	toggleTestTypeSelectedVisibility() {
		this.testTypeSelectedChange.next(!this.testTypeSelected);
	};

	testRequest() {
		const url = this.testRequestObj.url;
		const testObject = this.testRequestObj.testObj;

		if (this.testRequestObj) {
			return this.http.post<any>(url, testObject).pipe(map(response => response))
		}
	}

	getQuestions(questions: object[]) {
		return this.questionsArr = questions;
	};

	get testQuestions() {
		return this.questionsArr;
	};

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
};
