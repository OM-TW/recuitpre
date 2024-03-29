import { Dispatch, ReactNode } from 'react';
import { fullpageApi } from '@fullpage/react-fullpage';

export enum ActionType {
  Page = 'page',
  LoadingProcess = 'loadingProcess',
  Menu = 'menu',
  Alert = 'alert',
  Api = 'api',
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

export type TFullPageAPI = fullpageApi | null;

export type TLoadingProcessState = {
  enabled: boolean;
  type: LoadingProcessType;
  body: '';
};

export type TMenuState = {
  enabled: boolean;
};

export type TAlert = {
  enabled: boolean;
};

export interface IState {
  page?: string;
  loadingProcess?: TLoadingProcessState;
  menu?: TMenuState;
  alert?: TAlert;
  api?: TFullPageAPI;
}

export interface IAction {
  type: ActionType;
  state:
    | IState
    | Partial<TLoadingProcessState>
    | Partial<TMenuState>
    | Partial<TAlert>
    | Partial<TFullPageAPI>;
}

export type TContext = [IState, Dispatch<IAction>];

export interface IReactProps {
  readonly children?: ReactNode;
}
