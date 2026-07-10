import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { introText } from '@/constants';

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(['.intro__title .text', '.intro__title .tit p'], {
        clipPath: 'inset(0 100% 0 0)',
      });

      const tl = gsap.timeline({
        defaults: { ease: 'power3.easeInOut' },
      });

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

      ScrollTrigger.create({
        trigger: 'body',
        start: '500',
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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="intro" className="intro" ref={containerRef}>
      <div className="intro__inner">
        <h2 className="visually-hidden">박민주 포트폴리오 인트로</h2>
        <div className="intro__title">
          <div className="text">
            {introText.text}
            <span className="icon">👋</span>
          </div>
          <div className="tit">
            <p>{introText.tit[0]}</p>
            <p>{introText.tit[1]}</p>
            <p>{introText.tit[2]}</p>
          </div>
        </div>

        <div className="scroll" ref={scrollRef}>
          <span className="label">Scroll Down</span>
          <div className="bar">
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
