import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from 'jquery';
import { ProductService } from 'src/app/service/product.service';
import {CookieService} from 'ngx-cookie-service';
import { SharedDataService } from 'src/app/service/shared-data.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  isChooseColor: any;
  isProductInfo: any;
  quantity: number | undefined;
  prodId: any;
  productId : any; // đặt tên biến chán vl :v.đạt lại đi b :v, thôi sửa x^n chỗ
  // ActivatedRoute: lấy param trên url
  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private cookieService: CookieService,
              private sharedDataService: SharedDataService,
              private cartService: CartService) {
    this.quantity = 1;
    //lấy id của Product dc chọn
    route.paramMap.subscribe(param => this.prodId = param.get('id')); // tên phải giống vs tên bên routing, như này la lấy đc id prod
    this.isChooseColor = false;
    this.isProductInfo = false;
  }

  ngOnInit(): void {
    this.loadData();
  }


  //lấy thông tin sản phẩm theo id
  public loadData(): void {
    // quả này déo hơn quả trước :v
    this.productService.profindById(this.prodId).subscribe(data => {
      this.productId = data
    },
    err => console.log(err)
    )

  }

  // tslint:disable-next-line:no-shadowed-variable
  changeQuantity(data: any): void {
    if (this.quantity === 1 && data === -1){
      return;
    }
    this.quantity += data;
  }

  addCart(): void {
    if(this.sharedDataService.cart){
      this.productId.cartId = this.sharedDataService.cart.id;
    }
    this.productId.quantity = this.quantity;
    this.cartService.addCartDetail(this.productId)?.subscribe(
      data => {
        this.sharedDataService.cart = data;
      }, error => console.log(error)
    );
    alert("Đã thêm vào giỏ")
  }

  buyNow(): void {

  }

  chooseColor(productInfoId: any): void {
    this.productId.productInfoId = productInfoId;
    this.isChooseColor = true;
  }
}
