import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProfileService } from '../../../shared/services/profile.service';

@Component({
	selector: 'app-edit-profile',
	templateUrl: './edit-profile.component.html',
	styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
	@ViewChild('f') editProfileForm: NgForm;
	@Output() editing: EventEmitter<boolean> = new EventEmitter<boolean>();

	constructor(private profileService: ProfileService) { }

	ngOnInit() {

	}

	onEditSubmit() {
		const afterEdit = false;

		const password = this.editProfileForm.value.password;
		const name = this.editProfileForm.value.name;
		const surname = this.editProfileForm.value.surname;
		const phone = this.editProfileForm.value.phone;
		this.profileService.onEditProfile(password, name, surname, phone);

		this.editing.emit(afterEdit);
	}
}
