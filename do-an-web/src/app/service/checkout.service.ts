import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  url='http://localhost:8080/datn/pay';
  constructor(
    private http: HttpClient
  ) { }

  public checkoutPaypal(data: any): Observable<any>{
    const params = new HttpParams().set('price', data);
    return this.http
    .post(`${this.url}/pay`,data, {params})
    .pipe(catchError((err)=> throwError(err)));
  }
}
