import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from "@angular/common/http";
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
	constructor(private token: TokenStorageService) { }
	intercept(
		request: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {

		const updatedRequest = request.clone({
			headers: request.headers.set("Authorization", this.token.getToken())
		});

		console.log("Before making api call : ", updatedRequest);
		return next.handle(request).pipe(
			tap(
				event => {
					if (event instanceof HttpResponse) {
						console.log("api call success :", event);
					}
				},
				error => {
					if (event instanceof HttpResponse) {
						console.log("api call error :", event);
					}
				}
			)
		);
	}
}