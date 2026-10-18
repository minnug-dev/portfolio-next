import Image from 'next/image';
import { aboutText } from '@/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

// desc가 배열이면 목록(ul), 문자열이면 문단(p)으로 렌더링
const Desc = ({ desc }: { desc: string | string[] }) => {
  if (Array.isArray(desc)) {
    return (
      <ul className="desc desc__list">
        {desc.map((text, i) => (
          <li key={i}>{text}</li>
        ))}
      </ul>
    );
  }
  return <p className="desc">{desc}</p>;
};

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__inner">
        <h2 className="sub-tit mono">{aboutText.stit}</h2>

        <div className="introduce">
          <div className="text-wrap">
            <div className="info">
              {aboutText.info.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </div>
          <div className="img-wrap">
            <Image
              src={aboutText.img}
              alt="민주 그림체 프로필 사진"
              style={{ width: '100%', height: '100%' }}
              priority
            />
          </div>
        </div>

        <ul className="history">
          <li className="history__item">
            <h3 className="mono">
              <FontAwesomeIcon icon={aboutText.history[0].icon} className="icon" />
              {aboutText.history[0].tit}
            </h3>
            <div className="cont">
              {aboutText.history[0].list.map((item, index) => (
                <div key={index} className="cont-wrap">
                  <div>
                    <h4 className="name">{item.name}</h4>
                    <span className="date mono">{item.date}</span>
                  </div>
                  <Desc desc={item.desc} />

                  {/* {item.link && (
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
                  )} */}
                </div>
              ))}
            </div>
          </li>

          <li className="history__group">
            {aboutText.history.slice(1).map((history, index) => (
              <div key={index} className="history__item">
                <h3 className="mono">
                  <FontAwesomeIcon icon={history.icon} className="icon" />
                  {history.tit}
                </h3>
                <div className="cont">
                  {history.list.map((item, idx) => (
                    <div key={idx} className="cont-wrap">
                      <div>
                        <h4 className="name">{item.name}</h4>
                        <span className="date mono">{item.date}</span>
                      </div>
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
                  ))}
                </div>
              </div>
            ))}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
