import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  url = 'http://localhost:8080/datn/carts';

  constructor(private http: HttpClient) { }

  public addCartDetail(prod: any): Observable<any> | null {
    return this.http.post(`${this.url}`, prod, {observe: 'body'})
      .pipe(catchError(error => throwError(error)));
  }

  public loadCartByUser(): Observable<any> | null {
    const username = localStorage.getItem('username');
    if(username){
      return this.http.get(`${this.url}/get-by-user/${username}`, {observe: 'body'})
        .pipe(catchError(error => throwError(error)));
    }
    return null;
  }

  public deleCart(id: number):Observable<any>{
    return this.http.delete(`${this.url}/${id}`, {observe: "body"})
    .pipe(catchError(err => throwError(err)));
  }
}
