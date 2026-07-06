import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function useCursor() {
  const isHoveredRef = useRef(false);
  const currentTargetRef = useRef(null);

  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    const text = document.querySelector('.cursor-text');

    if (!cursor) return;

    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
    });

    // 커서 이동
    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.18, ease: 'power3.out' });
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.18, ease: 'power3.out' });

    function move(e) {
      xTo(e.clientX);
      yTo(e.clientY);

      const target = e.target.closest('[data-cursor]');

      if (target) {
        if (!isHoveredRef.current || currentTargetRef.current !== target) {
          isHoveredRef.current = true;
          currentTargetRef.current = target;

          const size = Number(target.dataset.cursorSize) || 100;
          const vars = {
            width: size,
            height: size,
            duration: 0.25,
            ease: 'power3.out',
            overwrite: 'auto',
          };

          if (target.dataset.cursorColor) {
            vars.backgroundColor = target.dataset.cursorColor;
          }

          gsap.to(cursor, vars);
          if (text) text.textContent = target.dataset.cursorText || '';
        }
      } else {
        if (isHoveredRef.current) {
          isHoveredRef.current = false;
          currentTargetRef.current = null;

          const vars = {
            width: 28,
            height: 28,
            duration: 0.45,
            ease: 'power3.out',
            overwrite: 'auto',
          };

          if (text && text.textContent) {
            vars.backgroundColor = 'var(--white)';
          }

          gsap.to(cursor, vars);
          if (text) text.textContent = '';
        }
      }
    }

    function mouseLeaveWindow() {
      isHoveredRef.current = false;
      currentTargetRef.current = null;
      gsap.to(cursor, { width: 28, height: 28, duration: 0.45, overwrite: 'auto' });
      if (text) text.textContent = '';
    }

    window.addEventListener('pointermove', move);
    document.addEventListener('mouseleave', mouseLeaveWindow);

    return () => {
      window.removeEventListener('pointermove', move);
      document.removeEventListener('mouseleave', mouseLeaveWindow);
    };
  }, []);
}
