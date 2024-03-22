import { ReactNode } from 'react';
import { createContext, Dispatch, SetStateAction } from 'react';
import Flow from './flow';

export type TProcessState = { index: number | null };
export type TProcessContext = [TProcessState, Dispatch<SetStateAction<TProcessState>>];

export const ProcessState: TProcessState = { index: null };
export const ProcessContext = createContext<TProcessContext>([ProcessState, () => {}]);

export const ProcessRoadMap = [
  1, 2, 3, 4, 5, 6, 18, 30, 31, 32, 33, 34, 35, 36, 48, 60, 72, 84, 83, 82, 81, 80, 79, 78, 77, 76,
  64, 52, 40, 39, 38, 50, 62, 74, 86, 98, 110, 122, 123, 124, 125, 126, 127, 128, 116, 104, 105,
  106, 107, 108, 120, 132, 144, 156, 168, 167, 166, 165, 164, 163, 162, 161, 160, 159,
];

export const FlowData = [
  {
    sup: '',
    title: '遊戲開始​',
    subtitle: '2024/4/1 – 4/30 網路報名開跑',
    symbols: 'symbols-0',
    body: ['​交出你的履歷，讓我們認識你', '告訴我們：為什麼你認為自己是奧美在找的珍奇異獸？​'],
  },
  {
    sup: '關卡一:',
    title: '筆試與座談:',
    subtitle: '2024/5/11 筆試與座談',
    symbols: 'symbols-1',
    body: ['當天設有座談會讓高級玩家為你解惑，​', '同時會進行筆試，秀出你的不同，從下筆開始！​'],
  },
  {
    sup: '關卡二:',
    title: '團體面試​:',
    subtitle: '2024/5/15-5/24 團體面試',
    symbols: 'symbols-2',
    body: ['這是個好機會，可以在團體內展現出你的與眾不同​！'],
  },
  {
    sup: '關卡三:',
    title: '終極面試​​:',
    subtitle: '2024/5/22-5/31 終極面試​',
    symbols: 'symbols-2',
    body: ['萬中選一的珍奇異獸才能來到這裡!'],
  },
  {
    sup: '',
    title: '獲得入場券​​​​:',
    subtitle: '2024/06/03 公布錄取名單​',
    symbols: 'symbols-3',
    body: ['嘿，你是最閃耀的珍奇異獸。'],
  },
  {
    sup: '',
    title: '進入遊樂場​:',
    subtitle: '2024/07/01 新人到職​',
    symbols: 'symbols-3',
    body: ['闖關的終點，是奧美遊樂場的起點。​'],
  },
];

export const ProcessRoadMapProperty: { [key: string]: { className: string; body: ReactNode } } = {
  '1': { className: 'start', body: 'game start' },
  '4': { className: 'step1', body: <Flow data={FlowData[0]} index={0} /> },
  '32': { className: 'step2', body: <Flow data={FlowData[1]} index={1} /> },
  '78': { className: 'step3', body: <Flow data={FlowData[2]} index={2} /> },
  '98': { className: 'step4', body: <Flow data={FlowData[3]} index={3} /> },
  '128': { className: 'step5', body: <Flow data={FlowData[4]} index={4} /> },
  '161': { className: 'step6', body: <Flow data={FlowData[5]} index={5} /> },
  '159': { className: 'end', body: '' },
};
