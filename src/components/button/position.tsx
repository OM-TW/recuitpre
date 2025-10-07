import { memo } from 'react';
import { twMerge } from 'tailwind-merge';
import './position.less';

type T = {
  job: string;
  eng: string;
  active: boolean;
};

const Position = memo(({ job, eng, active }: T) => (
  <div className={twMerge('btn-position', active ? 'btn-position-active' : '')}>
    <div>{job}</div>
    <div>{eng}</div>
  </div>
));
export default Position;
