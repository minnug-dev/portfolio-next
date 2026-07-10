import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { contactText } from '@/constants';
import { scrollToTarget } from '@/utils/scrollTo';
import { useNav } from '@/contexts/NavContext';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef(null);
  const triggerRef = useRef(null);
  const { setActiveLink } = useNav();

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: triggerRef.current,
        start: 'bottom bottom',
        end: 'bottom top',
        toggleClass: {
          targets: '.header__logo',
          className: 'contact-active',
        },
      });

      ScrollTrigger.create({
        trigger: triggerRef.current,
        start: 'bottom bottom',
        end: 'bottom top',
        onEnter: () => setActiveLink('#contact'),
        onEnterBack: () => setActiveLink('#contact'),
      });
    });

    return () => ctx.revert();
  }, []);

  const handleLinkClick = (e, url) => {
    if (!url || !url.startsWith('#') || url === '#') return;

    e.preventDefault();
    setActiveLink(url);

    const headerEl = document.getElementById('header');
    const headerHeight = headerEl?.offsetHeight || 0;

    if (url === '#contact') {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

      window.scrollTo({
        top: maxScroll,
        behavior: 'smooth',
      });
    } else {
      scrollToTarget(url, {
        offsetY: -headerHeight,
      });
    }
  };

  return (
    <>
      <div ref={triggerRef} id="contact" className="contact-trigger visually-hidden" aria-hidden="true" />

      <section className="contact" ref={contactRef}>
        <div className="contact__inner">
          <div className="contact__cont">
            <div>
              <h2 className="sub-tit">Contact</h2>
              <span className="name">{contactText.name}</span>
            </div>
            <div className="info">
              {contactText.contact.map((link, index) => (
                <div key={index} className="menu">
                  <h3>{link.tit}</h3>
                  {link.links.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.link}
                      target={item.link.startsWith('#') ? undefined : '_blank'}
                      rel={item.link.startsWith('#') ? undefined : 'noopener noreferrer'}
                      onClick={(e) => handleLinkClick(e, item.link)}
                      data-cursor
                      data-cursor-size="50"
                    >
                      {item.name}
                    </a>
                  ))}
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
