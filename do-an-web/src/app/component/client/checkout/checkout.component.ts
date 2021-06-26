import { VnpayService } from './../../../service/vnpay.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckoutService } from 'src/app/service/checkout.service';
import { OrderService } from 'src/app/service/order.service';
import { SharedDataService } from 'src/app/service/shared-data.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  shippingCost = 1;
  total = 0;
  phoneNumber: any;
  tenNguoiNhan: any;
  deliveryAddress: any;
    url : any;
    testPrice = 5;
    constructor(
      public sharedDataService: SharedDataService,
      private router : Router,
      private checkoutService: CheckoutService,
      private orderService: OrderService,
      private vnpayService: VnpayService,
  ) {
    if (sharedDataService.cart.cartDetaills != null && sharedDataService.cart.cartDetaills.length > 0){
      for(let c of sharedDataService.cart.cartDetaills) {
        this.total += c.productInfoProductPriceSell*c.numberPro;
      }
    }
  }


  //đặt hàng off đây, khi ấn đặt hàng là n lưu mà, n trả cho mình mã code cuả oderdetail
  // chưa viết
  public checkoutoff(): void{
    const order = {
      phoneNumber: this.phoneNumber,
      tenNguoiNhan: this.tenNguoiNhan,
      deliveryAddress: this.deliveryAddress,
      cartId: this.sharedDataService.cart.id,
      username: localStorage.getItem('username')
    }
    this.orderService.saveOrder(order).subscribe(
      data => {
        alert("Đặt hàng thành công đơn hàng: " + data.code);
        this.router.navigate(['products']).then(n => window.location.reload());
      }, error => {
        console.log(error);
        alert("Đặt hàng thất bại");
      }
    );
  }
  


  ngOnInit(): void {
  }

  public checkout(): void{
    this.checkoutService.checkoutPaypal(this.testPrice).subscribe(
      // tslint:disable-next-line:no-shadowed-variable
      data => {
        window.location.href=data.redirect;
      },
      ( error: any) => {
        alert('Thất bại');
        console.log(error);
      }
    );
  }
  

}
