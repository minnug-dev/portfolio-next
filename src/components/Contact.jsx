import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { contactText } from '@/constants';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: contactRef.current,
        start: 'top top',
        end: 'bottom center',
        toggleClass: {
          targets: 'header',
          className: 'contact-active',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" className="contact" ref={contactRef}>
      <div className="contact__inner">
        <h2 className="sub-tit">Contact</h2>
        <div className="contact__text">
          <p className="txt">{contactText.txt}</p>
          <div className="text">
            {contactText.items.map((contact, key) => (
              <div key={key}>
                <a href={contact.link} target="_blank">
                  {contact.title}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
