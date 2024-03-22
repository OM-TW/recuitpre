import Article from '@/components/article';
import { memo } from 'react';
import Div100vh from 'react-div-100vh';
import './index.less';
import Block from '@/components/block';

const Introduction = memo(() => (
  <Div100vh id='introduction' className='Introduction'>
    <Article>
      <Block>
        <h3>introduction</h3>
        <div className='w-full text-center pt-8'>
          <h1>什麼是『 奧美新人才來計劃 』？</h1>
          <p>
            這是奧美集團打造的徵才計畫，
            <br />
            專為無經驗、對行銷充滿熱情、信仰創意，想玩廣告的新鮮人而設。
          </p>
          <p>
            在這個充滿驚喜與挑戰的旅程中，
            <br />
            我們正在尋找身懷絕技的珍奇異獸，
            <br />
            你將有機會在廣告的世界裡發掘創意、影響世界，
            <br />
            在奧美這座遊樂場中找到屬於你/妳的位置！
          </p>
        </div>
      </Block>
    </Article>
  </Div100vh>
));
export default Introduction;
