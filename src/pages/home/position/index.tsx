import Article from '@/components/article';
import Block from '@/components/block';
import { memo, useState } from 'react';
import { PositionContext, PositionState } from './config';
import Dialog from './dialog';
import './index.less';
import Tablist from './tablist';

const Position = memo(() => {
  const value = useState(PositionState);

  return (
    <div className='section'>
      <div className='Position'>
        <PositionContext.Provider value={value}>
          <Article>
            <Block>
              <h3>Position</h3>
              <h1>招募職位</h1>
              <Tablist />
              <Dialog />
            </Block>
          </Article>
        </PositionContext.Provider>
      </div>
    </div>
  );
});
export default Position;
