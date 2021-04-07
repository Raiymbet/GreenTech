import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistrationCreate, RegistrationVerifyEmail } from '../models/registration.dto';
import { BaseService } from './base.service';
import { rests } from './rests';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService extends BaseService {

  constructor(http: HttpClient) { 
    super(http)
  }

  create(body: RegistrationCreate): Observable<any> {
    return this.post(rests.registration.post_create, body);
  }

  verifyEmail(body: RegistrationVerifyEmail): Observable<any> {
    return this.post(rests.registration.post_verify, body);
  }
}
