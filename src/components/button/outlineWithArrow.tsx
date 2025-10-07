import { IReactProps } from '@/settings/type';
import { memo } from 'react';
import './outlineWithArrow.less';

const OutlineWithArrow = memo(({ children }: IReactProps) => (
  <div className='OutlineWithArrow'>{children}</div>
));
export default OutlineWithArrow;
