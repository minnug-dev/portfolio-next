import { useEffect, RefObject } from 'react';
import gsap from 'gsap';

const CURSOR_MEDIA = '(min-width: 1024px) and (hover: hover) and (pointer: fine)';
const BASE_SIZE = 20;

export function useCursor(cursorRef: RefObject<HTMLDivElement | null>, textRef: RefObject<HTMLSpanElement | null>) {
  useEffect(() => {
    const cursor = cursorRef.current;
    const text = textRef.current;
    if (!cursor) return;

    const mediaQuery = window.matchMedia(CURSOR_MEDIA);
    let teardown: (() => void) | undefined;

    const setup = () => {
      let currentTarget: HTMLElement | null = null;
      let visible = false;
      let mouse = { x: 0, y: 0 };

      gsap.set(cursor, { xPercent: -50, yPercent: -50 });

      const xTo = gsap.quickTo(cursor, 'x', { duration: 0.18, ease: 'power3.out' });
      const yTo = gsap.quickTo(cursor, 'y', { duration: 0.18, ease: 'power3.out' });

      const resetCursor = () => {
        currentTarget = null;
        gsap.to(cursor, {
          width: BASE_SIZE,
          height: BASE_SIZE,
          backgroundColor: 'var(--mainColorReverse)',
          duration: 0.4,
          ease: 'power3.out',
          overwrite: 'auto',
        });
        if (text) text.textContent = '';
      };

      const updateCursorState = (target: HTMLElement | null) => {
        if (target === currentTarget) return;

        if (!target) {
          resetCursor();
          return;
        }

        currentTarget = target;
        const size = Number(target.dataset.cursorSize) || 100;
        const vars: gsap.TweenVars = {
          width: size,
          height: size,
          duration: 0.3,
          ease: 'power3.out',
          overwrite: 'auto',
        };
        if (target.dataset.cursorColor) vars.backgroundColor = target.dataset.cursorColor;

        gsap.to(cursor, vars);
        if (text) text.textContent = target.dataset.cursorText || '';
      };

      const show = () => {
        if (visible) return;
        visible = true;
        gsap.to(cursor, { opacity: 1, duration: 0.2, overwrite: 'auto' });
      };

      const onMove = (e: PointerEvent) => {
        mouse = { x: e.clientX, y: e.clientY };

        if (!visible) {
          gsap.set(cursor, { x: e.clientX, y: e.clientY });
          show();
        }
        xTo(e.clientX);
        yTo(e.clientY);

        updateCursorState((e.target as Element | null)?.closest<HTMLElement>('[data-cursor]') ?? null);
      };

      const onScroll = () => {
        if (!visible) return;
        const el = document.elementFromPoint(mouse.x, mouse.y);
        updateCursorState(el?.closest<HTMLElement>('[data-cursor]') ?? null);
      };

      const onLeave = () => {
        visible = false;
        resetCursor();
        gsap.to(cursor, { opacity: 0, duration: 0.2, overwrite: 'auto' });
      };

      const root = document.documentElement;
      window.addEventListener('pointermove', onMove);
      window.addEventListener('scroll', onScroll, { passive: true });
      root.addEventListener('mouseleave', onLeave);

      return () => {
        window.removeEventListener('pointermove', onMove);
        window.removeEventListener('scroll', onScroll);
        root.removeEventListener('mouseleave', onLeave);
        gsap.killTweensOf(cursor);
        gsap.set(cursor, { clearProps: 'all' });
        if (text) text.textContent = '';
      };
    };

    const sync = () => {
      teardown?.();
      teardown = mediaQuery.matches ? setup() : undefined;
    };

    sync();
    mediaQuery.addEventListener('change', sync);

    return () => {
      mediaQuery.removeEventListener('change', sync);
      teardown?.();
    };
  }, [cursorRef, textRef]);
}
