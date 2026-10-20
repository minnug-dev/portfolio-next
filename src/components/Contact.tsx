import { useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { contactText } from '@/constants';
import { scrollToTarget } from '@/utils/scrollTo';
import { useNav } from '@/contexts/NavContext';
import { resolveNavHref } from '@/utils/navLink';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef<HTMLElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const { setActiveLink } = useNav();
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === '/';

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

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    if (!url || !url.startsWith('#') || url === '#') return;

    e.preventDefault();
    setActiveLink(url);

    // 상세 페이지에서는 홈의 해당 섹션으로 이동
    if (!isHome && url !== '#contact') {
      router.push(resolveNavHref(url, false));
      return;
    }

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
              <h2 className="sub-tit mono">{contactText.stit}</h2>
              <a href="mailto:parkminnug@gmail.com">
                <span className="name">{contactText.name}</span>
              </a>
            </div>
            <div className="info">
              {contactText.contact.map((link, index) => (
                <div key={index} className="menu">
                  <h3 className="mono">{link.tit}</h3>
                  <ul>
                    {link.links.map((item, idx) => (
                      <li key={idx}>
                        <a
                          className="mono"
                          href={resolveNavHref(item.link, isHome)}
                          target={item.link.startsWith('#') ? undefined : '_blank'}
                          rel={item.link.startsWith('#') ? undefined : 'noopener noreferrer'}
                          onClick={(e) => handleLinkClick(e, item.link)}
                          data-cursor
                          data-cursor-size="50"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
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
