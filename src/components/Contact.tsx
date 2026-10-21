'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { contactText } from '@/constants';
import { CONTACT_EMAIL } from '@/constants/site';
import { useNav } from '@/contexts/NavContext';
import { useSectionNav } from '@/utils/useSectionNav';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const { setActiveLink } = useNav();
  const { getHref, handleAnchorClick } = useSectionNav();

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: triggerRef.current,
        start: 'bottom bottom',
        end: 'bottom top',
        toggleClass: {
          targets: '.header__logo, .header__util',
          className: 'contact-active',
        },
        onEnter: () => setActiveLink('#contact'),
        onEnterBack: () => setActiveLink('#contact'),
      });
    });

    return () => ctx.revert();
  }, [setActiveLink]);

  return (
    <>
      <div ref={triggerRef} id="contact" className="contact-trigger visually-hidden" aria-hidden="true" />

      <section className="contact" aria-labelledby="contact-title">
        <div className="contact__inner">
          <div className="contact__cont">
            <div>
              <h2 id="contact-title" className="sub-tit mono">
                {contactText.stit}
              </h2>
              <a href={`mailto:${CONTACT_EMAIL}`}>
                <span className="name">{contactText.name}</span>
              </a>
            </div>
            <div className="info">
              {contactText.contact.map((group) => (
                <div key={group.tit} className="menu">
                  <h3 className="mono">{group.tit}</h3>
                  <ul>
                    {group.links.map((item) => {
                      const isExternal = /^https?:\/\//.test(item.link);

                      return (
                        <li key={item.link}>
                          <a
                            className="mono"
                            href={getHref(item.link)}
                            target={isExternal ? '_blank' : undefined}
                            rel={isExternal ? 'noopener noreferrer' : undefined}
                            onClick={(e) => handleAnchorClick(e, item.link)}
                            data-cursor
                            data-cursor-size="50"
                          >
                            {item.name}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
