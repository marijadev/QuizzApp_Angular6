import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../shared/services/profile.service';
import { User } from '../../shared/user.model';


@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
	user: User;
	private editing: boolean; // Is Component in edit mode?

	constructor(private profileService: ProfileService) { }

	ngOnInit() {
		this.user = this.profileService.populateUser();
		this.editing = this.profileService.editing;
	}

	onEditProfile() {
		this.profileService.editing = true;
		this.editing = true;
	}


}
