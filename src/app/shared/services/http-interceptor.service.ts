import { HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { tap } from 'rxjs/operators';
import { Router, RouterLink } from '@angular/router';

@Injectable()
export class HttpInterceptorService {

  constructor(private router: RouterLink) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (!window.navigator.onLine) {
      alert('Подключение к Интернету отсутствует');
      // this.toastr.error("Подключение к Интернету отсутствует", "", {
      //   timeOut: 5000,
      // });
      // this.toastr.error('Подключение к Интернету отсутствует', null,
      //   { maxShown: 1, toastLife: 5000 });
      return Observable.throw(new HttpErrorResponse({ error: 'Internet is required.' }));
    } else {
      let token = localStorage.getItem('token');
      if (token) {
        let dubReq = req.clone({ headers: req.headers.set('Authorization', `Bearer ${token}`) });
        return next.handle(dubReq).pipe(
          tap(event => {
          }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
              if (err.status === 401) {
                // redirectToRoot(true);
                // this.router.navigate(['login']);
              } else if (err.status === 404) {
                alert("Объект не найден");
                // this.toastr.error("Объект не найден", "", {
                //   timeOut: 5000,
                // });
              } else if(err.status === 490) {
                return;
              } else if (err.status >= 400 && err.status < 500){
                alert("Ошибка Клиента! " + err.message);
                // this.toastr.error( err.message,
                //   "Ошибка Клиента!", {
                //   timeOut: 5000,
                // });
              } else if (err.status >= 500) {
                alert("Ошибка Сервера. Пожалуйста обратитесь разработчикам! " + err.message);
                // this.toastr.error( err.message,
                //   "Ошибка Сервера. Пожалуйста обратитесь разработчикам!", {
                //   timeOut: 5000,
                // });
              }
              return;              
            }
          })
        );
      }
      return next.handle(req);
    }
  }

}
