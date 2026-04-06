import Image from 'next/image';
import React from 'react';

import { aboutText } from '@/constants';

const about = () => {
  return (
    <section id="about">
      <div className="about__inner">
        <h2 className="about__title">{aboutText.title}</h2>
        <div className="about__lines" aria-hidden="true">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <div className="about__text">
          <div className="text">
            <div>{aboutText.desc[0]}</div>
            <div>{aboutText.desc[1]}</div>
            <div>{aboutText.desc[2]}</div>
            <div>effort</div>
          </div>
          <div className="img">
            <Image
              src={aboutText.img}
              alt="어바웃미"
              width={300}
              height={300}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
        <div className="about__lines bottom" aria-hidden="true">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </section>
  );
};

export default about;
