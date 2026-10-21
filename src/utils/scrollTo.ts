import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

interface ScrollToOptions {
  offsetY?: number;
  duration?: number;
  ease?: string;
}

export const scrollToTarget = (target: string | Element | number, options: ScrollToOptions = {}) => {
  const { offsetY = 0, duration = 1.2, ease = 'power3.inOut' } = options;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  gsap.to(window, {
    duration: reduceMotion ? 0 : duration,
    scrollTo: {
      y: target,
      offsetY,
    },
    ease,
  });
};

// Contact로 이동
export const scrollToBottom = (options: Omit<ScrollToOptions, 'offsetY'> = {}) =>
  scrollToTarget(document.documentElement.scrollHeight - window.innerHeight, options);
