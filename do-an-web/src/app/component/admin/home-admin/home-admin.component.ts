import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/service/brand.service';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';
import { SharedDataService } from 'src/app/service/shared-data.service';
import { ActivatedRoute } from '@angular/router';
import { AddProductForm } from 'src/app/model/addProductForm';
import { LoginForm } from 'src/app/model/login-form';
import { SeachForm } from 'src/app/model/seach';
@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {
  addProductForm: AddProductForm;

  p = 1;
  categorys: any;
  brands: any;
  selectCategory: any;
  selectBrand: any;
  seachFrom: SeachForm = new SeachForm();
  prodId: any;
  testTimKiem: any;
  fileToUpload: File | null | undefined ;
  fileAnhProduct: any;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductService,
    private brandService: BrandService,
    private categoryService: CategoryService,
    public sharedDataService: SharedDataService
    ) {
      this.addProductForm = new AddProductForm();
    }

  ngOnInit(): void {
    this.loadData();
    this.loadCategory();
    this.loadBrands();
  }
  // tslint:disable-next-line:typedef
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}
  public loadData(): void{
    // tslint:disable-next-line:no-shadowed-variable
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
      },
    );
    alert("Không tìm thấy sản phẩm");
  }


  // Get Brand,cate
  public loadCategory(): void{
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

  public delete(prodId1: number): void {
    if (confirm('Bạn có muốn xóa')){
      this.productsService.deletePro(prodId1).subscribe(
        // tslint:disable-next-line:no-shadowed-variable
        data => {

        },
        error => {console.log(error);
          alert('đã xóa');
          //sao nó lại nhay
        }
      );

    }
  }
  fileChangeEvent(event: Event){
    const element = event.currentTarget as HTMLInputElement;
    let fileList: any = element.files;
    if (fileList) {
      console.log("FileUpload -> files", fileList);
    }
    this.fileAnhProduct = fileList[0];
}

  public addproducts(): void{
    this.addProductForm.brandId = this.selectBrand;
    this.addProductForm.productTypeId = this.selectCategory;
    const formData = new FormData();
    formData.append('fileImg', this.addProductForm.fileImg);
    formData.append('brandId', this.selectBrand);
    formData.append('productTypeId', this.selectCategory);
    // @ts-ignore
    formData.append('name', this.addProductForm.name);
    console.log(formData);
    this.productsService.saveofupdate(this.addProductForm).subscribe(
      data => {
        alert('Thêm Thành công!');
        this.loadData();
      },
      ( error: any) => {
        alert('Thất bại');
        console.log(error);
      }
    );

  }


}

// tslint:disable-next-line:typedef no-shadowed-variable
function data(data: any) {
  throw new Error('Function not implemented.');
}

