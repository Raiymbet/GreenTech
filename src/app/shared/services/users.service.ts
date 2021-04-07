import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrigadiersUpdate } from '../models/brigadiers.dto';
import { User } from '../models/user.dto';
import { WorkersCreate, WorkersUpdate } from '../models/workers.dto';
import { BaseService } from './base.service';
import { rests } from './rests';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseService {

  constructor(http: HttpClient) { 
    super(http)
  }

  brigadiersList(): Observable<any> {
    return this.get(rests.users.get_brigadiers, {});
  }

  bigadiersCreate(body: User): Observable<any> {
    return this.get(rests.users.get_brigadiers, body);
  }

  brigadiersRead(id: number): Observable<any> {
    return this.get(rests.users.get_brigadiers + id, {});
  }

  brigadiersUpdate(id: number, body: BrigadiersUpdate): Observable<any> {
    return this.put(rests.users.get_brigadiers + id, body);
  }

  brigadiersPartialUpdate(id: number, body: BrigadiersUpdate): Observable<any> {
    return this.patch(rests.users.get_brigadiers + id, body);
  }

  brigadiersDelete(id: number): Observable<any> {
    return this.delete(rests.users.get_brigadiers + id, {});
  }




  workersList(): Observable<any> {
    return this.get(rests.users.api_workers, {});
  }

  workersCreate(body: WorkersCreate): Observable<any> {
    return this.get(rests.users.api_workers, body);
  }

  workersRead(id: number): Observable<any> {
    return this.get(rests.users.api_workers + id, {});
  }

  workersUpdate(id: number, body: WorkersUpdate): Observable<any> {
    return this.put(rests.users.api_workers + id, body);
  }

  workersPartialUpdate(id: number, body: WorkersUpdate): Observable<any> {
    return this.patch(rests.users.api_workers + id, body);
  }

  workersDelete(id: number): Observable<any> {
    return this.delete(rests.users.api_workers + id, {});
  }
}
