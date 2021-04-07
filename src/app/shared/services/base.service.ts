import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { environment } from '../../../environments/environment';
// import * as moment from 'moment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  apiUrl = environment.apiUrl;
  timeActive = new Date().getTime();

  constructor(protected http: HttpClient) { }

  formatDate(date: any) {
    // return moment(date).format('YYYY-MM-DD');
    return date;
  }

  get(uri: string, body: any): Observable<any> {
    this.timeActive = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), new Date().getHours(), new Date().getMinutes(), new Date().getSeconds()).getTime();
    body = this.normalBody(body);
    const pars = this.getUrlParams(body);
    return this.http.get(this.apiUrl + uri, {params: pars});
  }

  post(uri: string, body: any, options?: any): Observable<any> {
    this.timeActive = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), new Date().getHours(), new Date().getMinutes(), new Date().getSeconds()).getTime();
    body = this.normalBody(body);
    return this.http.post(this.apiUrl + uri, body, options);
  }

  delete(uri: string, body: any): Observable<any> {
    body = this.normalBody(body);
    return this.http.delete(this.apiUrl + uri, body);
  }

  put(uri: string, body: any): Observable<any> {
    body = this.normalBody(body);
    return this.http.put(this.apiUrl + uri, body);
  }

  patch(uri: string, body: any): Observable<any> {
      body = this.normalBody(body);
      return this.http.patch(this.apiUrl + uri, body);
  }


  private normalBody(body: any): any {
    if (!body) {
      body = {};
    }
    for (const key in body) {
      if (!body.hasOwnProperty(key)) {
        continue;
      }
      if (body[key] instanceof Date) {
        body[key] = this.formatDate(body[key]);
      }
    }
    return body;
  }

  private getUrlParams(body: any): HttpParams {
    let params = new HttpParams();
    for (const key in body) {
      if (!body.hasOwnProperty(key)) {
        continue;
      }
      params = params.append(key, body[key]);
    }
    return params;
  }

  public updateObject(object: {}) {
    let res = {};
    for (let key in object) {
      if (object[key]) {
        res[key] = object[key];
      }
    }
    return res;
  }
}
