import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function useCursor() {
  const isHoveredRef = useRef(false);
  const currentTargetRef = useRef(null);
  const mousePosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    const text = document.querySelector('.cursor-text');

    if (!cursor) return;

    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
    });

    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.18, ease: 'power3.out' });
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.18, ease: 'power3.out' });

    function updateCursorState(target) {
      if (target) {
        if (!isHoveredRef.current || currentTargetRef.current !== target) {
          isHoveredRef.current = true;
          currentTargetRef.current = target;

          const size = Number(target.dataset.cursorSize) || 100;
          const vars = {
            width: size,
            height: size,
            duration: 0.3,
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
            width: 20,
            height: 20,
            duration: 0.4,
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

    function move(e) {
      mousePosRef.current = { x: e.clientX, y: e.clientY };

      xTo(e.clientX);
      yTo(e.clientY);

      const target = e.target.closest('[data-cursor]');
      updateCursorState(target);
    }

    function handleScroll() {
      const { x, y } = mousePosRef.current;
      const elementAtPoint = document.elementFromPoint(x, y);

      if (elementAtPoint) {
        const target = elementAtPoint.closest('[data-cursor]');
        updateCursorState(target);
      }
    }

    function mouseLeaveWindow() {
      isHoveredRef.current = false;
      currentTargetRef.current = null;
      gsap.to(cursor, { width: 20, height: 20, duration: 0.4, overwrite: 'auto' });
      if (text) text.textContent = '';
    }

    window.addEventListener('pointermove', move);
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mouseleave', mouseLeaveWindow);

    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', mouseLeaveWindow);
    };
  }, []);
}
