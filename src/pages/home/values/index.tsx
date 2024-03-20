import Article from '@/components/article';
import Button from '@/components/button';
import { memo, useContext, useState } from 'react';
import Div100vh from 'react-div-100vh';
import { twMerge } from 'tailwind-merge';
import Carousel from './carousel';
import { ValuesCarousels, ValuesContext, ValuesState } from './config';
import './index.less';

const Prev = memo(() => {
  const [state, setState] = useContext(ValuesContext);

  return (
    <div className={twMerge('prev', state.index === 0 ? 'invisible' : 'visible')}>
      <div className='icon' />
      <Button
        onClick={() => {
          setState((S) => ({ ...S, index: S.index - 1 }));
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
        onClick={() => {
          setState((S) => ({ ...S, index: S.index + 1 }));
        }}
      >
        <div className='btn'>
          <div />
          <div />
        </div>
      </Button>
      <div className='icon' />
    </div>
  );
});

const Values = memo(() => {
  const value = useState(ValuesState);

  return (
    <ValuesContext.Provider value={value}>
      <Div100vh className='Values'>
        <Article>
          <div className='w-full relative px-5 md:px-12 lg:px-24 h-full pt-10'>
            <h3>Ogilvy Values</h3>
            <div className='w-full flex flex-row items-baseline'>
              <h1>玩家招募！</h1>
              <span>帶有奧美DNA的五大珍奇異獸</span>
            </div>
            <div className='w-full pt-8'>
              <Carousel />
            </div>
          </div>
          <div className='p-10 absolute bottom-0 w-full flex flex-row justify-between items-center'>
            <Prev />
            <Next />
          </div>
        </Article>
      </Div100vh>
    </ValuesContext.Provider>
  );
});
export default Values;