import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade } from 'swiper/modules';
import { projectText } from '@/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';

import 'swiper/css';
import 'swiper/css/pagination';

const Project = () => {
  return (
    <section id="project" className="project">
      <div className="project__inner">
        <h2 className="sub-tit mono">{projectText.stit}</h2>
        <div className="project__list">
          <Swiper
            modules={[Pagination, EffectFade]}
            slidesPerView={1}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={1500}
            loop={true}
            grabCursor={true}
            mousewheel={{
              invert: false,
            }}
            pagination={{
              el: '.project-pagination',
              clickable: true,
              bulletClass: 'project-bullet',
              bulletActiveClass: 'project-bullet--active',
            }}
            className="project-swiper"
          >
            {projectText.list.map((project, index) => (
              <SwiperSlide key={index}>
                <article className={`list__item s${index + 1}`} key={index}>
                  <div className="img-wrap">
                    <Image src={project.img.src} alt={project.img.alt} style={{ width: '100%', height: '100%' }} />
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
                        {project.buttons.map((button, index) => (
                          <a
                            key={index}
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
        </div>
      </div>
    </section>
  );
};

export default Project;
