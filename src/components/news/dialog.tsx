import { Context } from '@/settings/constant';
import { ActionType, TransitionType } from '@/settings/type';
import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect, useRef } from 'react';
import Button from '../button';

type T = {
  transition: TransitionType;
  onClose: () => void;
  html: string | undefined;
};

const Dialog = memo(({ transition, onClose, html }: T) => {
  const [, setContext] = useContext(Context);
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useTween({ y: window.innerHeight });

  useEffect(() => {
    if (transition === TransitionType.FadeIn) setStyle({ y: 0 }, { duration: 500, delay: 200 });
  }, [transition]);

  useEffect(() => {
    const a = ref.current?.getElementsByTagName('a');
    if (a) {
      [...a].forEach((e) => {
        e.addEventListener('click', () => {
          setContext({ type: ActionType.News, state: { enabled: false } });
        });
      });
    }
  }, []);

  return (
    <div className='dialog' style={style}>
      <div ref={ref} className='content' dangerouslySetInnerHTML={{ __html: html || '' }} />
      <div className='close'>
        <Button onClick={onClose}>
          <Button.Close />
        </Button>
      </div>
    </div>
  );
});

const NewsDialog = memo(({ transition, onClose }: Omit<T, 'html'>) => {
  const [context] = useContext(Context);
  const { news } = context;
  return <Dialog transition={transition} onClose={onClose} html={news?.html} />;
});
export default NewsDialog;
