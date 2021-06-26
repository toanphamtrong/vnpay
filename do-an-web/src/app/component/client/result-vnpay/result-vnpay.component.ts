import { VnpayService } from './../../../service/vnpay.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { errorCode } from 'src/app/model/errorCode';
import { bankcode } from 'src/app/model/bankCode';

@Component({
  selector: 'app-result-vnpay',
  templateUrl: './result-vnpay.component.html',
  styleUrls: ['./result-vnpay.component.css']
})
export class ResultVnpayComponent implements OnInit {

  resultCode: any;
  Amount : any;
  ResponseCode: any;
  BankCode: any;
  OrderInfo: any;
  PayDate: any;
  TransactionNo: any;
  url: any;
  errorCodes = errorCode;
  bank = bankcode;
  errorMessage : any;
  balance: any;
  paymentSuccess :boolean = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private vnpayService: VnpayService,
    
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params);
      
      this.Amount = params.vnp_Amount;
      this.bank.map(x => {
        if(x.code === params.vnp_BankCode ) {
          this.BankCode = x.name
        }
      })
      this.OrderInfo = params.vnp_OrderInfo;
      this.ResponseCode = params.vnp_ResponseCode;
      this.TransactionNo = params.vnp_TransactionNo;
      this.PayDate = params.vnp_PayDate;
      const year = this.PayDate.substring(0,4);
      const month = this.PayDate.substring(4,6);
      const day = this.PayDate.substring(6,8);
      const hour = this.PayDate.substring(8,10);
      const minutes = this.PayDate.substring(10,12);
      const second = this.PayDate.substring(12,14);
      this.PayDate = day+'/'+month+'/'+year+' '+hour+':'+minutes+':'+second;

      this.url = window.location.href;
      this.url = this.url.substring(38,this.url.length);
      
      this.vnpayService.checkOrderStatus(this.url).subscribe(
        res => {
          console.log(res);
          
          if(res.message == "Payment success"){
            this.paymentSuccess = true;
          }else{
            this.paymentSuccess = false;
          }
        this.resultCode = res.message;
        console.log(res);
        if(this.resultCode !== '00') {
          this.errorCodes.map(x => {
            if(x.code === res.message){
              this.errorMessage = x.description;
            }
          });
        }else{
          this.balance = res.balance;
        }
        }

      )
    });
  }

  ngOnInit(): void {
  }

}
