import { createContext, Dispatch, SetStateAction } from 'react';

export type TPositionState = { index: number };
export type TPositionContext = [TPositionState, Dispatch<SetStateAction<TPositionState>>];

export const PositionState: TPositionState = { index: 0 };
export const PositionContext = createContext<TPositionContext>([PositionState, () => {}]);

export const PositionDialogContent = [
  {
    title: '在奧美DNA的驅動下，廣告就是你的遊樂場！',
    body: [
      {
        headline: '如果說',
        content: [
          '尋找寶藏是遊戲的終點，那麼你的任務就是找到打開寶箱的密碼。',
          '​這是場解謎遊戲，你必須擅長整合資源、尋找渠道，用策略找到問題、用創意找到解方。​',
        ],
      },
      {
        headline: '如果說',
        content: [
          '尋得寶藏的路不只一條，那麼你就是帶領大家探索新道路的領頭羊。',
          '​這是場冒險遊戲，你必須分析數據、觀察趨勢，整合線上與線下，為品牌吸引關注，創造新的可能性。​',
        ],
      },
      {
        headline: '如果說',
        content: [
          '尋寶是你航行的唯一目標，那麼你的字典裡沒有「不可能」三個字。',
          '這是場格鬥遊戲，你掌握專案管理與全方位策畫，在客戶、創意、策略、市場、消費者找到致勝的關鍵。​',
        ],
      },
      {
        headline: '加入奧美，遊戲即將開始。',
        content: [
          '運用我們的專業資源及知識創意，影響台灣、影響世界的每一個角落，​',
          '玩出你的與眾不同，你，就是廣告的超級製作人！',
        ],
      },
    ],
  },
  {
    title: '在奧美DNA的驅動下，公關是場展現魅力的華麗遊戲。',
    body: [
      {
        headline: '你必須感官敏銳',
        content: [
          '從新聞監測、新聞稿撰寫、議題操作、產業觀察，甚至危機處理，​',
          '在產業中嗅到機會，從媒體中看見曙光，這些都是找到出口的魔法。',
        ],
      },
      {
        headline: '你必須手腳靈活',
        content: [
          '從品牌形象管理、利害關係人經營，到媒體活動規劃、論壇舉辦，​',
          '開啟「溝通」的渠道，是遊戲中最重要的任務。',
        ],
      },
      {
        headline: '你必須全心無懼',
        content: [
          '文字力好、企劃力高、機動性強是你強勢領先的力量，​',
          '勇於接受挑戰、和夥伴一同冒險，讓品牌發光、讓企業發亮！',
        ],
      },
      {
        headline: '你願意撐起奧美的旗，一起投入這場遊戲嗎？',
        content: [
          '影響有影響力的人，哪裡有風，就朝哪裡前進。​',
          '玩出你的影響力，你，就是品牌的最強發言人！​',
        ],
      },
    ],
  },
];
