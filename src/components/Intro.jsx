import React from 'react';

import { introText } from '@/constants';

const intro = () => {
  return (
    <section id="intro">
      <div className="intro__inner">
        <h2 className="visually-hidden ">박민주 포트폴리오 인트로</h2>
        <div className="intro__title wrap">
          <div>
            <span className="text">{introText.text}</span>
            <div className="tit">
              <p>{introText.tit[0]}</p>
              <p>{introText.tit[1]}</p>
              <p>{introText.tit[2]}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default intro;
