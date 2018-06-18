import { Component, OnInit, Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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

  constructor(private http: HttpClient) {
    console.log(`BordListCompnent constructor`);
    this.http.get('/boards').subscribe(
      (data: IManufacturer) => {
        this.manufacturerList = this.currentList = [data];
        console.log(this.currentList);
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
