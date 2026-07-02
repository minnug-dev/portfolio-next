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
                  <a key={idx} href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
