import { memo, useEffect } from 'react';
import { ExclusivePacks } from './config';
import './box.less';
import { twMerge } from 'tailwind-merge';

type T = {
  data: (typeof ExclusivePacks)[number];
  index: number;
};

const Box = memo(({ data, index }: T) => {
  useEffect(() => {}, []);
  return (
    <div className='box'>
      <div className='content'>
        <div>
          <div className={twMerge('photo', `ico-${index}`)}></div>
          <div className='w-full px-5 pt-8'>
            <div className='title'>{data.name}</div>
            <div className='subtitle'>
              {data.body.map((text) => (
                <div key={text}>{text}</div>
              ))}
            </div>
          </div>
          <div className='indicator'>0{index + 1}</div>
        </div>
      </div>
    </div>
  );
});
export default Box;
