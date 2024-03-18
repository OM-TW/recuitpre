import { Dispatch, ReactNode } from 'react';

export enum ActionType {
  Page = 'page',
  LoadingProcess = 'loadingProcess',
  Menu = 'menu',
}

export enum LoadingProcessType {
  Ball = 'balls',
  Bars = 'bars',
  Bubbles = 'bubbles',
  Cubes = 'cubes',
  Cylon = 'cylon',
  Spin = 'spin',
  SpinningBubbles = 'spinningBubbles',
  Spokes = 'spokes',
}

export enum TransitionType {
  Unset = 0,
  FadeIn = 1,
  FadeOut = 2,
  DidFadeIn = 3,
  DidFadeOut = 4,
  Loop = 5,
  Stop = 6,
}

export type TLoadingProcessState = {
  enabled: boolean;
  type: LoadingProcessType;
  body: '';
};

export type TMenuState = {
  enabled: boolean;
};

export interface IState {
  page?: string;
  loadingProcess?: TLoadingProcessState;
  menu?: TMenuState;
}

export interface IAction {
  type: ActionType;
  state: IState | Partial<TLoadingProcessState> | Partial<TMenuState>;
}

export type TContext = [IState, Dispatch<IAction>];

export interface IReactProps {
  readonly children?: ReactNode;
}
