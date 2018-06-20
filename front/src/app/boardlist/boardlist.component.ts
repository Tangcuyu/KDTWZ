import { Component, OnInit, Injectable, EventEmitter, Output } from '@angular/core';
import { IBoardListItem, IManufacturer } from '../IBoardList';
import { BoardlistService } from './boardlist.service';


@Component({
  selector: 'app-boardlist',
  providers: [BoardlistService],
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
   // console.log(`board: ${board.name}`);
    this.notify.emit(board);
  }

  constructor(private boardListService: BoardlistService) {
    // console.log(`BordListCompnent constructor`);
    this.boardListService.getBoardList().subscribe(
      (data: IManufacturer[]) => {
        this.manufacturerList = this.currentList = data;
       // console.log(this.manufacturerList);
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
