import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProfileService } from '../../../shared/services/profile.service';
import { User } from 'src/app/shared/user.model';

@Component({
	selector: 'app-edit-profile',
	templateUrl: './edit-profile.component.html',
	styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
	@ViewChild('f') editProfileForm: NgForm;
	@Output() editing: EventEmitter<boolean> = new EventEmitter<boolean>();
	user: User;

	constructor(private profileService: ProfileService) { }

	ngOnInit() {
		this.user = this.profileService.currentProfile;
	}

	onEditSubmit() {
		const afterEdit = false;

		// const password = this.editProfileForm.value.password;
		// const name = this.editProfileForm.value.name;
		// const surname = this.editProfileForm.value.surname;
		// const phone = this.editProfileForm.value.phone;
		// this.profileService.onEditProfile(password, name, surname, phone);

		this.user.password = this.editProfileForm.value.password;
		this.user.name = this.editProfileForm.value.name;
		this.user.surname = this.editProfileForm.value.surname;
		this.user.phone = this.editProfileForm.value.phone;
		this.profileService.onEditProfile(this.user);

		this.editing.emit(afterEdit);
	};

	onCancel() {
		const notEdited = false;
		this.editing.emit(notEdited);
	};
};
