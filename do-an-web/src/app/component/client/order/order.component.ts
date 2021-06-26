import { VnpayService } from './../../../service/vnpay.service';
import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  dataDetail: any;
  dataOder : any;
  constructor(private orderService : OrderService,
    private vnpayService:VnpayService) { }

  ngOnInit(): void {
    this.loadData();
  }
  public loadData(){
    this.orderService.getAlloderByUser().subscribe(data=>{
        this.dataOder = data;
    },
    err => console.log(err)
    )
  }

  public getDetailByCode(code: any){
    this.orderService.getOderdetailByCode(code).subscribe(
      data=>{
        this.dataDetail = data;
      },
      err => console.log(err)
    )
  }
  vnpayRequest = {
    vnp_BankCode : "",
    vnp_OrderInfo : "",
    vnp_Amount : "0",
    delivery_address: "",
    delivery_mobile: "",
  }
  vnp_BankCode : string = "NCB";
  getOrderUrl(oder: any) {
    this.vnpayRequest.vnp_BankCode = this.vnp_BankCode;
    this.vnpayRequest.vnp_OrderInfo = oder.id;
    this.vnpayRequest.vnp_Amount = oder.totalResult.toString();
    console.log(this.vnpayRequest);
    
    this.vnpayService.getRedirectUrl(this.vnpayRequest).subscribe(
      res => window.location.href = res.message,
      error => window.alert("Lỗi")
    )
    console.log(oder);
    
  }

}
