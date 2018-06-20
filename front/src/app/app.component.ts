import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RightscreenComponent } from './rightscreen/rightscreen.component';
import { BoardlistComponent } from './boardlist/boardlist.component';
import { IMediatorImpl, StateType, Mediator } from './state.mediator';
import { LoginComponent } from './login/login.component';
import { IBoardListItem } from './IBoardList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements IMediatorImpl, AfterViewInit {
  title = 'Select an option:';
  @ViewChild(NavbarComponent)
  private navbar: NavbarComponent;

  @ViewChild(SidenavComponent)
  private sidenav: SidenavComponent;

  @ViewChild(RightscreenComponent)
  private rightscreen: RightscreenComponent;

  @ViewChild(BoardlistComponent)
  private boardList: BoardlistComponent;

  @ViewChild(LoginComponent)
  private loginpanel: LoginComponent;

  mediator: Mediator = new Mediator(this);
  ngAfterViewInit() {
    this.mediator.moveToState(StateType.MainPanelWithSideNav);
  }

  showNavPanel() {
    this.sidenav.showNav();
    document.getElementById('main').style.marginLeft = '200px';
  }
  hideNavPanel() {
    this.sidenav.closeNav();
    document.getElementById('main').style.marginLeft = '0px';
  }
  showDetailPanel() {
    this.rightscreen.openRightWindow();
    document.getElementById('main').style.transform = 'translateX(-100%)';
  }
  hideDetailPanel() {
    this.rightscreen.closeRightWindow();
    document.getElementById('main').style.transform = 'translateX(0%)';
  }
  changeShowHideSideButton(fromclass: string, toclass: string) {
    // console.log(`from: ${fromclass}, to: ${toclass}`);
    // console.log(document.getElementById('show-hide-side-button').classList);
    if (fromclass.length > 0 && toclass.length > 0) {
      document.getElementById('show-hide-side-button').classList.remove(fromclass);
      document.getElementById('show-hide-side-button').classList.add(toclass);
    }
  }
  showLoginPanel() {
    return '';
  }

  hideLoginPanel() {
    return '';
  }

  buttonClickedDetail() {
    this.mediator.moveToState(StateType.DetailPanel);
  }

  onNotifyRightWindow(message: string): void {
    this.mediator.moveToState(
      this.mediator.getCurrentMainPanelState());
  }

  onNotifyBoardList(board: IBoardListItem): void {
    // console.log(board);
    this.rightscreen.board = board;
    this.mediator.moveToState(StateType.DetailPanel);
  }

  showHideSideClicked(): void {
    this.mediator.showHideSideNavClicked();
  }

}
