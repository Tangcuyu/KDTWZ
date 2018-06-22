import { Component, OnInit, Injectable, EventEmitter, Output } from '@angular/core';

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
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

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

  navClicked(item: IButtonName) {
    // console.log(`item clicked: ${item.ButtonName}`);
    this.notify.emit(`${item.ButtonName}`);
  }
}
