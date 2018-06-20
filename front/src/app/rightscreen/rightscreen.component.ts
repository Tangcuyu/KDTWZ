import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { IBoardListItem } from '../IBoardList';

@Component({
  selector: 'app-rightscreen',
  templateUrl: './rightscreen.component.html',
  styleUrls: ['./rightscreen.component.css']
})
export class RightscreenComponent implements OnInit {

  board: IBoardListItem = {
    name: 'no board selected',
    image: 'jp_windsurf_radicalquad_ov.png',
    manufacturer_logo: 'jp_australia_logo.png'
  };

  @Output() notifyRight: EventEmitter<string> = new EventEmitter<string>();

  closeClicked() {
    this.notifyRight.emit('Click from rightscreen component');
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
