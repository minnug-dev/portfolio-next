import Image from 'next/image';
import React from 'react';

import { aboutText } from '@/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const About = () => {
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
          <div className="text-wrap">
            <h2 className="sub-tit">{aboutText.stit}</h2>
            <div className="info">
              <p>{aboutText.info[0]}</p>
              <p>{aboutText.info[1]}</p>
              <p>{aboutText.info[2]}</p>
              <p>{aboutText.info[3]}</p>
            </div>
          </div>
        </div>
        <ul className="history-list">
          {aboutText.history.map((history, index) => (
            <li key={index} className="history-item">
              <h3>
                <FontAwesomeIcon icon={history.icon} className="icon" />
                {history.tit}
              </h3>
              <div className="item">
                {history.list.map((item, index) => (
                  <div key={index}>
                    <span className="date">{item.date}</span>
                    <div className="text-wrap">
                      <h4 className="name">{item.name}</h4>
                      <p className="desc">{item.desc}</p>
                      {item.link && (
                        <a
                          href={item.link.url}
                          className="link"
                          target="_blank"
                          rel="noopener noreferrer"
                          data-cursor
                          data-cursor-size="50"
                        >
                          <FontAwesomeIcon icon={faLink} className="icon" />
                          {item.link.label}
                        </a>
                      )}
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

export default About;
