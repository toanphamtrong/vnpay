import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { ChartComponent } from "./chart/chart.component";
import { AddbrandComponent } from "./form/addbrand/addbrand.component";
import { AddcategoryComponent } from "./form/addcategory/addcategory.component";
import { AddoderComponent } from "./form/addoder/addoder.component";
import { AddproductComponent } from "./form/addproduct/addproduct.component";
import { AdduserComponent } from "./form/adduser/adduser.component";
import { HomeAdminComponent } from "./home-admin/home-admin.component";
import { BrandComponent } from "./home/brand/brand.component";
import { CategoryComponent } from "./home/category/category.component";
import { OderComponent } from "./home/oder/oder.component";
import { ProductComponent } from "./home/product/product.component";
import { UseradminComponent } from "./home/useradmin/useradmin.component";

const routes: Routes = [
    {path: '', component: AdminComponent, children: [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'test', component: HomeAdminComponent},
    {path:'a-brand',component:BrandComponent},
    {path:'a-category',component : CategoryComponent},
    {path:'a-user', component: UseradminComponent},
    {path:'a-oder', component: OderComponent},
    {path:'a-chart',component: ChartComponent},
    {path:'a-addCate/:id',component: AddcategoryComponent},
    {path:'a-addBrand/:id',component: AddbrandComponent},
    {path:"a-addUser/:id",component:AdduserComponent},
    {path:"a-addProduct/:id",component: AddproductComponent},
    {path:'dashboard',component: ProductComponent},
    {path:"a-addOder/:id",component:AddoderComponent}
  ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
