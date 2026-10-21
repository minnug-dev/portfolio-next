import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { NavProvider } from '@/contexts/NavContext';
import { DetailPageProps, DetailBlock, DetailImage } from '@/constants/detail';
import Header from '@/components/Header';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import DetailScrollSpy from '@/components/DetailScrollSpy';

const IMAGE_SIZES = '(max-width: 1024px) 100vw, 900px';

const DetailFigure = ({ image }: { image: DetailImage }) => (
  <figure>
    <Image src={image.src} alt={image.alt} placeholder="blur" sizes={IMAGE_SIZES} />
    {image.caption && <figcaption>{image.caption}</figcaption>}
  </figure>
);

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
          {block.items.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
      );

    case 'list':
      return (
        <ul className="detail__list" key={i}>
          {block.items.map((text) => (
            <li key={text}>{text}</li>
          ))}
        </ul>
      );

    case 'cards':
      return (
        <div className="detail__cards" key={i}>
          {block.items.map((card) => (
            <div className="card" key={card.tit}>
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
            <DetailFigure image={image} key={`${image.alt}-${k}`} />
          ))}
        </div>
      );
  }
};

const DetailPage = ({ data }: { data: DetailPageProps }) => {
  const navLink = data.category === 'Work' ? '#work' : '#project';

  return (
    <NavProvider>
      <Header />
      <main id="main" className="main">
        <DetailScrollSpy navLink={navLink}>
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

            {data.images && data.images.length > 0 && (
              <div className={`detail__shots ${data.imagesClass ?? ''}`}>
                {data.images.map((image, i) => (
                  <DetailFigure image={image} key={`${image.alt}-${i}`} />
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
            </div>

            {data.sections.length > 0 && (
              <div className="detail__body">
                {data.sections.map((section, i) => (
                  <section className="detail__section" key={section.tit}>
                    <h2>
                      <span className="num mono">{String(i + 1).padStart(2, '0')}</span>
                      {section.tit}
                    </h2>
                    <div className="detail__content">{section.blocks.map(renderBlock)}</div>
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
        </DetailScrollSpy>
        <Contact />
      </main>
      <Footer />
    </NavProvider>
  );
};

export default DetailPage;
