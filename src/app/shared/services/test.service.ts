import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { questionTypes } from '../../shared/constants';

@Injectable({
	providedIn: 'root'
})
export class TestService implements OnInit{
	testTypeSelected: boolean = false;
	testTypeSelectedChange: Subject<boolean> = new Subject<boolean>();
	private questionsArr: object[];
	questionsByType = {
		single: [],
		multiple: [],
		order: [],
		text: [],
		connecting: []
	}

	constructor(private http: HttpClient) {
		this.testTypeSelected = false;
		this.testTypeSelectedChange.subscribe((value) => {
			this.testTypeSelected = value;
		});
	};
	
	ngOnInit() {}

	toggleTestTypeSelectedVisibility() {
		this.testTypeSelectedChange.next(!this.testTypeSelected);
	};

	fakeRequest() {
		// FAKE request
		return this.http.get<any>('/server/user/maketest').pipe(map(data => data));
	};

	getQuestions(questions: object[]) {
		return this.questionsArr = questions;
	};

	get testQuestions() {
		return this.questionsArr;
	};

};
