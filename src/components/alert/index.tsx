import { REGISTRATION } from '@/settings/config';
import { Context } from '@/settings/constant';
import { ActionType } from '@/settings/type';
import { Bezier, TweenProvider } from 'lesca-use-tween';
import React, { memo, useContext, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Button from '../button';
import { AlertButtonLabels } from './config';
import './index.less';

type T = {
  data: (typeof AlertButtonLabels)[number];
  value: [{ index: number }, React.Dispatch<React.SetStateAction<{ index: number }>>];
  index: number;
};

const Btn = memo(({ data, value, index }: T) => {
  const [state, setState] = value;

  return (
    <Button
      className={twMerge('btn', state.index === index ? 'active' : '')}
      onMouseOver={() => {
        setState({ index });
      }}
      onClick={() => {
        window.open(REGISTRATION[index], '_blank');
      }}
    >
      <span>{data.name}</span>
      <span>{data.sub}</span>
    </Button>
  );
});

const Alert = memo(() => {
  const [, setContext] = useContext(Context);
  const value = useState({ index: 0 });

  return (
    <div className='Alert'>
      <div className='flex flex-col items-end space-y-6'>
        <Button
          className='close'
          onClick={() => {
            setContext({ type: ActionType.Alert, state: { enabled: false } });
          }}
        ></Button>
        <TweenProvider
          initStyle={{ opacity: 0, scale: 1.5 }}
          tweenStyle={{ opacity: 1, scale: 1 }}
          options={{ duration: 500, easing: Bezier.outBack, onEnd: () => {} }}
        >
          <div className='dialog'>
            {AlertButtonLabels.map((data, index) => (
              <Btn key={data.name} value={value} index={index} data={data} />
            ))}
          </div>
        </TweenProvider>
      </div>
    </div>
  );
});
export default Alert;
