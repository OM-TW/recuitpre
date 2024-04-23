import Button from '@/components/button';
import { memo } from 'react';
import { twMerge } from 'tailwind-merge';
import { FlowData } from './config';
import './flow.less';

type T = {
  data: (typeof FlowData)[number];
  index: number;
};

const Flow = memo(({ data, index }: T) => {
  return (
    <div className='Flow'>
      <Button className='absolute z-20 block h-full w-full bg-white opacity-0 duration-150 active:opacity-30 lg:hidden'></Button>
      <div className={`flow${index}`}>
        <div className='context pointer-events-none'>
          {data.sup && <div className='sup'>{data.sup}</div>}
          <div className='title'>{data.title}</div>
          <div className='subtitle'>{data.subtitle}</div>
          <div className={twMerge('body', data.symbols)}>
            {data.body.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});
export default Flow;

export const MobileFlow = memo(({ data, index }: T) => {
  return (
    <div className='MobileFlow'>
      <div className={`step step${index + 1}`} />
      {data.sup && <div className='sup'>{data.sup}</div>}
      <div className='title'>{data.title}</div>
      <div className='subtitle'>{data.subtitle}</div>
      <div className={twMerge('body', data.symbols)}>{data.body}</div>
    </div>
  );
});
