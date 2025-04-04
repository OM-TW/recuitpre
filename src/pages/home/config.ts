import { createContext, Dispatch, SetStateAction } from 'react';

export const HomePages = [
  { page: 'landing', name: '首頁' },
  { page: 'introduction', name: '計畫介紹' },
  { page: 'values', name: '五大珍奇異獸​' },
  { page: 'position', name: '招募職位' },
  { page: 'process', name: '申請流程' },
  { page: 'exclusive', name: '新人才來專屬' },
  { page: 'footer', name: '尾頁' },
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

const error = console.error;
console.error = (...args: any) => {
  if (/fullPage/.test(args[0])) return;
  error(...args);
};
