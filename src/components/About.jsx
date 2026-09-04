import Image from 'next/image';
import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { aboutText } from '@/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.about .img-wrap', {
        opacity: 0,
        y: -50,
      });
      gsap.set('.about .sub-tit', {
        opacity: 0,
        y: 40,
      });
      gsap.set('.about .info', {
        opacity: 0,
        y: 40,
      });
      gsap.set('.about .history-item', {
        opacity: 0,
        y: 50,
      });

      const introTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.about .introduce',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        defaults: { ease: 'power3.out' },
      });

      introTl
        .to('.about .img-wrap', {
          opacity: 1,
          y: 0,
          duration: 1.5,
        })
        .to(
          '.about .sub-tit',
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
          },
          '-=1',
        )
        .to(
          '.about .info',
          {
            opacity: 1,
            y: 0,
            duration: 1.3,
          },
          '-=1',
        );

      gsap.to('.about .history-item', {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about .history-list',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="about" ref={containerRef}>
      <div className="about__inner">
        <h2 className="sub-tit mono">{aboutText.stit}</h2>

        <div className="introduce">
          <div className="text-wrap">
            <div className="info">
              <p>{aboutText.info[0]}</p>
              <p>{aboutText.info[1]}</p>
              <p>{aboutText.info[2]}</p>
              <p>{aboutText.info[3]}</p>
            </div>
          </div>
          <div className="img-wrap">
            <Image
              src={aboutText.img}
              alt="민주 그림체 프로필 사진"
              style={{ width: '100%', height: '100%' }}
              priority
            />
          </div>
        </div>

        <ul className="history">
          <li className="history__item">
            <h3 className="mono">
              <FontAwesomeIcon icon={aboutText.history[0].icon} className="icon" />
              {aboutText.history[0].tit}
            </h3>
            <div className="cont">
              {aboutText.history[0].list.map((item, index) => (
                <div key={index} className="cont-wrap">
                  <div>
                    <h4 className="name">{item.name}</h4>
                    <span className="date mono">{item.date}</span>
                  </div>
                  <p className="desc">{item.desc}</p>
                  {item.link && (
                    <a
                      href={item.link.url}
                      className="link"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor
                      data-cursor-size="50"
                    >
                      <FontAwesomeIcon icon={faLink} className="icon" />
                      {item.link.label}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </li>

          <li className="history__group">
            {aboutText.history.slice(1).map((history, index) => (
              <div key={index} className="history__item">
                <h3 className="mono">
                  <FontAwesomeIcon icon={history.icon} className="icon" />
                  {history.tit}
                </h3>
                <div className="cont">
                  {history.list.map((item, idx) => (
                    <div key={idx} className="cont-wrap">
                      <div>
                        <h4 className="name">{item.name}</h4>
                        <span className="date mono">{item.date}</span>
                      </div>
                      <p className="desc">{item.desc}</p>
                      {item.link && (
                        <a
                          href={item.link.url}
                          className="link"
                          target="_blank"
                          rel="noopener noreferrer"
                          data-cursor
                          data-cursor-size="50"
                        >
                          <FontAwesomeIcon icon={faLink} className="icon" />
                          {item.link.label}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
