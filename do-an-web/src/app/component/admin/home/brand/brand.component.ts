import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';
import { BrandsForm } from 'src/app/model/brands-form';
import { BrandService } from 'src/app/service/brand.service';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';
import { SharedDataService } from 'src/app/service/shared-data.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  p=1;
  ketquatimkiem : any;
  brandId:any;
  seachFrom: FormsModule;
  selectCategory: any;
  selectBrand: any;

  brandForm: BrandsForm;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productsService: ProductService,
    private brandService: BrandService,
    private categoryService: CategoryService,
    public sharedDataService: SharedDataService,
    ) {
      this.seachFrom = new FormsModule;
      this.brandForm = new BrandsForm;
      route.paramMap.subscribe(param => this.brandId=param.get('id'));
     }

  ngOnInit(): void {
    this.loadBrands();
  }

  public loadBrands(): void {
    this.brandService.getAll().subscribe(
      data => {
        this.sharedDataService.productList = data
      },
      error => console.log(error)
    );
  }


  public save(){
    this.brandService.saveOfupdate(this.brandForm).subscribe(data =>
      {
       alert("Thêm Thành công!");
       console.log(data)
     },
     ( error: any) => {
       alert("bạn không có quyền");
       console.log(error);
     }
   );
  }
  public addBrand(){
    this.router.navigate(['admin/a-addBrand',0]);
}
  public deletebrand(brandId: number): void {
    if (confirm("Bạn có muốn xóa")){
      this.brandService.deleteBrand(brandId).subscribe(
        data => {
          alert("Delete success");
          this.loadBrands();
        },
        error => console.log(error)
      );

    }
    else{
      alert("Bạn không có quyền")
    }
  }
  public editBrand(brandId: any){
    this.router.navigate(['admin/a-addBrand',brandId]);

  }
  public sortByCode(dir: any){
    if(dir === "up" ){
      this.sharedDataService.productList = _.orderBy(this.sharedDataService.productList,['code'],['desc']);
    }
    else{
      this.sharedDataService.productList = _.orderBy(this.sharedDataService.productList,['code'],['asc']);
    }
  }

}

