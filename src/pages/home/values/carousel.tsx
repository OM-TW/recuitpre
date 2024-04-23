import { memo, useContext, useRef } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { twMerge } from 'tailwind-merge';
import './carousel.less';
import { ValuesCarousels, ValuesContext } from './config';

type T = {
  data: (typeof ValuesCarousels)[number];
  index: number;
};

const Slide = memo(({ data, index }: T) => {
  return (
    <div className='context'>
      <div className={twMerge('image', `img-${index}`)} />
      <div className='texts'>
        <div className='name'>{data.name}</div>
        <div className='brief'>{data.brief}</div>
        <div className='description'>{data.description}</div>
      </div>
    </div>
  );
});

const Carousel = memo(() => {
  const ref = useRef<HTMLDivElement>(null);
  const [, setState] = useContext(ValuesContext);

  return (
    <div ref={ref} className='Carousel'>
      <Swiper
        className='w-full'
        slidesPerView={1}
        onSlideChange={(swiper) => setState((S) => ({ ...S, index: swiper.realIndex }))}
        onSwiper={(swiper) => setState((S) => ({ ...S, swiper }))}
      >
        {ValuesCarousels.map((data, index) => {
          return (
            <SwiperSlide className='w-full' key={JSON.stringify(data)}>
              <Slide data={data} index={index} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
});
export default Carousel;
