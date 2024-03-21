import Article from '@/components/article';
import { memo, useEffect } from 'react';
import Box from './box';
import { ExclusivePacks } from './config';
import './index.less';

const Exclusive = memo(() => {
  useEffect(() => {}, []);
  return (
    <div id='exclusive' className='Exclusive'>
      <Article>
        <div className='w-full relative px-5 md:px-12 lg:px-24 h-full pt-10 pb-10'>
          <h3>Exclusive Pack</h3>
          <h1>新人才有的酷東東</h1>
          <div className='w-full mt-10 flex flex-wrap justify-center'>
            {ExclusivePacks.map((data, index) => (
              <Box key={JSON.stringify(data)} data={data} index={index} />
            ))}
          </div>
        </div>
      </Article>
    </div>
  );
});
export default Exclusive;
