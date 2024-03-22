import { memo, useEffect } from 'react';
import './grid.less';
import { ProcessRoadMap, ProcessRoadMapProperty } from './config';
import { twMerge } from 'tailwind-merge';

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
    </div>
  );
});
export default Grid;
