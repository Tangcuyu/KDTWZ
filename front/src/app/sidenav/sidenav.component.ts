import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Output() notifyside: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  closesideClicked() {
    this.notifyside.emit('Click from sidenav component');
  }

  closeNav() {
    document.getElementById('mySidenav').style.width = '0px';
  }

  showNav() {
    document.getElementById('mySidenav').style.width = '200px';
  }

}
