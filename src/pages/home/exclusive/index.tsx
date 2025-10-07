import Article from '@/components/article';
import Block from '@/components/block';
import { memo } from 'react';
import Box from './box';
import { ExclusivePacks } from './config';
import './index.less';

const Exclusive = memo(() => (
  <div className='section'>
    <div className='Exclusive'>
      <Article>
        <Block>
          <h3>Exclusive Pack</h3>
          <h1>新人才有的酷東東</h1>
          <div className='mt-10 flex w-full flex-wrap justify-center'>
            {ExclusivePacks.map((data, index) => (
              <Box key={JSON.stringify(data)} data={data} index={index} />
            ))}
          </div>
        </Block>
      </Article>
    </div>
  </div>
));
export default Exclusive;
