import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';
import { SharedDataService } from 'src/app/service/shared-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  category : any;
  p=1;
  p2=1;
  productSale : any;
  productNew : any;
  constructor(
    private categoryService  : CategoryService,
    private productService : ProductService,
    public sharedDataService: SharedDataService,
    private cartService: CartService
    ) {
  }

  ngOnInit(): void {
    this.loadData();
    this.loadProductNew();
    this.loadProductSale();

  }

  public loadData(){
    this.categoryService.getCategory().subscribe(data =>{
      this.category = data;
    },
    error => console.log(error)
    )
  };
  public loadProductNew(){
    this.productService.getNew().subscribe(
      data => {
        this.productNew = data;
      },
      err => console.log(err)
    )
  };
  public addCart(prod: any):void {
    debugger
    if(prod.coloList && prod.coloList.length > 0){
      if(this.sharedDataService.cart){
        prod.cartId = this.sharedDataService.cart.id;
      }
      this.cartService.addCartDetail(prod)?.subscribe(
        data => {
          this.sharedDataService.cart = data;
        }, error => console.log(error)
      );
      alert("Đã thêm vào giỏ")
    } else {
      alert("Sản phẩm đã hết hàng!");
    }
  }
  public loadProductSale(){
    this.productService.getSale().subscribe(
      data => {
        this.productSale = data
      },
      errr => console.log(errr)
    )
  }


}
