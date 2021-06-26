import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { BrandService } from 'src/app/service/brand.service';

@Component({
  selector: 'app-addbrand',
  templateUrl: './addbrand.component.html',
  styleUrls: ['./addbrand.component.css']
})
export class AddbrandComponent implements OnInit {
  id = 0;
  public brandForm = new FormGroup({
    id: new FormControl(''),
    code: new FormControl(''),
    name: new FormControl('')
  });
  constructor(
    private brandService: BrandService,
    private routerA: ActivatedRoute,
    private route: Router,
  ) { }

  ngOnInit(): void {
    // @ts-ignore
    this.id = this.routerA.snapshot.paramMap.get('id');
    if (this.id > 0) {
      this.loadData(this.id);
    }
  }
  private loadData(id: any) {
    // tslint:disable-next-line:no-shadowed-variable
    this.brandService.getById(id).subscribe((data) => {
      for (const controlName in this.brandForm.controls) {
        if (controlName) {
          this.brandForm.controls[controlName].setValue(data[controlName]);
        }
      }
      console.log(data);
    });
  }
  // tslint:disable-next-line:typedef
  public saveandGotoList() {
    if (this.id > 0) {
      this.brandService.saveOfupdate(this.createNewData()).subscribe(
        // tslint:disable-next-line:no-shadowed-variable
        data => {
          alert('Cập nhập thành công hãng sản xuất');
          this.route.navigate(['admin/a-brand']);
        },
        err => console.log(err)
      );
    } else {
      this.brandService.saveOfupdate(this.createNewData()).subscribe(
        data => {
          alert('thêm mới thành công hãng sản xuấ');
          this.route.navigate(['admin/a-brand']);
        },
        err => console.log(err)
      );
    }
  }


  private createNewData() {
    //trả về object form
    const ValueformBrand= {};
    if (this.id) {
      this.brandForm.controls['id'].setValue(this.id);
    }
    for (const valueBrand in this.brandForm.controls) {
      if (valueBrand) {
        // @ts-ignore
        ValueformBrand[valueBrand] = this.brandForm.controls[valueBrand].value;
      }
    }
    return ValueformBrand;
  }

  public back() {
    this.route.navigate(['admin/a-brand'])
  }
}
