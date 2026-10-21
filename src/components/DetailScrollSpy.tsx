'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useNav } from '@/contexts/NavContext';

gsap.registerPlugin(ScrollTrigger);

// 상세 페이지 본문이 화면 중앙에 있는 동안 헤더 메뉴(Work/Project)를 활성화
const DetailScrollSpy = ({ navLink, children }: { navLink: string; children: ReactNode }) => {
  const rootRef = useRef<HTMLElement | null>(null);
  const { setActiveLink } = useNav();

  useEffect(() => {
    setActiveLink(navLink);

    const spy = ScrollTrigger.create({
      trigger: rootRef.current,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => setActiveLink(navLink),
      onEnterBack: () => setActiveLink(navLink),
    });

    return () => spy.kill();
  }, [navLink, setActiveLink]);

  return (
    <article className="detail" ref={rootRef}>
      {children}
    </article>
  );
};

export default DetailScrollSpy;
