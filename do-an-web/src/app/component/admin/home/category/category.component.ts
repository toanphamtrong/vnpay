import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';
import { BrandsForm } from 'src/app/model/brands-form';
import { BrandService } from 'src/app/service/brand.service';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';
import { SharedDataService } from 'src/app/service/shared-data.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  p = 1;
  a: any;
  cateForm: BrandsForm;
  categorys: any;
  brands: any;
  selectCategory: any;
  selectBrand: any;
  constructor(
    private productsService: ProductService,
    private route: Router,
    private routerA: ActivatedRoute,
    private brandService: BrandService,
    private categoryService: CategoryService,
    public sharedDataService: SharedDataService) {
    // tslint:disable-next-line:new-parens
      this.cateForm = new BrandsForm;
    }

  ngOnInit(): void {
    this.loadCategory();
  }
  public loadCategory(): void{
    this.categoryService.getCategory().subscribe(
      data => {
        this.categorys = data;
      }
    );
  }
  // tslint:disable-next-line:typedef
  public addCate(){

      this.route.navigate(['admin/a-addCate',0]);
  }
  public deleteCategory(id: any): void{
    if (confirm('Bạn có muốn xóa')){
      this.categoryService.deleteCate(id).subscribe(
        // tslint:disable-next-line:no-shadowed-variable
        data => {
          alert("Delete succsess")
          this.loadCategory();
        },
        error => {console.log(error);
                  alert('đã xóa');
          // sao nó lại nhay
        }
      );

    }

  }
  public editCategory(idCate: any){

    this.route.navigate(['admin/a-addCate',idCate]);
}

  public sortByCode(dir: any){
    if(dir === "up" ){
      this.categorys = _.orderBy(this.categorys,['code'],['desc']);
    }
    else{
      this.categorys = _.orderBy(this.categorys,['code'],['asc']);
    }
  }
}

