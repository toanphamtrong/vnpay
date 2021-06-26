import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AddProductForm } from 'src/app/model/addProductForm';
import { BrandService } from 'src/app/service/brand.service';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  public id = 0;
  selectedFiles: any;
  fileToUpload: File | null | undefined;
  fileAnhProduct: any;
  addProductForm: AddProductForm;
  public categorys: any;
  public brands: any;
  selectCategory: any;
  selectBrand: any;
  public products: any;
  public productForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    code: new FormControl(''),
    priceSell: new FormControl(''),
    image: new FormControl(''),
  });

  options = [{ value: 'This is value 1', checked: true }];
  statuses = ['control'];

  imageUrl: any;
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    // Show image preview
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    // @ts-ignore
    reader.readAsDataURL(this.fileToUpload);
  }


  fileChangeEvent(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    const fileList: any = element.files;
    if (fileList) {
      console.log('FileUpload -> files', fileList);
    }
    this.fileAnhProduct = fileList[0];
  }
  handleFileInput1(files1: FileList) {
    this.fileToUpload = files1.item(0);
  }
  constructor(
    private route: Router,
    private productService: ProductService,
    private categoryService: CategoryService,
    private brandService: BrandService
  ) {
    this.addProductForm = new AddProductForm();
  }


  ngOnInit(): void {
    this.loadCategory();
    this.loadBrands();
  }
  public saveandGotoList() {
    if (this.id > 0) {
      this.productService.saveofupdate(this.createNewData()).subscribe(
        // tslint:disable-next-line:no-shadowed-variable
        data => {
          console.log('DataFormCategory', data);
          alert('Update category success');
          this.route.navigate(['admin/a-product']);
        },
        err => console.log(err)
      );
    } else if (this.id = 0) {
      this.productService.saveofupdate(this.createNewData()).subscribe(
        data => {
          console.log('DataFormCategory', data);
          alert('Add category success');
          this.route.navigate(['admin/a-product']);
        },
        err => console.log(err)
      );
    }
  }

  private createNewData() {
    const addProduct = {};
    if (this.id) {
      this.productForm.controls.id.setValue(this.id);
    }
    for (const valueProduct in this.productForm.controls) {
      if (valueProduct) {
        // @ts-ignore
        addProduct[valueCate] = this.productForm.controls[valueProduct].value;
      }
    }
    return addProduct;
  }
  // Get Brand,cate
  public loadCategory(): void {
    this.categoryService.getCategory().subscribe(
      // tslint:disable-next-line:no-shadowed-variable
      data => {
        this.categorys = data;
      }
    );
  }
  public loadBrands(): void {
    this.brandService.getAll().subscribe(
      // tslint:disable-next-line:no-shadowed-variable
      data => {
        this.brands = data;
      },
      error => console.log(error)
    );
  }

  selectFile(event: any) {
    this.selectedFiles = event.target.files;
  }
  public back() {
    this.route.navigate(['admin/dashboard']);
  }
}
