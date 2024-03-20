import Article from '@/components/article';
import { memo, useEffect, useState } from 'react';
import { PositionContext, PositionState } from './config';
import './index.less';
import Tablist from './tablist';
import Dialog from './dialog';

const Position = memo(() => {
  const value = useState(PositionState);

  useEffect(() => {}, []);
  return (
    <div className='Position'>
      <PositionContext.Provider value={value}>
        <Article>
          <div className='w-full relative px-5 md:px-12 lg:px-24 h-full pt-10 pb-10'>
            <h3>Position</h3>
            <h1>招募職位</h1>
            <Tablist />
            <Dialog />
          </div>
        </Article>
      </PositionContext.Provider>
    </div>
  );
});
export default Position;
