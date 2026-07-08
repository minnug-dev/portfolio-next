import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { contactText } from '@/constants';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: triggerRef.current,
        start: 'bottom bottom',
        end: 'bottom top',
        markers: true,
        toggleClass: {
          targets: '.header__logo',
          className: 'contact-active',
        },
      });
    });

    return () => ctx.revert();
  }, []);

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
                  <h3>{link.title}</h3>
                  {link.links.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
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
