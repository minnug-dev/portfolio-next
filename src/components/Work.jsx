import Image from 'next/image';
import { workText } from '@/constants';
const Work = () => {
  return (
    <section id="work" className="work">
      <div className="work__inner">
        <h2 className="sub-tit mono">{workText.stit}</h2>
        <div className="work-list">
          {workText.list.map((work, index) => (
            <div key={index} className="list-item">
              <a href={work.link} target="_blank" data-cursor data-cursor-size="60" data-cursor-text="↗">
                <div className="img-wrap">
                  <Image src={work.img} alt={work.imgDesc} style={{ width: '100%', height: 'auto' }} />
                </div>

                <h3>{work.tit}</h3>
                <p>{work.desc}</p>
                <div className="tool-wrap">
                  {work.tool.map((tool, index) => (
                    <span className="mono" key={index}>
                      {tool}
                    </span>
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

export default Work;
