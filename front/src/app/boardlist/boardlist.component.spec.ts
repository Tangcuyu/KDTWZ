import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { BoardlistComponent } from './boardlist.component';
import { IManufacturer } from '../IBoardList';

describe('BoardlistComponent', () => {
  let component: BoardlistComponent;
  let fixture: ComponentFixture<BoardlistComponent>;

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardlistComponent ],
      imports: [HttpClientTestingModule, HttpClientModule],
    })
    .compileComponents();

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(httpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('can test HttpClient.get', () => {
    const req = httpTestingController.expectOne('/boards');
    expect(req.request.method).toEqual('GET');
    expect(component.manufacturerList).toBeDefined();
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });
});
