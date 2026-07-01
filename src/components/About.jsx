import Image from 'next/image';
import React from 'react';

import { aboutText } from '@/constants';

const about = () => {
  return (
    <section id="about" className="about">
      <div className="about__inner">
        <div className="introduce">
          <div className="img-wrap">
            <Image
              src={aboutText.img}
              alt="민주 그림체 프로필 사진"
              style={{ width: '100%', height: '100%' }}
              priority
            />
          </div>
          <div className="txt-wrap">
            <h2 className="sub-tit">{aboutText.stit}</h2>
            <div className="desc">
              <p>{aboutText.desc[0]}</p>
              <p>{aboutText.desc[1]}</p>
              <p>{aboutText.desc[2]}</p>
              <p>{aboutText.desc[3]}</p>
            </div>
          </div>
        </div>
        <ul className="history-list">
          {aboutText.history.map((history, index) => (
            <li key={index} className="history-item">
              <h3>{history.title}</h3>
              <div className="item">
                {history.list.map((item, idx) => (
                  <div key={idx}>
                    <span className="date">{item.date}</span>
                    <div className="txt-wrap">
                      <h4 className="name">{item.name}</h4>
                      <p className="desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default about;
