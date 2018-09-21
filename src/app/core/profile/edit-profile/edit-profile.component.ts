import { Component, OnInit, ViewChild, ElementRef, Input, Renderer2, forwardRef } from '@angular/core';
import { User } from '../../../shared/user.model';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgForm } from '@angular/forms';

// const INLINE_EDIT_CONTROL_VALUE_ACCESSOR = {
// 	provide: NG_VALUE_ACCESSOR,
// 	useExisting: forwardRef(() => EditProfileComponent),
// 	multi: true
// };
@Component({
	selector: 'app-edit-profile',
	templateUrl: './edit-profile.component.html',
	// providers: [INLINE_EDIT_CONTROL_VALUE_ACCESSOR],
	styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
	@ViewChild('f') editProfileForm: NgForm;
	username;
	user: User = {
		username: '',
		name: '',
		surname: '',
		password: '',
		id: 0,
		admin: 0,
		phone: 0,
	};
	// @ViewChild('inlineEditControl') inlineEditControl: ElementRef; // input DOM element
	// @Input() label: string = '';  // Label value for input element
	// @Input() type: string = 'text'; // The type of input element
	// @Input() required: boolean = false; // Is input requried?
	// @Input() disabled: boolean = false; // Is input disabled?
	// private _value: string = ''; // Private variable for input value
	// public onChange: any = Function.prototype; // Trascend the onChange event
	// public onTouched: any = Function.prototype; // Trascend the onTouch event

	// get value(): any {
	// 	return this._value;
	// }

	// set value(v: any) {
	// 	if (v !== this._value) {
	// 		this._value = v;
	// 		this.onChange(v);
	// 	}
	// }

	// constructor(private element: ElementRef, private _renderer: Renderer2) { }

	// // Required for ControlValueAccessor interface
	// writeValue(value: any) {
	// 	this.user.name = value;
	// 	console.log(this.user.name)
	// }

	// // Required forControlValueAccessor interface
	// public registerOnChange(fn: (_: any) => {}): void {
	// 	this.onChange = fn;
	// }

	// // Required forControlValueAccessor interface
	// public registerOnTouched(fn: () => {}): void {
	// 	this.onTouched = fn;
	// }

	// // Start the editting process for the input element
	// edit(value) {
	// 	if (this.disabled) {
	// 		return;
	// 	}
	// }

	ngOnInit() {
	}

	onSubmit(inputValue) {
		console.log(inputValue)
		console.log(this.editProfileForm)
	}

}
