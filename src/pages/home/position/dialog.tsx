import { Fragment, memo, useContext, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import { PositionContext, PositionDialogContent } from './config';
import './dialog.less';

const Dialog = memo(() => {
  const [state] = useContext(PositionContext);
  const { index } = state;
  const data = useMemo(() => PositionDialogContent[index], [index]);

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
                  <p className='body my-1' key={content}>
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
