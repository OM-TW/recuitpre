import { memo, useEffect } from 'react';
import './position.less';
import { twMerge } from 'tailwind-merge';

type T = {
  job: string;
  eng: string;
  active: boolean;
};

const Position = memo(({ job, eng, active }: T) => {
  useEffect(() => {}, []);
  return (
    <div className={twMerge('btn-position', active ? 'btn-position-active' : '')}>
      <div>{job}</div>
      <div>{eng}</div>
    </div>
  );
});
export default Position;
