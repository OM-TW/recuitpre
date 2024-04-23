import { createContext, Dispatch, SetStateAction } from 'react';
import Swiper from 'swiper';

export type TValuesState = { index: number; swiper: Swiper | null };
export type TValuesContext = [TValuesState, Dispatch<SetStateAction<TValuesState>>];

export const ValuesState: TValuesState = { index: 0, swiper: null };
export const ValuesContext = createContext<TValuesContext>([ValuesState, () => {}]);

export const ValuesCarousels = [
  {
    name: '千面蜥',
    brief: '奧美DNA「創意無所不在」流淌於牠的血液。',
    description:
      '牠清楚創意可以來自任何地方，並將自身融入其中。嘗試各種玩法、投入各種遊戲，千面蜥擁有一顆開放的心，勇敢去玩、放膽去闖！​',
  },
  {
    name: '進化螢',
    brief: '奧美DNA「永不自滿」流淌於牠的血液 。',
    description:
      '牠不甘於現狀，不斷進化，「還能做得更好嗎？」是牠持續探索的問句。牠蒐集、牠蓄力，讓作品照亮世界是進化螢的使命。廣告界的高級玩家，都是這樣磨出來的。​',
  },
  {
    name: '不朽鴞',
    brief: '奧美DNA「追求不朽」流淌於牠的血液。',
    description:
      '牠用著銳利的雙眼，360度反覆環視，不放過一丁點能讓作品更出色的可能。抓準細節，並主動出擊。不朽鴞大膽卻細心的玩法，使勝利往往出其不意。​',
  },
  {
    name: '王者獅',
    brief: '奧美DNA「因兼容而強大」流淌於牠的血液。',
    description:
      '牠以無比寬闊的心胸，看待森林內生機蓬勃的萬物，清楚每種才華皆獨特而珍貴，使王國得以強壯。牠深信冠軍是共享的，引領隊友奪勝是王者獅的唯一目標。',
  },
  {
    name: '好奇狐',
    brief: '奧美DNA「好奇下去」流淌於牠的血液。',
    description:
      '對於將問題探究到底，牠有著無比的執著與渴望，為了挖掘偉大的洞察，牠窮盡一切可能找到答案。好奇狐擅長益智遊戲，深信沒有解不開的謎題，只有願不願意堅持下去。​',
  },
];
