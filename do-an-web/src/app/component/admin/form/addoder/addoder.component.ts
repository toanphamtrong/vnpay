import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { OrderService } from 'src/app/service/order.service';
interface status {
  value: number;
  viewValue: string;
}
@Component({
  selector: 'app-addoder',
  templateUrl: './addoder.component.html',
  styleUrls: ['./addoder.component.css']
})


export class AddoderComponent implements OnInit {

  // co 3 trang thai set cung the nay cx dc
  status: status[] = [
    {value: 0, viewValue: 'Đã lên đơn'},
    {value: 1, viewValue: 'Đang giao hàng'},
    {value: 2, viewValue: 'Hoàn thành'}
  ];
  public id = 0;
  dataOder : any;
  public oderForm = new FormGroup({
    id: new FormControl(''),
    code: new FormControl(''),
    totalResult: new FormControl(''),
    numberProduct: new FormControl(''),
    deliveryAddress: new FormControl(''),
    phoneNumber: new FormControl(''),
    status: new FormControl(''),
    deliveryDate: new FormControl(''),
    tenNguoiNhan: new FormControl('')
  });
  constructor(
    private oderService: OrderService,
    private route: Router,
    private routerA: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // @ts-ignore
    //lấy id từ bên Table
    this.id = this.routerA.snapshot.paramMap.get('id');
    if (this.id > 0) {
      this.loadUpdate(this.id);
    }
    this.loadData();
  }

  public loadData(){
    this.oderService.getAll().subscribe(
      data => {
        this.dataOder = data;
      }
    )
  }
  // tslint:disable-next-line:typedef
  private loadUpdate(id: any) {
    this.oderService.getById(id).subscribe(
      data=>{
        for (const valueOderForm in this.oderForm.controls){
          if(valueOderForm){
            this.oderForm.controls[valueOderForm].setValue(data[valueOderForm])
          }
        }
        console.log('data Cate', data);
      }
    )
  }
  public saveandGotoList() {
    if(this.id){
      this.oderForm.controls['id'].setValue(this.id);
    }
    if (this.id > 0) {
      this.oderService.saveOrder(this.oderForm.value).subscribe(
        // tslint:disable-next-line:no-shadowed-variable
        data => {
          alert('Cập nhập thành công');
          this.route.navigate(['admin/a-oder']);
        },
        err => console.log(err)
      );
    }
  }
  private createNewData() {
    const ValueOder={};
    if(this.id){
      this.oderForm.controls['id'].setValue(this.id);
    }
    for(const value in this.oderForm.controls){
     if(value){
       // @ts-ignore
      ValueOder[value] = this.oderForm.contains[value].value;
     }
    }
    return ValueOder;
  }

  public back() {
    this.route.navigate(['admin/a-oder']);
  }
}
