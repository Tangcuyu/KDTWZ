import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { RightscreenComponent } from './rightscreen.component';

describe('RightscreenComponent', () => {
  let component: RightscreenComponent;
  let fixture: ComponentFixture<RightscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call closeClicked, closeRightWindow, openRightWindow', () => {
    const classInstance = new RightscreenComponent();
    const testcloseClicked = spyOn(classInstance, 'closeClicked');
    const testcloseRightWindow = spyOn(classInstance, 'closeRightWindow');
    const testopenRightWindow = spyOn(classInstance, 'openRightWindow');

    classInstance.closeClicked();
    classInstance.closeRightWindow();
    classInstance.openRightWindow();

    expect(testcloseClicked).toHaveBeenCalled();
    expect(testcloseRightWindow).toHaveBeenCalled();
    expect(testopenRightWindow).toHaveBeenCalled();
  });
});
