import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {observable, Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'http://localhost:8080/datn/auth';

  constructor(private http: HttpClient) { }

  public login(data: any): Observable<any> {
    return this.http.post(`${this.url}/token`, data, {observe: 'body'})
      .pipe(catchError(err => throwError(err)));
  }

  public dangky(data : any):Observable<any>{
    return this.http.post('http://localhost:8080/datn/users', data,
      {observe:"body"})
      .pipe(catchError(err => throwError(err)));
  }
}
