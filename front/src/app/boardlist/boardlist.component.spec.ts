import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BoardlistService } from './boardlist.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { BoardlistComponent } from './boardlist.component';

describe('BoardListComponent', () => {
  let component: BoardlistComponent;
  let fixture: ComponentFixture<BoardlistComponent>;
  let httpClient: HttpClient;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BoardlistComponent],
      providers: [
        HttpClient,
        BoardlistService
      ],
      imports: [
        HttpClientTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    httpClient = TestBed.get(HttpClient);
    fixture = TestBed.createComponent(BoardlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
