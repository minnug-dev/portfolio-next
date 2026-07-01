import Image from 'next/image';
import React from 'react';

import { workText } from '@/constants';

const work = () => {
  return (
    <section id="work">
      <div className="work__inner">
        <h2 className="sub-tit">Work</h2>
        <div className="work-list">
          {workText.map((work, key) => (
            <div key={key} className="list-item">
              <a href={work.link} target="_blank">
                <div className="img-wrap">
                  <Image src={work.img} alt={work.imgDesc} style={{ width: '100%', height: 'auto' }} />
                </div>
                <h3>{work.title}</h3>
                <p>{work.desc}</p>
                <div className="tool-wrap">
                  {work.tool.map((tool, index) => (
                    <span key={index}>{tool}</span>
                  ))}
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default work;
