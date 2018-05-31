import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-rightscreen',
  templateUrl: './rightscreen.component.html',
  styleUrls: ['./rightscreen.component.css']
})
export class RightscreenComponent implements OnInit {

  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  closeClicked() {
    this.notify.emit('Click from rightscreen component');
  }

  closeRightWindow() {
    document.getElementById('myRightScreen').style.transform = 'translateX(100%)';
  }

  openRightWindow() {
    document.getElementById('myRightScreen').style.transform = 'translateX(0%)';
  }

  constructor() { }

  ngOnInit() {
  }
}
