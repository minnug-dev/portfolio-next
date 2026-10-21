import Image from 'next/image';
import { aboutText } from '@/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

type HistoryEntryData = {
  date: string;
  name: string;
  desc: string | string[];
  link?: { url: string; label: string };
};

// desc가 배열이면 목록(ul), 문자열이면 문단(p)으로 렌더링
const Desc = ({ desc }: { desc: string | string[] }) => {
  if (Array.isArray(desc)) {
    return (
      <ul className="desc desc__list">
        {desc.map((text) => (
          <li key={text}>{text}</li>
        ))}
      </ul>
    );
  }
  return <p className="desc">{desc}</p>;
};

const HistoryEntry = ({ item, showLink }: { item: HistoryEntryData; showLink: boolean }) => (
  <div className="cont-wrap">
    <div>
      <h4 className="name">{item.name}</h4>
      <span className="date mono">{item.date}</span>
    </div>
    <Desc desc={item.desc} />
    {showLink && item.link && (
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
);

const About = () => {
  // 첫 번째 그룹(Experience)은 전체 너비, 나머지(Education·Certifications)는 한 줄에 묶어서 배치
  const [experience, ...others] = aboutText.history;

  return (
    <section id="about" className="about">
      <div className="about__inner">
        <h2 className="sub-tit mono">{aboutText.stit}</h2>

        <div className="introduce">
          <div className="text-wrap">
            <div className="info">
              {aboutText.info.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
          </div>
          <div className="img-wrap">
            <Image src={aboutText.img} alt="민주 그림체 프로필 사진" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>

        <ul className="history">
          <li className="history__item">
            <h3 className="mono">
              <FontAwesomeIcon icon={experience.icon} className="icon" />
              {experience.tit}
            </h3>
            <div className="cont">
              {experience.list.map((item) => (
                <HistoryEntry key={item.name} item={item} showLink={false} />
              ))}
            </div>
          </li>

          <li className="history__group">
            {others.map((history) => (
              <div key={history.tit} className="history__item">
                <h3 className="mono">
                  <FontAwesomeIcon icon={history.icon} className="icon" />
                  {history.tit}
                </h3>
                <div className="cont">
                  {history.list.map((item) => (
                    <HistoryEntry key={`${item.name}-${item.date}`} item={item} showLink />
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
