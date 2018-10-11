import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../shared/services/users.service';
import { QuestionService } from '../../questions/question.service';
import { User } from '../../shared/user.model';

@Component({
	selector: 'app-single-user',
	templateUrl: './single-user.component.html',
	styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent implements OnInit {
	@Input() user;
	categories;
	difficulties;
	status: ['Passed', 'Failed'];
	optionsShowed: boolean = false;
	constructor(private userService: UserService, private qService: QuestionService) { };

	ngOnInit() {
		this.categories = this.qService.questionCategory;
		this.difficulties = this.qService.questionDifficulty;
		console.log(this.user)
	};

	onUserChosen(userIndex: number) {
		console.log('userIndex', userIndex);
		this.optionsShowed = !this.optionsShowed;
	}

}
