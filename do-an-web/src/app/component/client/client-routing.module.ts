import { ResultVnpayComponent } from './result-vnpay/result-vnpay.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CartComponent } from "./cart/cart.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { ClientComponent } from './client.component';
import { HomeComponent } from './home/home.component';
import { LoginRegisterComponent } from "./login-register/login-register.component";
import {OrderComponent} from './order/order.component';

const routes: Routes = [
    {path: '', component: ClientComponent, children: [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'login-register', component: LoginRegisterComponent},
    {path: 'checkout', component: CheckoutComponent},
    {path: 'cart', component: CartComponent}, { path: 'order', component: OrderComponent},
    {path: 'products', loadChildren: () => import('../products/products.module').then(m => m.ProductsModule)},
    {path: 'result-checkout', component: ResultVnpayComponent},
  ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienRoutingModule {}
