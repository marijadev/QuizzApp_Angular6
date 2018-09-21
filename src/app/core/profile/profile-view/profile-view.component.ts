import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../shared/services/profile.service';

@Component({
	selector: 'app-profile-view',
	templateUrl: './profile-view.component.html',
	styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit {
	user;
	constructor(private profileService: ProfileService) { }

	ngOnInit() {
		this.user = this.profileService.populateUser();
		console.log(this.user)

	}

}
