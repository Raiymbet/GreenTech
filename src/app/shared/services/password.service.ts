import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PasswordChange, PasswordReset, PasswordResetConfirm } from '../models/password.dto';
import { BaseService } from './base.service';
import { rests } from './rests';

@Injectable({
  providedIn: 'root'
})
export class PasswordService extends BaseService {
  
  constructor(http: HttpClient) {
    super(http)
  }

  change(body: PasswordChange): Observable<any> {
    return this.post(rests.password.post_change, body);
  }

  reset(body: PasswordReset): Observable<any> {
    return this.post(rests.password.post_reset, body);
  }

  resetConfirm(body: PasswordResetConfirm): Observable<any> {
    return this.post(rests.password.post_reset_confirm, body);
  }
}
