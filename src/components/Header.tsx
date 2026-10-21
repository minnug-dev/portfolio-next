'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { headerNav } from '@/constants';
import { useNav } from '@/contexts/NavContext';
import { useSectionNav } from '@/utils/useSectionNav';
import InvertToggle from './InvertToggle';

gsap.registerPlugin(ScrollTrigger);

// 스크롤 스파이 대상 (#contact 는 Contact 컴포넌트에서 별도 처리)
const spyTargets = headerNav.filter((nav) => nav.link.startsWith('#') && nav.link !== '#contact');

const Header = () => {
  const navRef = useRef<HTMLElement | null>(null);
  const { activeLink, setActiveLink } = useNav();
  const { isHome, getHref, handleAnchorClick } = useSectionNav();
  const [show, setShow] = useState(false);

  // hover 인터랙션
  useEffect(() => {
    const items = navRef.current?.querySelectorAll<HTMLLIElement>('li');
    if (!items) return;

    const cleanups: Array<() => void> = [];

    items.forEach((item) => {
      const link = item.querySelector('a');
      const dot = item.querySelector('.dot');

      const enter = () => {
        gsap.killTweensOf([link, dot]);

        const tl = gsap.timeline();

        tl.to(dot, {
          scale: 1,
          opacity: 1,
          duration: 0.15,
          ease: 'back.out(3)',
        });

        tl.to(
          [link, dot],
          {
            y: 5,
            duration: 0.1,
            ease: 'power1.in',
          },
          0,
        )
          .to([link, dot], {
            y: -3,
            duration: 0.15,
            ease: 'power2.out',
          })
          .to([link, dot], {
            y: 0,
            duration: 0.15,
            ease: 'power2.out',
          });
      };

      const leave = () => {
        if (item.classList.contains('active')) return;

        gsap.to(dot, {
          scale: 0,
          opacity: 0,
          duration: 0.2,
        });
      };

      item.addEventListener('mouseenter', enter);
      item.addEventListener('mouseleave', leave);

      cleanups.push(() => {
        item.removeEventListener('mouseenter', enter);
        item.removeEventListener('mouseleave', leave);
      });
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  // active 인터랙션 (점 표시/숨김)
  useEffect(() => {
    navRef.current?.querySelectorAll<HTMLLIElement>('li').forEach((item) => {
      const dot = item.querySelector('.dot');
      if (!dot) return;

      const isActive = !!activeLink && item.dataset.link === activeLink;

      gsap.to(dot, {
        scale: isActive ? 1 : 0,
        opacity: isActive ? 1 : 0,
        duration: 0.15,
        ease: isActive ? 'back.out(3)' : 'power1.out',
      });
    });
  }, [activeLink]);

  // 스크롤 위치에 따라 active 업데이트
  useEffect(() => {
    const ctx = gsap.context(() => {
      spyTargets.forEach((nav, index) => {
        const target = document.querySelector(nav.link);
        if (!target) return;

        ScrollTrigger.create({
          trigger: target,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => setActiveLink(nav.link),
          onEnterBack: () => setActiveLink(nav.link),
          onLeaveBack: index === 0 ? () => setActiveLink(null) : undefined,
        });
      });
    });

    return () => ctx.revert();
  }, [setActiveLink]);

  // ESC 로 모바일 메뉴 닫기
  useEffect(() => {
    if (!show) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShow(false);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [show]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    setShow(false);
    handleAnchorClick(e, url);
  };

  return (
    <header id="header" className="header">
      <div className="header__inner">
        <div className="header__logo">
          <Link href={isHome ? '#' : '/'}>minjoo</Link>
        </div>
        <nav id="primary-menu" className={`header__nav ${show ? 'show' : ''}`} aria-label="메인 메뉴" ref={navRef}>
          <ul>
            {headerNav.map((nav) => (
              <li key={nav.link} data-link={nav.link} className={activeLink === nav.link ? 'active' : ''}>
                <span className="dot" aria-hidden="true"></span>
                <a
                  className="mono"
                  href={getHref(nav.link)}
                  aria-current={activeLink === nav.link ? 'location' : undefined}
                  data-cursor
                  data-cursor-size="50"
                  onClick={(e) => handleNavClick(e, nav.link)}
                >
                  {nav.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header__util">
          <InvertToggle />
          <button
            type="button"
            className={`header__nav__mobile ${show ? 'active' : ''}`}
            aria-controls="primary-menu"
            aria-expanded={show}
            aria-label={show ? '메뉴 닫기' : '메뉴 열기'}
            onClick={() => setShow((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
