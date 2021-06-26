import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { ClienRoutingModule } from './client-routing.module';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { BrandSlideComponent } from '../shared/brand-slide/brand-slide.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { OrderComponent } from './order/order.component';
import { HomeComponent } from './home/home.component';
import { ResultVnpayComponent } from './result-vnpay/result-vnpay.component';

@NgModule({
  declarations: [
    ClientComponent,
    HeaderComponent,
    FooterComponent,
    BrandSlideComponent,
    HomeComponent,
    CartComponent,
    CheckoutComponent,
    LoginRegisterComponent,
    OrderComponent,
    ResultVnpayComponent,

  ],
    imports: [
        CommonModule,
        ClienRoutingModule,
        FormsModule,
        SlickCarouselModule,
        NgxPaginationModule,
        ReactiveFormsModule,
    ]
})
export class ClientModule { }
