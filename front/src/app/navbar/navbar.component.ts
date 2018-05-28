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
    { ButtonName: 'About'},
    { ButtonName: 'Contact'},
    { ButtonName: 'Login'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
