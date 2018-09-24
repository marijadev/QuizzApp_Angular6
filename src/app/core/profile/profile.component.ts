import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from '../../shared/services/profile.service';
import { User } from '../../shared/user.model';


@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
	user: User;
	@Input('editing') editing;

	constructor(private profileService: ProfileService) { }

	ngOnInit() {
		this.user = this.profileService.populateUser();
		console.log(this.user)
	}

	allowEditProfile() {
		this.editing = true;
	}
	
	editingProfile() {
	}
}
