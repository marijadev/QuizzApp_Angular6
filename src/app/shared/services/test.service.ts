import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class TestService {
	testTypeSelected: boolean = false;
	testTypeSelectedChange: Subject<boolean> = new Subject<boolean>();


	constructor() {
		this.testTypeSelected = false;
		this.testTypeSelectedChange.subscribe((value) => {
            this.testTypeSelected = value;
        });
	}

	toggleTestTypeSelectedVisibility() {
		this.testTypeSelectedChange.next(!this.testTypeSelected);
	}
}
