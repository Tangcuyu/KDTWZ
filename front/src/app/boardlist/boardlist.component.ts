import { Component, OnInit, Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBoardListItem, IBoardSizeItem, IBoardType, IManufacturer } from '../IBoardList';


@Component({
  selector: 'app-boardlist',
  templateUrl: './boardlist.component.html',
  styleUrls: ['./boardlist.component.css']
})
@Injectable()
export class BoardlistComponent implements OnInit {
  manufacturerList: IManufacturer [];
  currentList: IManufacturer [];
  jsonResponse: IManufacturer;

  @Output() notify: EventEmitter<IBoardListItem> = new EventEmitter<IBoardListItem>();

  boardClicked(board: IBoardListItem) {
    console.log(`board: ${board.name}`);
    this.notify.emit(board);
  }

  constructor(private http: HttpClient) {
    // console.log(`BordListCompnent constructor`);
    this.http.get<IManufacturer[]>('/boards').subscribe(
      (data: IManufacturer[]) => {
        this.manufacturerList = this.currentList = data;
        console.log(this.manufacturerList);
      },
      error => {
        console.log(`error: ${error}`);
      },
      () => {
        console.log(`success`);
      }
    );
  }

  ngOnInit() {
  }

}
