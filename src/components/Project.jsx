import React from 'react';

import { projectText } from '@/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const project = () => {
  return (
    <section id="project">
      <div className="project__inner">
        <h2 className="sub-tit">projects</h2>
        <div className="project-list">
          {projectText.map((project, index) => (
            <article className={`project-item s${index + 1}`} key={index}>
              <div className="text">
                <h3>{project.text.title}</h3>
                <h4>{project.text.subTitle}</h4>
                <p>{project.text.desc}</p>
              </div>
              <div className="btn">
                {project.buttons.map((button, index) => (
                  <a key={index} href={button.href} target="_blank" rel="noopener noreferrer">
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

export default project;
