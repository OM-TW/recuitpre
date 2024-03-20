import { createContext, Dispatch, SetStateAction } from 'react';

export const HomePages = [
  { page: 'landing', name: '首頁' },
  { page: 'introduction', name: '計畫介紹' },
  { page: 'values', name: '五大珍奇異獸​' },
  { page: 'position', name: '招募職位' },
];

export enum HomeStepType {
  unset,
  loaded,
  fontLoaded,
}
export type THomeState = {
  step: HomeStepType;
};
export type THomeContext = [THomeState, Dispatch<SetStateAction<THomeState>>];

export const HomeState: THomeState = {
  step: HomeStepType.unset,
};
export const HomeContext = createContext<THomeContext>([HomeState, () => {}]);
