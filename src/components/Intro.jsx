import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { introText } from '@/constants';

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="intro" className="intro">
      <div className="intro__inner">
        <h2 className="visually-hidden">박민주 포트폴리오 인트로</h2>
        <div className="intro__title">
          <span className="text">{introText.text}</span>
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
