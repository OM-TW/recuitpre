import { createContext } from 'react';
import { PAGE } from './config';
import {
  ActionType,
  IAction,
  IState,
  LoadingProcessType,
  TAlert,
  TContext,
  TLoadingProcessState,
  TMenuState,
} from './type';

export const LoadingProcessState: TLoadingProcessState = {
  enabled: true,
  type: LoadingProcessType.Spokes,
  body: '',
};

export const MenuState: TMenuState = {
  enabled: false,
};

export const AlertState: TAlert = {
  enabled: false,
};

export const NewsState = {
  enabled: false,
  html: '',
};

export const InitialState: IState = {
  [ActionType.Page]: PAGE.home,
  [ActionType.LoadingProcess]: LoadingProcessState,
  [ActionType.Menu]: MenuState,
  [ActionType.Alert]: AlertState,
  [ActionType.News]: NewsState,
  [ActionType.Api]: null,
};

export const Context = createContext<TContext>([InitialState, () => {}]);
export const Reducer = (state: IState, action: IAction): IState => {
  if (action.state instanceof Object) {
    let stateStorage: { [key: string]: any } = {};
    Object.entries(action.state)
      .filter((actionState) => {
        const value = Object.values(ActionType).filter(
          (actionValue) => actionValue === actionState[0],
        );
        if (value.length > 0 || action.type) return true;
        return false;
      })
      .map((actionState) => {
        const value = Object.values(ActionType).filter(
          (actionValue) => actionValue === actionState[0],
        );
        if (value.length > 0) return actionState;
        return [action.type, Object.fromEntries([actionState])];
      })
      .forEach((actionState) => {
        if (actionState) {
          const [key, value] = actionState;
          const stringKey = String(key);
          const cloneVale = Object.fromEntries(
            Object.entries(state).filter((stateValue) => stateValue[0] === stringKey),
          )[action.type];
          if (Object.prototype.hasOwnProperty.call(stateStorage, stringKey)) {
            stateStorage = {
              [stringKey]: { ...stateStorage[stringKey], ...value },
            };
          } else stateStorage = { [stringKey]: { ...cloneVale, ...value } };
        }
      });
    return { ...state, ...stateStorage };
  }
  if (action.type) return { ...state, [action.type]: action.state };
  return state;
};
