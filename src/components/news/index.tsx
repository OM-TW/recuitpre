import useInit from '@/hooks/useInit';
import { Context } from '@/settings/constant';
import { ActionType, TransitionType } from '@/settings/type';
import OnloadProvider from 'lesca-react-onload';
import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect, useState } from 'react';
import NewsDialog from './dialog';
import './index.less';

type T = {
  transition: TransitionType;
  onClose: () => void;
};

const BG = memo(({ transition, onClose }: T) => {
  const [style, setStyle] = useTween({ opacity: 0 });
  useEffect(() => {
    if (transition === TransitionType.FadeIn) {
      setStyle({ opacity: 0.9 }, 200);
    }
  }, [transition]);

  return <div style={style} onClick={onClose} />;
});

const News = memo(() => {
  const [respond] = useInit();
  const data = respond?.data[0];

  const [loaded, setLoaded] = useState(false);

  const [, setContext] = useContext(Context);
  const [transition, setTransition] = useState(TransitionType.Unset);

  useEffect(() => {
    if (loaded && data !== undefined) {
      setContext({ type: ActionType.News, state: { html: data.html } });
      setTransition(TransitionType.FadeIn);
    }
  }, [loaded, data]);

  return (
    <OnloadProvider onload={() => setLoaded(true)}>
      <div className='News'>
        <BG
          transition={transition}
          onClose={() => {
            setContext({ type: ActionType.News, state: { enabled: false } });
          }}
        />
        <div className='ctx'>
          <NewsDialog
            transition={transition}
            onClose={() => {
              setContext({ type: ActionType.News, state: { enabled: false } });
            }}
          />
        </div>
      </div>
    </OnloadProvider>
  );
});
export default News;
