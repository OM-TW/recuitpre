import Article from '@/components/article';
import { memo, useEffect } from 'react';
import Box from './box';
import { ExclusivePacks } from './config';
import './index.less';
import Block from '@/components/block';

const Exclusive = memo(() => {
  useEffect(() => {}, []);
  return (
    <div id='exclusive' className='Exclusive'>
      <Article>
        <Block>
          <h3>Exclusive Pack</h3>
          <h1>新人才有的酷東東</h1>
          <div className='w-full mt-10 flex flex-wrap justify-center'>
            {ExclusivePacks.map((data, index) => (
              <Box key={JSON.stringify(data)} data={data} index={index} />
            ))}
          </div>
        </Block>
      </Article>
    </div>
  );
});
export default Exclusive;
