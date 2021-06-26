import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import * as _ from 'lodash';
import { BrandsForm } from 'src/app/model/brands-form';
import { SeachForm } from 'src/app/model/seach';
import { BrandService } from 'src/app/service/brand.service';
import { CategoryService } from 'src/app/service/category.service';
import { OrderService } from 'src/app/service/order.service';
import { ProductService } from 'src/app/service/product.service';
import { SharedDataService } from 'src/app/service/shared-data.service';

@Component({
  selector: 'app-oder',
  templateUrl: './oder.component.html',
  styleUrls: ['./oder.component.css']
})
export class OderComponent implements OnInit {
  seachFrom: SeachForm = new SeachForm();
  search: any;
  p = 1;
  valueSeach: any;
  a: any;
  odersList: any;
  constructor(
    private oderService: OrderService,
    private route: Router,
    private routerA: ActivatedRoute,
    public sharedDataService: SharedDataService) {
    }

  ngOnInit(): void {
    this.loadOder();
  }
  public loadOder(): void{
    this.oderService.getAll().subscribe(
      data => {
        this.sharedDataService.productList = data;
      }
    );
  }

  public deleteOder(id: any): void{
    if (confirm('Bạn có muốn xóa')){
      this.oderService.deleteOderbyid(id).subscribe(
        // tslint:disable-next-line:no-shadowed-variable
        data => {
          alert("Delete succsess")
          this.loadOder();
        },
        error => {console.log(error);
                  alert('đã xóa');
        }
      );
    }
  }
  public editOder(idOder: any){
    this.route.navigate(['admin/a-addOder',idOder]);
  }
  dataDetail: any;
  public getDetailByCode(code: any){
    this.oderService.getOderdetailByCode(code).subscribe(
      data=>{
        this.dataDetail = data;
      },
      err => console.log(err)
    )
  }
  public seach(): void{
    console.log(this.search);
    this.oderService.seach(this.search).subscribe(
      data=>{
        this.sharedDataService.productList = data;
      },
      error => {console.log(error);
        alert('Không tìm thấy sản phẩm');
      }
    );
  }
}


