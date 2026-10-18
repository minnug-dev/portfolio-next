'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { NavProvider, useNav } from '@/contexts/NavContext';
import { DetailPageProps, DetailBlock } from '@/constants/detail';
import Header from '@/components/Header';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

const renderBlock = (block: DetailBlock, i: number) => {
  switch (block.type) {
    case 'subtit':
      return (
        <h3 className="detail__subtit" key={i}>
          {block.text}
        </h3>
      );

    case 'paragraphs':
      return (
        <div className="detail__text" key={i}>
          {block.items.map((text, k) => (
            <p key={k}>{text}</p>
          ))}
        </div>
      );

    case 'list':
      return (
        <ul className="detail__list" key={i}>
          {block.items.map((text, k) => (
            <li key={k}>{text}</li>
          ))}
        </ul>
      );

    case 'cards':
      return (
        <div className="detail__cards" key={i}>
          {block.items.map((card, k) => (
            <div className="card" key={k}>
              <h3>{card.tit}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      );

    case 'images':
      return (
        <div className="detail__images" key={i}>
          {block.items.map((image, k) => (
            <figure key={k}>
              <Image src={image.src} alt={image.alt} sizes="(max-width: 1024px) 100vw, 900px" />
              {image.caption && <figcaption>{image.caption}</figcaption>}
            </figure>
          ))}
        </div>
      );
  }
};

const DetailArticle = ({ data }: { data: DetailPageProps }) => {
  const rootRef = useRef<HTMLElement | null>(null);
  const { setActiveLink } = useNav();
  const navLink = data.category === 'Work' ? '#work' : '#project';

  useEffect(() => {
    setActiveLink(navLink);

    const spy = ScrollTrigger.create({
      trigger: rootRef.current,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => setActiveLink(navLink),
      onEnterBack: () => setActiveLink(navLink),
    });

    return () => {
      spy.kill();
    };
  }, [navLink, setActiveLink]);

  return (
    <article className="detail" ref={rootRef}>
      <div className="detail__inner">
        <Link href={data.backHref} className="detail__back" data-cursor data-cursor-size="50">
          <FontAwesomeIcon icon={faArrowLeft} className="icon" />
          모든 프로젝트 보기
        </Link>

        <header className="detail__head">
          <h1>{data.title}</h1>
          {data.subtitle && <p className="detail__sub">{data.subtitle}</p>}
          <p className="detail__desc">{data.desc}</p>

          {data.links.length > 0 && (
            <div className="detail__btns">
              {data.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor
                  data-cursor-size="50"
                >
                  <FontAwesomeIcon icon={link.icon} className="icon" />
                  <span className="mono">{link.text}</span>
                </a>
              ))}
            </div>
          )}
        </header>

        {/* {!data.hideHero && (
          <figure className="detail__hero">
            <Image src={data.img} alt={data.imgAlt} priority sizes="(max-width: 1200px) 100vw, 1200px" />
          </figure>
        )} */}

        {data.images && data.images.length > 0 && (
          <div className={`detail__shots ${data.imagesClass ?? ''}`}>
            {data.images.map((image) => (
              <figure key={image.alt}>
                <Image src={image.src} alt={image.alt} sizes="(max-width: 1024px) 100vw, 900px" />
                {image.caption && <figcaption>{image.caption}</figcaption>}
              </figure>
            ))}
          </div>
        )}

        <div className="detail__info">
          {data.meta.length > 0 && (
            <dl className="detail__meta">
              {data.meta.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd className={item.className}>{item.value}</dd>
                </div>
              ))}
            </dl>
          )}
          {/* <ul className="detail__tags" aria-label="사용 기술 및 도구">
            {data.tags.map((tag) => (
              <li className="mono" key={tag}>
                {tag}
              </li>
            ))}
          </ul> */}
        </div>

        {data.sections.length > 0 && (
          <div className="detail__body">
            {data.sections.map((section, i) => (
              <section className="detail__section" key={section.tit}>
                <h2>
                  <span className="num mono">{String(i + 1).padStart(2, '0')}</span>
                  {section.tit}
                </h2>
                <div className="detail__content">
                  {section.blocks ? (
                    section.blocks.map(renderBlock)
                  ) : (
                    <>
                      {section.paragraphs?.map((text, k) => (
                        <p key={k}>{text}</p>
                      ))}

                      {section.subtit && <h3 className="detail__subtit">{section.subtit}</h3>}

                      {section.list && (
                        <ul className="detail__list">
                          {section.list.map((text, k) => (
                            <li key={k}>{text}</li>
                          ))}
                        </ul>
                      )}

                      {section.cards && (
                        <div className="detail__cards">
                          {section.cards.map((card) => (
                            <div className="card" key={card.tit}>
                              <h3>{card.tit}</h3>
                              <p>{card.desc}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {section.images?.map((image) => (
                        <figure key={image.alt}>
                          <Image src={image.src} alt={image.alt} sizes="(max-width: 1024px) 100vw, 900px" />
                          {image.caption && <figcaption>{image.caption}</figcaption>}
                        </figure>
                      ))}
                    </>
                  )}
                </div>
              </section>
            ))}
          </div>
        )}

        {(data.prev || data.next) && (
          <nav className="detail__pager" aria-label={`다른 ${data.category} 보기`}>
            {data.prev && (
              <Link href={data.prev.href} className="prev" data-cursor data-cursor-size="50">
                <span className="label">
                  <FontAwesomeIcon icon={faArrowLeft} className="icon" />
                  이전 프로젝트
                </span>
                <strong>{data.prev.title}</strong>
              </Link>
            )}
            {data.next && (
              <Link href={data.next.href} className="next" data-cursor data-cursor-size="50">
                <span className="label">
                  다음 프로젝트
                  <FontAwesomeIcon icon={faArrowRight} className="icon" />
                </span>
                <strong>{data.next.title}</strong>
              </Link>
            )}
          </nav>
        )}
      </div>
    </article>
  );
};

const DetailPage = ({ data }: { data: DetailPageProps }) => {
  return (
    <NavProvider>
      <Header />
      <main className="main" role="main">
        <DetailArticle data={data} />
        <Contact />
      </main>
      <Footer />
    </NavProvider>
  );
};

export default DetailPage;
