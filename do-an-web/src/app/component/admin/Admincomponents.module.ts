import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponentAdmin } from './menu/menu.component';
import { FooterComponentAdmin } from './footer/footer.component';
import { HeaderComponentAdmin } from './header/header.component';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { OderComponent } from './home/oder/oder.component';
import { BrandComponent } from './home/brand/brand.component';
import { CategoryComponent } from './home/category/category.component';
import { UseradminComponent } from './home/useradmin/useradmin.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ChartComponent } from './chart/chart.component';
import {MatIconModule} from '@angular/material/icon';
import { AddcategoryComponent } from './form/addcategory/addcategory.component';
import { AddproductComponent } from './form/addproduct/addproduct.component';
import { AddbrandComponent } from './form/addbrand/addbrand.component';
import { AdduserComponent } from './form/adduser/adduser.component';
import { AddoderComponent } from './form/addoder/addoder.component';
import { ProductComponent } from './home/product/product.component';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule,
        NgxPaginationModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatIconModule,
        MatSelectModule,
        MatToolbarModule,
    ],
  declarations: [
    FooterComponentAdmin,
    HeaderComponentAdmin,
    MenuComponentAdmin,
    AdminComponent,
    HomeAdminComponent,
    OderComponent,
    BrandComponent,
    CategoryComponent,
    UseradminComponent,
    ChartComponent,
    AddcategoryComponent,
    AddproductComponent,
    AddbrandComponent,
    AdduserComponent,
    AddoderComponent,
    ProductComponent,

  ],
  exports: [
  ]
})
export class AdminsModule { }
