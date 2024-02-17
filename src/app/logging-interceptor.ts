import { HttpEventType, HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

export class LoggingInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //console.log('Outgoing Request');
        console.log(req.url);

        // Pass the request through the next handler
        return next.handle(req).pipe(
            tap(event => {
                // You can log the response event here if needed
                if (event.type === HttpEventType.Response) {
                    //console.log('Incoming Response');
                    console.log(event);
                }
            })
        );
    }
}
