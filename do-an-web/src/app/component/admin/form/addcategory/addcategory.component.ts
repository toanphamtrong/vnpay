import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from 'src/app/service/category.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
  public id = 0;
  public category: any;
  public name:any;
  public cateForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    code: new FormControl('')
  });

  constructor(
    private categorySevice: CategoryService,
    private route: Router,
    private routerA: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.id = this.routerA.snapshot.paramMap.get('id');
    if (this.id > 0) {
      this.loadData(this.id);
    }
  }

  // tslint:disable-next-line:typedef
  private loadData(id: any) {
    // tslint:disable-next-line:no-shadowed-variable
    this.categorySevice.getCateById(id).subscribe((data) => {
      for (const controlName in this.cateForm.controls) {
        if (controlName) {
          this.cateForm.controls[controlName].setValue(data[controlName]);
        }
      }
      console.log('data Cate', data);
    });
  }
  // tslint:disable-next-line:typedef
  public saveandGotoList() {
    if (this.id > 0) {
      this.categorySevice.saveOfupdate(this.createNewData()).subscribe(
        // tslint:disable-next-line:no-shadowed-variable
        data => {
          console.log('DataFormCategory', data);
          alert('Cập  nhập thành công thể loại');
          this.route.navigate(['admin/a-category']);
        },
        err => console.log(err)
      );
    } else{
      this.categorySevice.saveOfupdate(this.createNewData()).subscribe(
        data => {
          console.log('DataFormCategory', data);
          alert('Thêm mới thành công thể loại');
          this.route.navigate(['admin/a-category']);
        },
        err => console.log(err)
      );
    }
  }
  private createNewData() {
    const addCateObjec = {};
    if (this.id) {
      this.cateForm.controls['id'].setValue(this.id);
    }
    for (const valueCate in this.cateForm.controls) {
      if (valueCate) {
        // @ts-ignore
        addCateObjec[valueCate] = this.cateForm.controls[valueCate].value;
      }
    }
    return addCateObjec;
  }

  public back() {
    this.route.navigate(['admin/a-category']);
  }
}
