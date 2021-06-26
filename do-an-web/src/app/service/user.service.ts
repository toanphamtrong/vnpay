import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:8080/datn/users';
  constructor(
    private http: HttpClient
  ) { }

  public getAllUser(): Observable<any>{
    return this.http.get(`${this.url}/all`,{observe: "body"})
    .pipe(catchError(err => throwError(err)));
  }
}
