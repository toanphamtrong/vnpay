import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandsComponent } from '../brands/brands.component';
import { CategoryComponent } from '../category/category.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  {path: '', component: ProductsComponent, children: [
    {path: '', component: ProductListComponent},
    {path: 'detail/:id', component: ProductDetailComponent},
    {path:'brand/:id',component: BrandsComponent},
    {path:'category/:id',component:CategoryComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
