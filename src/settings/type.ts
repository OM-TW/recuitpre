import { Dispatch, ReactNode } from 'react';
import { fullpageApi } from '@fullpage/react-fullpage';

export enum ActionType {
  Page = 'page',
  LoadingProcess = 'loadingProcess',
  Menu = 'menu',
  Alert = 'alert',
  Api = 'api',
  News = 'news',
  Info = 'info',
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

export type TNewsState = {
  enabled?: boolean;
  html?: string;
};

export type HomeInfo = {
  contacts: string;
  linkURL: string;
  schedule: string;
};

export interface IState {
  page?: string;
  loadingProcess?: TLoadingProcessState;
  menu?: TMenuState;
  alert?: TAlert;
  api?: TFullPageAPI;
  news?: TNewsState;
  info?: HomeInfo;
}

export interface IAction {
  type: ActionType;
  state: IState | TLoadingProcessState | TMenuState | TAlert | TNewsState | TFullPageAPI | HomeInfo;
}

export type TContext = [IState, Dispatch<IAction>];

export interface IReactProps {
  readonly children?: ReactNode;
}

export type TType = {
  html: string;
  timestamp: number;
};

export type TRespond = {
  res: boolean;
  msg: string;
  collection: string;
  data: TType[];
};

export type TInfo = {
  contacts: string;
  linkURL: string;
  schedule: string;
};

export type TInfoRespond = {
  res: boolean;
  msg: string;
  collection: string;
  data: TInfo[];
};
