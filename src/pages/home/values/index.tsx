import Article from '@/components/article';
import Button from '@/components/button';
import { memo, useContext, useState } from 'react';
import Div100vh from 'react-div-100vh';
import { twMerge } from 'tailwind-merge';
import Carousel from './carousel';
import { ValuesCarousels, ValuesContext, ValuesState } from './config';
import './index.less';
import Block from '@/components/block';

const Prev = memo(() => {
  const [state, setState] = useContext(ValuesContext);

  return (
    <div className={twMerge('prev', state.index === 0 ? 'invisible' : 'visible')}>
      <div className={twMerge('icon', `ico-${state.index - 1}`)} />
      <Button
        className='btn-group-prev'
        onClick={() => {
          setState((S) => ({ ...S, index: Math.max(S.index - 1, 0) }));
        }}
      >
        <div className='btn'>
          <div />
          <div />
        </div>
      </Button>
    </div>
  );
});

const Next = memo(() => {
  const [state, setState] = useContext(ValuesContext);
  return (
    <div
      className={twMerge(
        'next',
        state.index === ValuesCarousels.length - 1 ? 'invisible' : 'visible',
      )}
    >
      <Button
        className='btn-group-next'
        onClick={() => {
          setState((S) => ({ ...S, index: Math.min(S.index + 1, ValuesCarousels.length - 1) }));
        }}
      >
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
        <Div100vh id='values' className='Values'>
          <Article>
            <Block>
              <h3>Ogilvy Values</h3>
              <div className='w-full flex flex-row items-baseline'>
                <h1>玩家招募！</h1>
                <span>帶有奧美DNA的五大珍奇異獸</span>
              </div>
              <div className='w-full pt-8'>
                <Carousel />
              </div>
            </Block>
            <div className='p-10 absolute bottom-0 w-full flex flex-row justify-between items-center'>
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
