import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from '../../shared/services/profile.service';
import { User } from '../../shared/user.model';
import { userInfo } from 'os';


@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
	user: User;
	netImage:any;
	@Input('editing') editing;

	constructor(private profileService: ProfileService) { }

	ngOnInit() {
		this.user = this.profileService.populateUser();
		this.netImage = 'http://localhost:8080/' + this.user.photo;
	}

	allowEditProfile() {
		this.editing = true;
	}
	
	editingProfile(e: boolean) {
		this.editing = e;
	}
}
