import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FilterType, IFilter, IApplyFilter } from '../IFilters';
import { IfObservable } from 'rxjs/observable/IfObservable';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Output() notifyside: EventEmitter<IApplyFilter> = new EventEmitter<IApplyFilter>();
  filter: IApplyFilter;
  filterList: IFilter [] = [
    {
      filterName: 'Manufacturer',
      filterType: FilterType.Manufacturer,
      filterValues: ['RRD', 'JP Australia', 'Starboard']
    },
    {
      filterName: 'Board Types',
      filterType: FilterType.BoardType,
      filterValues: ['Wave', 'Freestyle', 'Slalom']
    },
    {
      filterName: 'All',
      filterType: FilterType.None,
      filterValues: ['Clear Filter']
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  closeNav() {
    document.getElementById('mySidenav').style.width = '0px';
  }

  showNav() {
    document.getElementById('mySidenav').style.width = '200px';
  }

  filterClicked(filter: IFilter, filterValue: string) {
    this.notifyside.emit({
      filterType: filter.filterType,
      filterValue: filterValue
    });
  }

}
