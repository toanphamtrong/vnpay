import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  url = 'http://localhost:8080/datn/brands';

  constructor(private http: HttpClient) {}

  public getAll(): Observable<any> {
    return this.http
      .get(`${this.url}/all`, { observe: 'body' })
      .pipe(catchError((err) => throwError(err)));
  }

  public getById(id: number): Observable<any> {
    return this.http
      .get(`${this.url}/${id}`, { observe: 'body' })
      .pipe(catchError((e) => throwError(e)));
  }

  public saveOfupdate(data: any): Observable<any> {
    return this.http
      .post(`${this.url}`, data, { observe: 'body' })
      .pipe(catchError((e) => throwError(e)));
  }

  public deleteBrand(id: number): Observable<any> {
    return this.http
      .delete(`${this.url}/${id}`, { observe: 'body' })
      .pipe(catchError((er) => throwError(er)));
  }
}
