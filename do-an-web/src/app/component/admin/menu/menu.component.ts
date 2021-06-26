import { Component, OnInit } from '@angular/core';
declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
    { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
    { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];
@Component({
  selector: 'app-menuadmin',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponentAdmin implements OnInit {

  isAdmin: any;
  username: any;
  name: any;
  code: any;
  kiemtracode: boolean| undefined;
  isLogin: boolean | undefined;
  menuItems: any[] | undefined;
  constructor() {
    this.username = localStorage.getItem('username');
    this.isAdmin = localStorage.getItem('isAdmin');
    this.name = localStorage.getItem("name");
    this.code = localStorage.getItem("code"); // này nó trả ra string nhé
    //kiểm tra đăng nhập
    if (this.username != null && localStorage.getItem('token')){

        this.isLogin = true;

    }
    else {
      this.isLogin = false;
    }

    // kiểm tra nhân viên, khi true thì nó là admin(0-Khách 1-Nhân viên 2-Admin)
     if(this.code === '2' && this.isAdmin === 'true') // đay là or mà cha nội @@
     {
       this.kiemtracode = true;

     }
     else{
       this.kiemtracode = false;
     }
  }


  ngOnInit(): void {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
        return false;
    }
    return true;
};
}
