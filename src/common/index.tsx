import { TFullPageProperty } from '@/hooks/useFullPage';
import { MENU_ITEMS } from '@/settings/config';

export const hash = [{ hash: 'home' }, ...MENU_ITEMS, { hash: 'footer' }].map((e) => e.hash);

type E = WheelEvent | TouchEvent | KeyboardEvent | Event;
let scrollTimeout: NodeJS.Timeout;

export const getDelta = (e: E, property: TFullPageProperty) => {
  if (e instanceof WheelEvent) {
    return e.deltaY;
  } else if (e instanceof TouchEvent) {
    let currentDelta = 0;
    if (property.delta !== 0) {
      currentDelta = e.touches[0].clientY - property.delta;
    }
    property.delta = e.touches[0].clientY;
    return currentDelta * -1;
  } else return 0;
};

export const getScroll = (delta: number, e: E, property: TFullPageProperty) => {
  property.enabled = false;
  e.preventDefault();

  if (delta > 0) property.index = property.index + 1;
  else if (delta < 0) property.index = property.index - 1;

  if (property.index < 0) {
    property.index = 0;
    property.enabled = true;
  } else if (property.index > hash.length - 1) {
    property.index = hash.length - 1;
    property.enabled = true;
  }

  const currentTarget = document.getElementById(`${hash[property.index]}`);

  if (currentTarget) {
    window.location.hash = hash[property.index];
    const top = currentTarget.offsetTop;
    window.scrollTo(0, top);
    clearTimeout(scrollTimeout);
    window.addEventListener('scroll', function () {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(function () {
        property.enabled = true;
      }, 600);
    });
  }
};

export const inView = () => {};
