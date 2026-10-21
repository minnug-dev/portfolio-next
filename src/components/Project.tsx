'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade, Navigation, A11y } from 'swiper/modules';
import { projectText } from '@/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faScrewdriverWrench, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const Project = () => {
  return (
    <section id="project" className="project">
      <div className="project__inner">
        <h2 className="sub-tit mono">{projectText.stit}</h2>
        <div className="project__list">
          <Swiper
            modules={[Pagination, EffectFade, Navigation, A11y]}
            slidesPerView={1}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={500}
            loop
            grabCursor
            pagination={{
              el: '.project-pagination',
              clickable: true,
              bulletClass: 'project-bullet',
              bulletActiveClass: 'project-bullet--active',
            }}
            navigation={{
              prevEl: '.project-nav-prev',
              nextEl: '.project-nav-next',
            }}
            a11y={{
              prevSlideMessage: '이전 프로젝트',
              nextSlideMessage: '다음 프로젝트',
              paginationBulletMessage: '{{index}}번째 프로젝트로 이동',
            }}
            className="project-swiper"
          >
            {projectText.list.map((project, index) => (
              <SwiperSlide key={project.slug}>
                <article className={`list__item s${index + 1}`}>
                  <div className="img-wrap">
                    <Image
                      src={project.img.src}
                      alt={project.img.alt}
                      fill
                      sizes="(max-width: 480px) 100vw, 416px"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="text-wrap">
                    <div>
                      <div className="label">
                        <span className="name">{project.info.name}</span>
                      </div>
                      <div className="text">
                        <h3>{project.text.tit}</h3>
                        <h4>{project.text.subTitle}</h4>
                        <p>{project.text.desc}</p>
                      </div>
                      <div className="btn">
                        {project.buttons.map((button) => (
                          <a
                            key={button.href}
                            href={button.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-cursor
                            data-cursor-size="50"
                          >
                            <FontAwesomeIcon icon={button.icon} className="icon" />
                            <span className="mono">{button.text}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                    <div className="info mono">
                      <span className="date">
                        <FontAwesomeIcon icon={faCalendar} className="icon" />
                        {project.info.date}
                      </span>
                      <span className="stack">
                        <FontAwesomeIcon icon={faScrewdriverWrench} className="icon" />
                        {project.info.stack}
                      </span>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}

            <div className="project-pagination"></div>
          </Swiper>
          <button type="button" className="project-nav-prev" aria-label="이전 프로젝트">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button type="button" className="project-nav-next" aria-label="다음 프로젝트">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Project;
