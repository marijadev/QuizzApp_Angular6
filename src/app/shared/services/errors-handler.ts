import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from './notification.service';



@Injectable()
export class ErrorsHandler implements ErrorHandler {

	constructor(private injector: Injector) { }

	readonly notificationService = setTimeout(() => {
		this.injector.get(NotificationService);
	}, 1000);

	handleError(error: Error | HttpErrorResponse) {
		if (error instanceof HttpErrorResponse) {
			// Server or connection error happened
			console.log('sample server error')
			
			if (!navigator.onLine) {
				// Handle offline error
				console.log('sample offline error')
			} else {
				// Handle Http Error (error.status === 403, 404...)
				console.log('sample status error')
			}
		} else {
			// Handle Client Error (Angular Error, ReferenceError...)     
		}
		// Log the error anyway
		console.error('It happens: ', error);
	}

}