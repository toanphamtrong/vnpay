import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { SeachForm } from 'src/app/model/seach';
import { ProductService } from 'src/app/service/product.service';
import { SharedDataService } from 'src/app/service/shared-data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  p=1;
  seachFrom: SeachForm = new SeachForm();
  testTimKiem:any;
  constructor(
    private router: Router,
    private productsService: ProductService,
    public sharedDataService: SharedDataService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  public loadData(): void{
    this.productsService.getAll().subscribe(data => {
       this.sharedDataService.productList = data;
    },
    error => console.log(error)
    );
  }
  public timkiem(): void{
    this.productsService.seachAll(this.seachFrom).subscribe(
      data => {
          this.testTimKiem = data;
          this.sharedDataService.productList = data;
          if(data = ""){
            alert('Không tìm thấy sản phẩm');
          }
      },
      error => {console.log(error);
        alert('Không tìm thấy sản phẩm');
      }
    );
  }
  public addProduct(){
    this.router.navigate(['admin/a-addProduct/',0]);
  }
  public editProduct(idProduct: any){
    this.router.navigate(['admin/a-addProduct/',idProduct]);
  }

  public deleteProduct(idProduct: any){

  }
  dataDetail: any = {};
  public getDetailByCode(id: any){
    this.productsService.getProductdetailByid(id).subscribe(
      data=>{
        this.dataDetail = data;
      },
      err => console.log(err)
    )
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
