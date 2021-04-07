import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.dto';
import { BaseService } from './base.service';
import { rests } from './rests';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService{

  constructor(http: HttpClient) { 
    super(http)
  }

  read(): Observable<any> {
    return this.get(rests.user.api_user, {});
  }

  update(body: User): Observable<any> {
    return this.put(rests.user.api_user, body);
  }

  partial_update(body: User): Observable<any> {
    return this.patch(rests.user.api_user, body);
  }
}
