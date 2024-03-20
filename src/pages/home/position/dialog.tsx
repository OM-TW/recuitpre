import { Fragment, memo, useContext, useEffect, useMemo } from 'react';
import './dialog.less';
import { PositionContext, PositionDialogContent } from './config';
import { twMerge } from 'tailwind-merge';

const Dialog = memo(() => {
  const [state] = useContext(PositionContext);
  const { index } = state;

  const data = useMemo(() => PositionDialogContent[index], [index]);

  useEffect(() => {}, []);
  return (
    <div className={twMerge('Dialog', index === 0 ? 'r0' : 'r1')}>
      <div className='title'>{data.title}</div>
      {data.body.map((each) => {
        return (
          <Fragment key={JSON.stringify(each)}>
            <div className='w-full'>
              <div className='headline'>
                <div>{each.headline}</div>
              </div>
            </div>
            <div className='w-full'>
              {each.content.map((content) => {
                return (
                  <p className='my-1 body' key={content}>
                    {content}
                  </p>
                );
              })}
            </div>
          </Fragment>
        );
      })}
    </div>
  );
});
export default Dialog;
