import { Component, OnInit, Injectable, EventEmitter, Output } from '@angular/core';
import { IBoardListItem, IManufacturer } from '../IBoardList';
import { BoardlistService } from './boardlist.service';
import { IApplyFilter, FilterType } from '../IFilters';


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

  applyFilter( filter: IApplyFilter) {
    this.currentList = new Array();
    if (filter.filterType === FilterType.Manufacturer) {
      for (const manuf of this.manufacturerList) {
        if (manuf.manufacturer === filter.filterValue) {
          this.currentList.push(manuf);
        }
      }
    }
    if (filter.filterType === FilterType.BoardType) {
      for (const manuf of this.manufacturerList) {
        const currentManuf: IManufacturer = {
          manufacturer: manuf.manufacturer,
          manufacturer_logo: manuf.manufacturer_logo
        };
        currentManuf.boards = new Array();
        let boardFound = false;
        for (const board of manuf.boards) {
          for (const boardtype of board.board_types ) {
            // console.log(`boardtype: ${boardtype.board_type} filtervalue: ${filter.filterValue}`);
            if (boardtype.board_type === filter.filterValue) {
              boardFound = true;
              currentManuf.boards.push(board);
            }
          }
        }
        if (boardFound) {
          this.currentList.push(currentManuf);
        }
      }
    }
    if (filter.filterType === FilterType.None) {
      this.currentList = this.manufacturerList;
    }
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
