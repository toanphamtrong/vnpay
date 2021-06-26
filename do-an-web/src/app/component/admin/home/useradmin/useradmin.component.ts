import { Component, OnInit } from '@angular/core';
import { SeachForm } from 'src/app/model/seach';
import { SharedDataService } from 'src/app/service/shared-data.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-useradmin',
  templateUrl: './useradmin.component.html',
  styleUrls: ['./useradmin.component.css']
})
export class UseradminComponent implements OnInit {
  p=1;
  seachFrom: SeachForm = new SeachForm();
  users: any;
  constructor(
    private userService: UserService,
    public sharedDataService: SharedDataService,

  ) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  public loadUsers(){
    this.userService.getAllUser().subscribe(data =>
      {
        this.sharedDataService.productList = data
      },
      error => console.log(error))
  }

  public deleteUser(id : any): void{

  }
  public timkiem(): void{

  }
  public addUser(): void{

  }
  public editUser(id: any):void{

  }

}
