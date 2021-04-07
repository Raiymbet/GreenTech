import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login, LoginDTO } from '../models/login.dto';
import { BaseService } from './base.service';
import { rests } from './rests';


@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService {

  constructor(http: HttpClient) {
    super(http)
  }

  login(login: Login): Observable<LoginDTO> {
    return this.post(rests.login.post_create, login);
  }
}
