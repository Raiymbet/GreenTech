import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import { User } from '../models/user.dto';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  primarySubject: Subject<number> = new Subject();
  
  constructor() {
  }
  
  
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  
  getToken() {
    return localStorage.getItem('token');
  }
  
  setUserInfo(user_info: User) {
    sessionStorage.setItem("user_info", JSON.stringify(user_info));
  }

  getUserInfo() {
    return JSON.parse(sessionStorage.getItem("user_info"));
  }
}
