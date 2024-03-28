import Article from '@/components/article';
import { memo, useEffect, useState } from 'react';
import { PositionContext, PositionState } from './config';
import './index.less';
import Tablist from './tablist';
import Dialog from './dialog';
import Block from '@/components/block';

const Position = memo(() => {
  const value = useState(PositionState);

  useEffect(() => {}, []);
  return (
    <div className='section'>
      <div id='position' className='Position'>
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
