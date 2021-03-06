export enum StateType {
    MainPanelOnly,
    MainPanelWithSideNav,
    DetailPanel,
    LoginPanel
}

export enum PanelType {
    Primary,
    Detail,
    OverlayPanel
}

export interface IState {
    getStateType(): StateType;
    getPanelType(): PanelType;
    isSideNavVisable(): boolean;
    getPanelButtonClass(): string;
    isLoginVisible(): boolean;
}

export class MainPanelOnly implements IState {
    getStateType(): StateType {
        return StateType.MainPanelOnly;
    }
    getPanelType(): PanelType {
        return PanelType.Primary;
    }

    getPanelButtonClass(): string {
        return 'anticon-right';
    }

    isSideNavVisable(): boolean {
        return false;
    }

    isLoginVisible(): boolean {
        return false;
    }
    constructor() {
    }
}

export class MainPanelWithSideNav implements IState {
    getStateType(): StateType {
        return StateType.MainPanelWithSideNav;
    }

    getPanelType(): PanelType {
        return PanelType.Primary;
    }

    getPanelButtonClass(): string {
        return 'anticon-left';
    }

    isSideNavVisable(): boolean {
        return true;
    }

    isLoginVisible(): boolean {
        return false;
    }
}

export class DetailPanel implements IState {
    getStateType(): StateType {
        return StateType.DetailPanel;
    }

    getPanelType(): PanelType {
        return PanelType.Detail;
    }

    getPanelButtonClass(): string {
        return '';
    }

    isSideNavVisable(): boolean {
        return false;
    }
    isLoginVisible(): boolean {
        return false;
    }
}

export class LoginPanel implements IState {
    getPanelType(): PanelType {
        return PanelType.OverlayPanel;
    }

    getStateType(): StateType {
        return StateType.LoginPanel;
    }

    getPanelButtonClass(): string {
        return '';
    }

    isLoginVisible(): boolean {
        return true;
    }

    isSideNavVisable(): boolean {
        return false;
    }
}
export interface IMediatorImpl {
    showNavPanel();
    hideNavPanel();
    showDetailPanel();
    hideDetailPanel();
    changeShowHideSideButton(fromclass: string, toclass: string);
    showLoginPanel(): void;
    hideLoginPanel(): void;
}

export class Mediator {
    private _mainPanelState = new MainPanelOnly();
    private _detailPanelState = new DetailPanel();
    private _sideNavState = new MainPanelWithSideNav();
    private _loginState = new LoginPanel();

    private _currentState: IState;
    private _currentMainPanelState: IState;
    private _mediatorImpl: IMediatorImpl;
    private _mainwindowState: IState;

    constructor(mediatorImpl: IMediatorImpl) {
        this._mediatorImpl = mediatorImpl;
        this._currentState = this._currentMainPanelState = this._sideNavState;
    }

    getStateImpl(stateType: StateType): IState {
        let stateImpl: IState;
        switch (stateType) {
            case StateType.DetailPanel:
                stateImpl = this._detailPanelState;
                break;
            case StateType.MainPanelOnly:
                stateImpl = this._mainPanelState;
                break;
            case StateType.MainPanelWithSideNav:
                stateImpl = this._sideNavState;
                break;
            case StateType.LoginPanel:
                stateImpl = this._loginState;
        }
        return stateImpl;
    }

    moveToState(stateType: StateType): void {
        const previousState = this._currentState;
        const nextState = this.getStateImpl(stateType);

        if (previousState.getPanelType() === PanelType.Primary && nextState.getPanelType() === PanelType.Detail) {
            this._mediatorImpl.showDetailPanel();
        }

        if (previousState.getPanelType() === PanelType.Detail && nextState.getPanelType() === PanelType.Primary) {
            this._mediatorImpl.hideDetailPanel();
        }

        if (nextState.isSideNavVisable()) {
            this._mediatorImpl.showNavPanel();
        } else {
            this._mediatorImpl.hideNavPanel();
        }

        if (nextState.isLoginVisible()) {
            this._mediatorImpl.showLoginPanel();
            this._mainwindowState = previousState;
        } else {
            this._mediatorImpl.hideLoginPanel();
        }

        this._mediatorImpl.changeShowHideSideButton(
            previousState.getPanelButtonClass(),
            nextState.getPanelButtonClass());

        this._currentState = nextState;

        if (this._currentState.getPanelType() === PanelType.Primary) {
            this._currentMainPanelState = this._currentState;
        }

    }

    getCurrentMainPanelState(): StateType {
        return this._currentMainPanelState.getStateType();
    }

    getCurrentMainWindowState(): StateType {
        return this._mainwindowState.getStateType();
    }

    showHideSideNavClicked() {
        switch (this._currentState.getStateType()) {
            case StateType.MainPanelWithSideNav:
                this.moveToState(StateType.MainPanelOnly);
                break;
            case StateType.MainPanelOnly:
                this.moveToState(StateType.MainPanelWithSideNav);
                break;
        }
    }
}
