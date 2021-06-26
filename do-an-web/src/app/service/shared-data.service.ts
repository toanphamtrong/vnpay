import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  public productList: any;
  public cart: any;
  public cate:any;
  constructor() { }
}
