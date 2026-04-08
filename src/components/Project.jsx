import React from 'react';

import { projectText } from '@/constants';

const project = () => {
  return (
    <section id="project">
      <div className="project__inner">
        <h2 className="project__title">
          project Coding <em>나의 작업물</em>
        </h2>
        <div className="project__wrap">
          {projectText.map((project, key) => (
            <article className={`project__item s${key + 1}`} key={key}>
              <span className="num">{key + 1}.</span>
              <div className="text">
                <div>{project.text[0]}</div>
                <div>{project.text[1]}</div>
                <div>{project.text[2]}</div>
              </div>
              <h3 className="title">{project.title}</h3>
              <div className="btn">
                <a href={project.code}>code</a>
                <a href={project.view}>view</a>
              </div>
              <div className="info">
                <span>{project.info[0]}</span>
                <span>{project.info[1]}</span>
                <span>{project.info[2]}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default project;
