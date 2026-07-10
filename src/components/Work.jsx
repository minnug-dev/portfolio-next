import Image from 'next/image';
import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { workText } from '@/constants';

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.work .sub-tit', {
        opacity: 0,
      });
      gsap.set('.work .list-item', {
        opacity: 0,
        y: 50,
      });

      gsap.to('.work .sub-tit', {
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.work .sub-tit',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.to('.work .list-item', {
        opacity: 1,
        y: 0,
        duration: 1.5,
        stagger: 0.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.work .work-list',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" className="work" ref={containerRef}>
      <div className="work__inner">
        <h2 className="sub-tit">{workText.stit}</h2>
        <div className="work-list">
          {workText.list.map((work, index) => (
            <div key={index} className="list-item">
              <a href={work.link} target="_blank" data-cursor data-cursor-size="100" data-cursor-text="View">
                <div className="img-wrap">
                  <Image src={work.img} alt={work.imgDesc} style={{ width: '100%', height: 'auto' }} />
                </div>
              </a>
              <h3>{work.tit}</h3>
              <p>{work.desc}</p>
              <div className="tool-wrap">
                {work.tool.map((tool, index) => (
                  <span key={index}>{tool}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
