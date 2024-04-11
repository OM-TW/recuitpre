import { memo, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { FlowData, ProcessRoadMap, ProcessRoadMapProperty } from './config';
import { MobileFlow } from './flow';
import './grid.less';

const row = 12;
const column = 14;

const Grid = memo(() => {
  useEffect(() => {}, []);
  return (
    <div className='Grid'>
      <div className='content'>
        {[...new Array(row * column).keys()].map((index) => {
          const isRoad = ProcessRoadMap.includes(index + 1);
          const { className, body } = ProcessRoadMapProperty[String(index + 1)] || '';
          return (
            <div key={`cube${index}`}>
              <div className={twMerge(isRoad ? 'bg-black' : 'bg-transparent', className)}>
                {body}
              </div>
            </div>
          );
        })}
      </div>
      <div className='relative w-full h-full top-0 left-0 z-20 flex flex-col lg:hidden'>
        {FlowData.map((item, index) => (
          <div key={JSON.stringify(item)} className='w-full px-0 md:px-7 lg:px-24 py-2 relative'>
            <MobileFlow data={item} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
});
export default Grid;
