import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VnpayService {
  url = 'http://localhost:8080/datn/vnpay';
  constructor(
    private http: HttpClient
  ) { }

  public getRedirectUrl(vnpayRequest : any) : Observable<any> {
    return this.http.post(this.url+"/payment", vnpayRequest).pipe(
      catchError(e => throwError(this.handleError(e)))
    )
  }
  handleError(e:any){ 
    console.log(e);
  }
  public checkOrderStatus(u : any) : Observable<any> {
    return this.http.get<any>(`${this.url}/vnpay_ipn?${u}`).pipe();
  }
}
