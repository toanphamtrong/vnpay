import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { data } from 'jquery';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url= 'http://localhost:8080/datn/oders';

  constructor(private http: HttpClient,
              private jwtService: JwtHelperService) { }

  public getAlloderByUser(): Observable<any>{
    const token = localStorage.getItem('token');
    // @ts-ignore
    const userID = this.jwtService.decodeToken(token).userID;
    return this.http.get(`${this.url}/user/${userID}`, {observe: 'body'});
  }
  public getAll(): Observable<any>{
    return this.http.get(`${this.url}/all`, {observe: 'body'})
    .pipe(catchError((er)=> throwError(er)));
  }
  public getById(id: number): Observable<any> {
    return this.http
      .get(`${this.url}/${id}`, { observe: 'body' })
      .pipe(catchError((e) => throwError(e)));
  }
  public deleteOderbyid(id : any): Observable<any>{
    return this.http.delete(`${this.url}/${id}`,{observe:"body"})
    .pipe(catchError((er)=> throwError(er)));
  }
  public saveOrder(order: any): Observable<any> {
    return this.http.post(`${this.url}`, order, {observe: 'body'})
    .pipe(catchError((er)=> throwError(er)));
  }
  public seach(data: any): Observable<any> {
    const params = new HttpParams().set('code', data);
    return this.http
      .get(`${this.url}/seach`, { observe: 'body', params })
      .pipe(catchError((err) => throwError(err)));
  }
  //lấy chi tiết theo mã code
  public getOderdetailByCode(code: any): Observable<any> {
    const params = new HttpParams().set('code',code)
    return this.http
      .get(`${this.url}/oderdetaill`, { observe: 'body', params })
      .pipe(catchError((err) => throwError(err)));
  }

}
