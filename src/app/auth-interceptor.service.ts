import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //console.log('Inter, Request is on its way');
        console.log(req.url);
        
        const modifiedRequest = req.clone({
            headers: req.headers.append('Auth', 'xyz')
        });

        return next.handle(modifiedRequest).pipe(
            tap(event => {
                if (event.type === HttpEventType.Response) {
                    //console.log('Inter, Response arrived, body data:');
                    console.log(event.body);
                }
            })
        );
    }
}
