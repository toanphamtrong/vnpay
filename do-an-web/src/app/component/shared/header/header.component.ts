import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import {Router} from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { SeachForm } from 'src/app/model/seach';
import {SharedDataService} from '../../../service/shared-data.service';
import {CartService} from '../../../service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAdmin: any;
  username: any;
  name: any;
  isLogin: boolean | undefined;
  category: any;
  seachFrom: SeachForm = new SeachForm();
  testTimKiem: any;
  code: any;
  constructor( private cateService: CategoryService,
               private productService: ProductService,
               private router: Router,
               public sharedDataService: SharedDataService,
               private cartService: CartService) {
                 this.loadData()
    this.username = localStorage.getItem('username');
    this.isAdmin = localStorage.getItem('isAdmin');
    this.name = localStorage.getItem("name");
    this.code = localStorage.getItem("code")
    console.log("admin :",this.isAdmin);
    if (this.username != null && localStorage.getItem('token') != null){
      this.isLogin = true;
    }else {
      this.isLogin = false;
    }
  }

  ngOnInit(): void {
    this.loadData();
    console.log(this.sharedDataService.cart);
  }

  public loadData(): void {
    this.cateService.getCategory().subscribe(data => {
      this.category = data;
    }, error => console.log(error));
    this.cartService.loadCartByUser()?.subscribe(
      data => {
        this.sharedDataService.cart = data;
        console.log(data);
      }, error => console.log(error)
    );
  }


  public logout(): void {
    localStorage.clear();
    this.isLogin = false;
    window.location.reload();
  }

  public timkiem(): void{
    this.productService.seachAll(this.seachFrom).subscribe(
      data => {
          this.testTimKiem = data;
          this.sharedDataService.productList = data;
      },
      (error: any) => {
        alert('Không tìm thấy sản phẩm');
      }
    );
  }

}
