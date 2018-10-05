import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, flatMap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class TestService {
	testTypeSelected: boolean = false;
	testTypeSelectedChange: Subject<boolean> = new Subject<boolean>();

	constructor(private http: HttpClient) {
		this.testTypeSelected = false;
		this.testTypeSelectedChange.subscribe((value) => {
            this.testTypeSelected = value;
        });
	}

	toggleTestTypeSelectedVisibility() {
		this.testTypeSelectedChange.next(!this.testTypeSelected);
	}

	
	fakeRequest() {
		// FAKE request
		return this.http.get<any>('/server/user/maketest').pipe(map(data => data))
	}

	// checkTestQuestionType() {

	// }
}
