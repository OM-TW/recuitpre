import Article from '@/components/article';
import Block from '@/components/block';
import Button from '@/components/button';
import { memo, useContext, useState } from 'react';
import Div100vh from 'react-div-100vh';
import { twMerge } from 'tailwind-merge';
import Carousel from './carousel';
import { ValuesCarousels, ValuesContext, ValuesState } from './config';
import './index.less';

const Prev = memo(() => {
  const [state] = useContext(ValuesContext);

  return (
    <div className={twMerge('prev', state.index === 0 ? 'invisible' : 'visible')}>
      <div className={twMerge('icon', `ico-${state.index - 1}`)} />
      <Button className='btn-group-prev' onClick={() => state.swiper?.slidePrev()}>
        <div className='btn'>
          <div />
          <div />
        </div>
      </Button>
    </div>
  );
});

const Next = memo(() => {
  const [state] = useContext(ValuesContext);
  return (
    <div
      className={twMerge(
        'next',
        state.index === ValuesCarousels.length - 1 ? 'invisible' : 'visible',
      )}
    >
      <Button className='btn-group-next' onClick={() => state.swiper?.slideNext()}>
        <div className='btn'>
          <div />
          <div />
        </div>
      </Button>
      <div className={twMerge('icon', `ico-${state.index + 1}`)} />
    </div>
  );
});

const Values = memo(() => {
  const value = useState(ValuesState);

  return (
    <div className='section'>
      <ValuesContext.Provider value={value}>
        <Div100vh className='Values'>
          <Article>
            <Block>
              <h3>Ogilvy Values</h3>
              <div className='flex w-full flex-row items-baseline'>
                <h1>玩家招募！</h1>
                <span>帶有奧美DNA的五大珍奇異獸</span>
              </div>
              <div className='w-full pt-8'>
                <Carousel />
              </div>
            </Block>
            <div className='absolute bottom-0 flex w-full flex-row items-center justify-between p-10'>
              <Prev />
              <Next />
            </div>
          </Article>
        </Div100vh>
      </ValuesContext.Provider>
    </div>
  );
});
export default Values;
