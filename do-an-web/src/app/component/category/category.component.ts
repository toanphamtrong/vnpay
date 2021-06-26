import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data, param } from 'jquery';
import { BrandService } from 'src/app/service/brand.service';
import { CartService } from 'src/app/service/cart.service';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';
import { SharedDataService } from 'src/app/service/shared-data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  cateId : any;
  brands : any;
  p = 1;categorys:any;
  categoryId: any;
  products : any;
  constructor(
    private route : ActivatedRoute,
    private cateServive : CategoryService,
    private productService : ProductService,
    private brandService : BrandService,
    public sharedDataService: SharedDataService,
    private cartService: CartService
  ) {
    route.paramMap.subscribe(param =>this.cateId  = param.get('id'));
  }

  ngOnInit(): void {
    this.loadProductCategory();
    this.loadBrands();
    this.loadCategory();

  }
  public loadCategory() :void{
    this.cateServive.getCategory().subscribe(
      data => {
        this.categorys = data;
      }
    )
  }
  public loadBrands(): void {
    this.brandService.getAll().subscribe(
      data => {
        this.brands = data;
      },
      error => console.log(error)
    );
  }
  //lấy product theo categoryId
  public loadProductCategory() : void{
    this.cateServive.getProductForCategory(this.cateId).subscribe(
      data => {
        this.sharedDataService.productList = data
      },
      err => console.log(err)
    )
  }

  public loadChitietSanPham(){
    this.productService.getAll().subscribe(
      data=>{
        this.products = data;
      },
      error => console.log(error)

    )
  }
  public addCart(prod: any){
    debugger
    if(prod.coloList && prod.coloList.length > 0){
      if(this.sharedDataService.cart){
        //set product và cart
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
