import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { SidenavComponent } from './sidenav.component';

describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavComponent ],
      imports: [NgZorroAntdModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // 测试组件类中的方法：closeNav 是否被调用
  it('should spyOn function closeNav', () => {
    const classInstance = new SidenavComponent();
    const testcloseNavSpy = spyOn(classInstance, 'closeNav');

    classInstance.closeNav();
    expect(testcloseNavSpy).toHaveBeenCalled();
  });

  // 测试组件类中的方法：showNav 是否被调用
  it('should spyOn function showNav', () => {
    const classInstance = new SidenavComponent();
    const testcloseNavSpy = spyOn(classInstance, 'showNav');

    classInstance.showNav();
    expect(testcloseNavSpy).toHaveBeenCalled();
  });

});
