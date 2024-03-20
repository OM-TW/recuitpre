import { memo, useContext, useLayoutEffect, useMemo, useRef, useState } from 'react';
import './carousel.less';
import { ValuesCarousels, ValuesContext } from './config';

type T = {
  data: (typeof ValuesCarousels)[number];
  width: number | undefined;
};

const Slide = memo(({ data, width }: T) => {
  return (
    <div style={{ width: `${width}px` }}>
      <div className='context'>
        <div className='image' />
        <div className='texts'>
          <div className='name'>{data.name}</div>
          <div className='brief'>{data.brief}</div>
          <div className='description'>{data.description}</div>
        </div>
      </div>
    </div>
  );
});

const Carousel = memo(() => {
  const ref = useRef<HTMLDivElement>(null);
  const [state] = useContext(ValuesContext);

  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const resize = () => {
      setWidth(ref.current?.clientWidth || 0);
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  const x = useMemo(() => (100 / ValuesCarousels.length) * state.index * -1, [state.index]);

  return (
    <div ref={ref} className='Carousel'>
      <div style={{ width: `${ValuesCarousels.length * 100}%`, transform: `translateX(${x}%)` }}>
        {ValuesCarousels.map((data) => {
          return <Slide key={JSON.stringify(data)} data={data} width={width} />;
        })}
      </div>
    </div>
  );
});
export default Carousel;
