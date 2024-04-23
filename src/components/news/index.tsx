import { Context } from '@/settings/constant';
import { ActionType, TransitionType } from '@/settings/type';
import useTween, { Bezier } from 'lesca-use-tween';
import { memo, useContext, useEffect, useMemo, useState } from 'react';
import Button from '../button';

import useInit from '@/hooks/useInit';
import './index.less';

const Dialog = memo(({ html, transition }: { html: string; transition: TransitionType }) => {
  const [style, setStyle] = useTween({ opacity: 0, scale: 1.5 });

  useEffect(() => {
    if (transition === TransitionType.FadeIn) {
      setStyle({ opacity: 1, scale: 1 }, { duration: 500, easing: Bezier.outBack });
    }
  }, [transition]);

  return <div style={style} className='dialog' dangerouslySetInnerHTML={{ __html: html }} />;
});

const News = memo(() => {
  const [, setContext] = useContext(Context);
  const [transition, setTransition] = useState(TransitionType.Unset);

  const [respond] = useInit();
  const data = respond?.data[0];

  const html = useMemo(() => {
    if (!data) return '';
    setTransition(TransitionType.FadeIn);
    return data.html;
  }, [data]);

  return (
    <div className='News'>
      <div className='flex flex-col items-end space-y-6'>
        <Button
          className='close'
          onClick={() => {
            setContext({ type: ActionType.News, state: { enabled: false } });
          }}
        />
        <Dialog html={html} transition={transition} />
      </div>
    </div>
  );
});
export default News;
