import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../shared/constants';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
	this.http.get(API_URL.unreviewedTests).subscribe(data => console.log(data))
  }

}
