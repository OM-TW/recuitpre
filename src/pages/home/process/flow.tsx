import Button from '@/components/button';
import { memo, useContext, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import { FlowData } from './config';
import './flow.less';
import { Context } from '@/settings/constant';
import { ActionType } from '@/settings/type';
import { CommaStringToArray } from 'lesca-comma-string';

type T = {
  data: (typeof FlowData)[number];
  index: number;
};

const Flow = memo(({ data, index }: T) => {
  const [context] = useContext(Context);
  const info = context[ActionType.Info];

  const dataFromAPI = useMemo(() => {
    if (info) {
      const [, , link, time] = CommaStringToArray(info.linkURL);
      const steps = CommaStringToArray(info.schedule)[index];
      return { link, time, steps };
    }
  }, [info]);

  return (
    <div className='Flow'>
      <Button className='absolute z-20 block h-full w-full bg-white opacity-0 duration-150 active:opacity-30 lg:hidden'></Button>
      <div className={`flow${index}`}>
        <div className='context pointer-events-none'>
          {data.sup && <div className='sup'>{data.sup}</div>}
          <div className='title'>{data.title}</div>
          <div className='subtitle'>
            <span> {dataFromAPI?.steps}</span>
            {index === 1 && (
              <>
                <Button
                  className='pointer-events-auto'
                  onClick={() => window.open(dataFromAPI?.link)}
                >
                  <Button.OutlineWithArrow>
                    <span>立即報名 Ogilvy night out</span>
                  </Button.OutlineWithArrow>
                </Button>
                <span className='font-noto-bold text-xl font-bold'>{dataFromAPI?.time}</span>
              </>
            )}
          </div>
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
  const [context] = useContext(Context);
  const info = context[ActionType.Info];

  const dataFromAPI = useMemo(() => {
    if (info) {
      const [, , link, time] = CommaStringToArray(info.linkURL);
      const steps = CommaStringToArray(info.schedule)[index];
      return { link, time, steps };
    }
  }, [info]);

  return (
    <div className='MobileFlow'>
      <div className={`step step${index + 1}`} />
      {data.sup && <div className='sup'>{data.sup}</div>}
      <div className='title'>{data.title}</div>
      <div className='subtitle'>
        <span> {dataFromAPI?.steps}</span>
        {index === 1 && (
          <>
            <Button className='pointer-events-auto' onClick={() => window.open(dataFromAPI?.link)}>
              <Button.OutlineWithArrow>
                <span>立即報名 Ogilvy night out</span>
              </Button.OutlineWithArrow>
            </Button>
            <span className='font-noto-bold text-xl font-bold'>{dataFromAPI?.time}</span>
          </>
        )}
      </div>
      <div className={twMerge('body', data.symbols)}>{data.body}</div>
    </div>
  );
});
