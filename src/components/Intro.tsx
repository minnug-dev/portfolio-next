'use client';

import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { introText } from '@/constants';

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      '(prefers-reduced-motion: reduce)',
      () => {
        gsap.set(['.intro__title .text', '.intro__title .tit p'], { clipPath: 'none' });
      },
      containerRef,
    );

    mm.add(
      '(prefers-reduced-motion: no-preference)',
      () => {
        gsap.set(['.intro__title .text', '.intro__title .tit p'], { clipPath: 'inset(0 100% 0 0)' });
        gsap.set(scrollRef.current, { opacity: 0 });

        const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

        tl.to('.intro__title .text', {
          clipPath: 'inset(0 0% 0 0)',
          duration: 4,
        }).to(
          '.intro__title .tit p',
          {
            clipPath: 'inset(0 0% 0 0)',
            duration: 1.3,
            stagger: 0.3,
          },
          '-=3.5',
        );

        gsap.to(scrollRef.current, {
          opacity: 1,
          duration: 0.6,
          ease: 'power3.inOut',
          delay: 2.5,
        });

        ScrollTrigger.create({
          trigger: document.body,
          start: 500,
          id: 'intro-scroll-indicator',
          onEnter: () => {
            gsap.to(scrollRef.current, {
              opacity: 0,
              duration: 0.6,
              ease: 'power2.out',
              overwrite: 'auto',
            });
          },
          onLeaveBack: () => {
            gsap.to(scrollRef.current, {
              opacity: 1,
              duration: 0.6,
              ease: 'power2.out',
              overwrite: 'auto',
            });
          },
        });
      },
      containerRef,
    );

    return () => mm.revert();
  }, []);

  return (
    <section id="intro" className="intro" ref={containerRef}>
      <div className="intro__inner">
        <h1 className="visually-hidden">박민주 포트폴리오 인트로</h1>
        <div className="intro__title">
          <div className="text mono">
            {introText.text}
            <span className="icon" aria-hidden="true">
              👋
            </span>
          </div>
          <div className="tit">
            {introText.tit.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>

        <div className="scroll" ref={scrollRef} aria-hidden="true">
          <span className="label mono">Scroll Down</span>
          <div className="bar">
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
