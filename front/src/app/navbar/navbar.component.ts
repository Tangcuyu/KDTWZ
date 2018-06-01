import { Component, OnInit, Injectable } from '@angular/core';

interface IButtonName {
  ButtonName: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
@Injectable()
export class NavbarComponent implements OnInit {

  menuItems: IButtonName [] = [
    { ButtonName: '物资采购管理'},
    { ButtonName: 'Contact'},
    { ButtonName: 'Blog' },
    { ButtonName: 'Email' },
    { ButtonName: 'Login'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
