import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { Observable } from 'rxjs';
import { BrandService } from 'src/app/service/brand.service';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-menu',
  templateUrl: './product-menu.component.html',
  styleUrls: ['./product-menu.component.css']
})
export class ProductMenuComponent implements OnInit {
  brands: any;
  categorys : any;
  constructor(
    private brandService: BrandService,
    private category : CategoryService,
    private productService : ProductService
    ) { }

  ngOnInit(): void {
    this.loadBrands();
    this.loadCategory();
  }

  public loadCategory() :void{
    this.category.getCategory().subscribe(
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
  // public reload(): void {
  //   window.location.reload();
  // }
  public loadProdByCategory(cateId: any): void{

  }


}
