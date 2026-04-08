import React from 'react';

import { workText } from '@/constants';

const work = () => {
  return (
    <section id="work">
      <div className="work__inner">
        <h2 className="work__title">
          challenge <em>나의 도전</em>
        </h2>
        <div className="work__desc">
          {workText.map((work, key) => (
            <div key={key}>
              <span>{key + 1}.</span>
              <h3>{work.title}</h3>
              <p>{work.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default work;
