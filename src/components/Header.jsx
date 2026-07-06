import React, { useState, useEffect } from 'react';
import { headerNav } from '@/constants';
import gsap from 'gsap';

const Header = () => {
  useEffect(() => {
    const items = document.querySelectorAll('.header__nav li');

    const cleanups = [];

    items.forEach((item) => {
      const link = item.querySelector('a');
      const dot = item.querySelector('.dot');

      const enter = () => {
        gsap.killTweensOf([link, dot]);

        const tl = gsap.timeline();

        // 점 start
        tl.to(dot, {
          scale: 1,
          opacity: 1,
          duration: 0.15,
          ease: 'back.out(3)',
        });

        tl.to(
          [link, dot],
          {
            y: 5,
            duration: 0.1,
            ease: 'power1.in',
          },
          0,
        )
          .to([link, dot], {
            y: -3,
            duration: 0.15,
            ease: 'power2.out',
          })
          .to([link, dot], {
            y: 0,
            duration: 0.15,
            ease: 'power2.out',
          });
      };

      const leave = () => {
        gsap.to(dot, {
          scale: 0,
          opacity: 0,
          duration: 0.2,
        });
      };

      item.addEventListener('mouseenter', enter);
      item.addEventListener('mouseleave', leave);

      cleanups.push(() => {
        item.removeEventListener('mouseenter', enter);
        item.removeEventListener('mouseleave', leave);
      });
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <header id="header" className="header" role="banner">
      <div className="header__inner">
        <div className="header__logo">
          <h1>
            <a href="#">minjoo</a>
          </h1>
        </div>
        <nav className={`header__nav ${show ? 'show' : ''}`} role="navigation" aria-label="메인 메뉴">
          <ul>
            {headerNav.map((nav, key) => (
              <li key={key}>
                <span className="dot"></span>
                <a href={nav.url} data-cursor data-cursor-size="50">
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div
          className="header__nav__mobile"
          id="headerToggle"
          aria-controls="primary-menu"
          aria-expanded={show ? 'true' : 'false'}
          role="button"
          tabIndex={0}
          onClick={toggleMenu}
        >
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
