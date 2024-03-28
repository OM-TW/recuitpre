import { getDelta, getScroll, hash } from '@/common';
import { useCallback, useEffect, useRef, useState } from 'react';

let supportsPassive = false;
try {
  window.addEventListener(
    'test',
    () => {},
    Object.defineProperty({}, 'passive', {
      get: function () {
        supportsPassive = true;
      },
    }),
  );
} catch (e) {
  console.error(e);
}

const wheelOpt = supportsPassive ? { passive: false } : false;
const wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
export type TFullPageProperty = { delta: number; enabled: boolean; index: number };

let timeout: NodeJS.Timeout;

const useFullPage = () => {
  const [state, setState] = useState();
  const property = useRef<TFullPageProperty>({
    delta: 0,
    enabled: true,
    index: hash.indexOf(window.location.hash.replace('#', '') || 'home'),
  });
  const onDeltaTrigger = useCallback((e: TouchEvent | WheelEvent | KeyboardEvent | Event) => {
    if (!property.current.enabled) {
      e.preventDefault();
      return;
    }
    clearTimeout(timeout);
    const target = document.querySelector(`#${hash[property.current.index]}`);

    if (target) {
      const { height, top } = target.getBoundingClientRect();
      const { innerHeight } = window;

      if (height <= innerHeight) {
        const delta = getDelta(e, property.current);
        if (delta !== 0) {
          getScroll(delta, e, property.current);
        } else e.preventDefault();
      } else {
        timeout = setTimeout(() => {
          if (top > 0) {
            const delta = getDelta(e, property.current);
            getScroll(delta, e, property.current);
          } else if (innerHeight - top > height) {
            const delta = getDelta(e, property.current);
            getScroll(delta, e, property.current);
          }
        }, 250);
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener(wheelEvent, onDeltaTrigger, wheelOpt);
    window.addEventListener('touchmove', onDeltaTrigger, wheelOpt);
    window.addEventListener(
      'touchstart',
      () => {
        property.current.delta = 0;
      },
      wheelOpt,
    );

    window.addEventListener('keydown', onDeltaTrigger, false);
  }, []);
  return [state, setState];
};
export default useFullPage;
