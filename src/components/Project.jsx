import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { projectText } from '@/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Project = () => {
  const containerRef = useRef(null);
  const lastMousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const hideAllImages = () => {
      const allImages = container.querySelectorAll('.hover-img');
      allImages.forEach((img) => {
        img.style.opacity = '0';
        img.style.transform = 'translateY(-50%) scale(0.8)';
      });
    };

    const updateHoverImage = () => {
      const { x, y } = lastMousePos.current;

      const elementAtMouse = document.elementFromPoint(x, y);
      if (!elementAtMouse) return;

      const currentItem = elementAtMouse.closest('.project-item');

      hideAllImages(); //

      if (currentItem) {
        const hoverImg = currentItem.querySelector('.hover-img');
        if (hoverImg) {
          hoverImg.style.left = `${x + 20}px`;
          hoverImg.style.top = `${y}px`;

          hoverImg.style.opacity = '1';
          hoverImg.style.transform = 'translateY(15px) scale(1)';
        }
      }
    };

    const handleMouseMove = (e) => {
      lastMousePos.current = { x: e.clientX, y: e.clientY };
      updateHoverImage();
    };

    const handleScroll = () => {
      updateHoverImage();
    };

    const handleMouseLeave = () => {
      hideAllImages();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section id="project">
      <div className="project__inner" ref={containerRef}>
        <h2 className="sub-tit">projects</h2>
        <div className="project-list">
          {projectText.map((project, index) => (
            <article className={`project-item s${index + 1}`} key={index}>
              <div className="hover-img">
                <Image
                  src={project.img.src}
                  alt={project.img.alt}
                  width={350}
                  height={220}
                  style={{ width: 'auto', height: 'auto' }}
                />
              </div>
              <div className="text">
                <h3>{project.text.title}</h3>
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
                    <span>{button.text}</span>
                  </a>
                ))}
              </div>
              <div className="info">
                <span className="name">{project.info.name}</span>
                <span className="date">{project.info.date}</span>
                <span className="stack">
                  <FontAwesomeIcon icon={project.info.icon} className="icon" />
                  {project.info.stack}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
