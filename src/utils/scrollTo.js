import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export const scrollToTarget = (target, options = {}) => {
  const { offsetY = 0, duration = 1.2, ease = 'power3.inOut' } = options;

  gsap.to(window, {
    duration,
    scrollTo: {
      y: target,
      offsetY,
    },
    ease,
  });
};
