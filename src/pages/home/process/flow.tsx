import Button from '@/components/button';
import { memo, useContext, useEffect, useMemo, useState } from 'react';
import { FlowData, ProcessContext } from './config';
import './flow.less';

type T = {
  data: (typeof FlowData)[number];
  index: number;
};

const Flow = memo(({ data, index }: T) => {
  const [state, setState] = useContext(ProcessContext);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resize = () => {
      setWidth(window.innerWidth);
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  const opacity = useMemo(() => {
    if (width > 768) return 1;
    else {
      if (state.index === index) return 1;
      else return 0;
    }
  }, [width, state.index, index]);

  return (
    <div className='Flow'>
      <Button
        className='z-20 absolute w-full h-full bg-white opacity-0 duration-150 active:opacity-30 block lg:hidden'
        onClick={() => setState((S) => ({ ...S, index }))}
      ></Button>
      <div className={`flow${index}`} style={{ opacity }}>
        <div className='context'>
          {data.sup && <div className='sup'>{data.sup}</div>}
          <div className='title'>{data.title}</div>
          <div className='subtitle'>{data.subtitle}</div>
          <div className='body'>
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
