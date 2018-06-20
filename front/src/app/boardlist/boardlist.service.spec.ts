import { TestBed, inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BoardlistService } from './boardlist.service';
import { IManufacturer } from '../IBoardList';


describe('HttpClient testing', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoardlistService],
      imports: [HttpClientTestingModule]
    });

    // Inject the http service and test controller for each test
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });
  /// Tests begin ///
  it('boardlistService should get data', inject([BoardlistService], (service: BoardlistService) => {
    const testData: IManufacturer = { manufacturer: 'Test Data', manufacturer_logo: 'Test Logo' };

    // Make an HTTP GET request
    httpClient.get<IManufacturer>('/boards')
      .subscribe(data =>
        // When observable resolves, result should match test data
        expect(data).toEqual(testData)
      );
  }));
});
