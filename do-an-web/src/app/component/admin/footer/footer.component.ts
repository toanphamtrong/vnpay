import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footeradmin',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponentAdmin implements OnInit {
  public date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
