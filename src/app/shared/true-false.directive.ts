import { Directive, Input, Renderer2, ElementRef, HostListener, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';

@Directive({
	selector: '[appTrueFalse]',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => TrueFalseDirective),
			multi: true
		}
	]
})
export class TrueFalseDirective implements ControlValueAccessor {
	@Input() trueValue: number = 1;
	@Input() falseValue: number = 0;
	private propagateChange = (_: any) => { };
	private propagateTouched = (_: any) => { };

	constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

	writeValue(obj: any): void {
		if (obj === this.trueValue) {
			this.renderer.setProperty(this.elementRef.nativeElement, 'checked', 1);
		} else {
			this.falseValue = 0;
			this.renderer.setProperty(this.elementRef.nativeElement, 'checked', 0);
		}
	}

	@HostListener('change', ['$event'])
	onHostChange(event) {
		this.propagateChange(!event.target.checked ? this.falseValue : this.trueValue);
		return this.falseValue =0;
	}

	registerOnChange(fn: any): void {
		this.propagateChange = fn;
	}
	registerOnTouched(fn: any): void {
		this.propagateTouched = fn;
	}
}
