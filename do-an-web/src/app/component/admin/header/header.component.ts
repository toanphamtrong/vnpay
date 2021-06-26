import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headeradmin',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponentAdmin implements OnInit {
  isAdmin: any;
  username: any;
  name: any;
  code: any;
  isLogin: boolean | undefined;
  constructor(private router: Router,) {

    this.username = localStorage.getItem("username");
    this.isAdmin = localStorage.getItem("isAdmin");
    this.name = localStorage.getItem("name");
    this.code = localStorage.getItem("code")
    console.log(this.isAdmin);
    console.log(this.code);
    if(this.username != null && localStorage.getItem('token')!=null){
      this.isLogin = true;
      //đã đăn nhập
    }
    else{
      this.isLogin = false;
    }
  }


  ngOnInit(): void {
  }
  public logout(): void {
    localStorage.clear();
    this.isLogin = false;
    window.location.reload();
  }
  public sidebarToggle(){

  }
}
