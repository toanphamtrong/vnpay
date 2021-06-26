import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from 'jquery';
import { BrandService } from 'src/app/service/brand.service';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';
import { SharedDataService } from 'src/app/service/shared-data.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  p=1;
  brandID: any;
  ListBrandsId: any;
  products : any;

  constructor(
    private route : ActivatedRoute,
    private brandSerive : BrandService,
    private productService : ProductService,
    public sharedDataService: SharedDataService,
    private cartService: CartService
  ) {
    route.paramMap.subscribe(param =>this.brandID  = param.get('id'));
  }
  ngOnInit(): void {
    this.LoadDataBrand();

    throw new Error('Method not implemented.');
  }

  public LoadDataBrand() : void{
    this.productService.getProductForBrand(this.brandID).subscribe(data =>{
      this.ListBrandsId = data;
    })
  }
   public addCart(prod: any){
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
}
