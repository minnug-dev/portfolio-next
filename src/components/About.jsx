import Image from 'next/image';
import React from 'react';

import { aboutText } from '@/constants';

const about = () => {
  return (
    <section id="about" className="about">
      <div className="about__inner">
        <div className="img-wrap">
          <Image src={aboutText.img} alt="민주 그림체 프로필 사진" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="text-wrap">
          <h3 className="sub-tit">{aboutText.stit}</h3>
          <div className="desc">
            <p>{aboutText.desc[0]}</p>
            <p>{aboutText.desc[1]}</p>
            <p>{aboutText.desc[2]}</p>
            <p>{aboutText.desc[3]}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
