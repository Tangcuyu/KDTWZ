import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IManufacturer } from '../IBoardList';

@Injectable()
export class BoardlistService {

  private listUrl = '/boards';

  constructor(private http: HttpClient) { }

  getBoardList() {
    return this.http.get<IManufacturer[]>(this.listUrl);
  }
}
