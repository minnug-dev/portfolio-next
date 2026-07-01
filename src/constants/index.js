import visual from '../assets/img/visual.png';
import work01 from '../assets/img/work_chunjae.webp';
import work02 from '../assets/img/work_meplz_sales.png';
import work03 from '../assets/img/work_meplz_people.png';
import work04 from '../assets/img/work_meplz_consoli.png';
import work05 from '../assets/img/work_meplz_hyundai.png';
import work06 from '../assets/img/work_meplz_valex.png';
import { faGithub, faNotion } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';

export const headerNav = [
  {
    title: 'About',
    url: '#about',
  },
  {
    title: 'Work',
    url: '#work',
  },
  {
    title: 'Projects',
    url: '#project',
  },
  {
    title: 'Contact',
    url: '#contact',
  },
];

export const introText = {
  text: 'HELLO THERE!👋🏻',
  tit: ['I’m Minjoo Park,', 'Welcome to', 'my web portfolio!'],
};

export const aboutText = {
  img: visual,
  stit: 'about me',
  desc: [
    '안녕하세요! 웹 퍼블리셔 박민주입니다.',
    '사용자가 편안하게 이용할 수 있는 인터페이스를 만드는 일에 즐거움을 느끼며, 웹 표준과 접근성을 기반으로 완성도 높은 화면을 구현하고 있습니다.',
    'HTML, CSS, JavaScript는 물론 Vue.js와 React, Next.js 환경에서도 컴포넌트 단위의 마크업 작업이 가능하며, 백엔드 개발자와의 협업 및 API 연동 경험을 통해 서비스 전반에 대한 이해를 넓혀왔습니다.',
    '프로젝트의 목적과 사용자 경험을 함께 고민하며, 원활한 협업을 바탕으로 더 나은 결과물을 만드는 것을 중요하게 생각합니다. 현재는 퍼블리싱 역량을 기반으로 프론트엔드 개발 역량까지 꾸준히 확장해 나가고 있습니다.',
  ],
  history: [
    {
      title: 'Experience',
      list: [
        {
          date: '2014.11 - 2025.04',
          name: '천재교과서',
          desc: '교육 플랫폼 밀크T의 웹·태블릿·모바일 서비스를 중심으로 다양한 학습 콘텐츠 UI를 구축하고 서비스 운영 및 고도화에 참여했습니다.',
        },
        {
          date: '2019.09 - 2023.01',
          name: '미플즈',
          desc: '다양한 고객사 프로젝트에서 Vue.js, React 등 여러 프레임워크 환경의 반응형 웹을 퍼블리싱하며 기획자·디자이너·개발자와 긴밀하게 협업하여 사용자 중심의 UI를 구현했습니다.',
        },
      ],
    },
    {
      title: 'Education',
      list: [
        {
          date: '2024.02 - 2024.09',
          name: '프론트엔드 개발 부트캠프 8기 - 패스트캠퍼스',
          desc: '실무형 협업 프로젝트를 통해 기획자·디자이너·백엔드 개발자와 협업하고 API 연동을 경험하며 프론트엔드 개발 역량을 확장했습니다.',
        },
        {
          date: '2019.03 - 2019.09',
          name: '스마트웹디자인 & 프론트엔드 - 이젠아카데미컴퓨터학원',
          desc: '웹 기획, UI 디자인, 퍼블리싱을 학습하며 웹 서비스 제작 전 과정을 경험하고 사용자 중심의 웹 제작 프로세스를 익혔습니다.',
        },
        {
          date: '2013.03 - 2017.02',
          name: '동덕여자대학교',
          desc: '아동학 학사',
        },
      ],
    },
    {
      title: 'Certifications',
      list: [
        {
          date: '2023.09',
          name: '정보처리기사',
          desc: '한국산업인력공단',
        },
        {
          date: '2019.06',
          name: '웹디자인기능사',
          desc: '한국산업인력공단',
        },
        {
          date: '2019.06',
          name: '컴퓨터그래픽스운용기능사',
          desc: '한국산업인력공단',
        },
      ],
    },
  ],
};

export const workText = [
  {
    img: work01,
    imgDesc: '천재교과서 디자인 화면',
    link: 'https://www.notion.so/minnug/1fc35661017b80e396b5c454839f9cc9?source=copy_link',
    title: '천재교과서',
    desc: '자사 대표 교육 플랫폼인 밀크T(milkT)의 웹, 모바일, 태블릿 서비스 구축 및 운영 프로젝트에 참여했습니다.',
    tool: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Figma', 'Photoshop'],
  },
  {
    img: work02,
    imgDesc: '코오롱베니트 세일즈웍스 디자인 화면',
    title: '코오롱베니트 - SalesWorX(세일즈웍스) 업무관리 플랫폼',
    desc: '코오롱베니트의 데이터 기반의 영업 전략을 수립할 수 있게 해주는 자체 개발 플랫폼으로 Vue.js 기반 환경에서 진행된 리뉴얼 프로젝트입니다.',
    tool: ['Vue.js', 'SCSS', 'Zeplin', 'Sourcetree'],
  },
  {
    img: work03,
    imgDesc: '코오롱베니트 피플웍스 디자인 화면',
    title: '코오롱베니트 - PeopleWorX(피플웍스) 인사관리 플랫폼',
    desc: '코오롱베니트의 조직 및 인사 정보를 통합 관리하는 인사관리 플랫폼으로 Vue.js 기반 환경에서 진행된 리뉴얼 프로젝트입니다.',
    tool: ['Vue.js', 'SCSS', 'Zeplin', 'Sourcetree'],
  },
  {
    img: work04,
    imgDesc: '코오롱베니트 콘솔리웍스 디자인 화면',
    title: '코오롱베니트 - ConsoliWorX(콘솔리웍스) 연결회계 플랫폼',
    desc: '코오롱베니트의 연결 재무제표 및 회계 데이터를 통합 관리하는 연결회계 플랫폼으로 Vue.js 기반 환경에서 진행된 리뉴얼 프로젝트입니다.',
    tool: ['Vue.js', 'SCSS', 'Zeplin', 'Sourcetree'],
  },
  {
    img: work05,
    imgDesc: '현대 M/H 관리 시스템 디자인 화면',
    title: '현대 M/H 관리 시스템',
    desc: '개인별 근무시간과 일정을 효율적으로 관리할 수 있도록 지원하는 인사 관리 시스템 리뉴얼 프로젝트입니다.',
    tool: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Figma'],
  },
  {
    img: work06,
    imgDesc: '발렉스서비스 PRISM 인사 시스템 디자인 화면',
    title: '발렉스서비스 PRISM 인사 시스템 구축 ',
    desc: '임직원의 로그인 및 인증 절차를 모바일 환경에서도 편리하게 이용할 수 있도록 구축한 인사관리 시스템의 모바일 웹 신규 프로젝트입니다.',
    tool: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Figma'],
  },
];

export const projectText = [
  {
    text: {
      title: '다인리뷰',
      subTitle: '사업주와 인플루언서 상생 체험단 플랫폼',
      desc: 'PM, UX/UI, FE, BE 팀과 협업하여 기업이 원하는 서비스를 구현한 기업 연계 프로젝트입니다.',
    },
    buttons: [
      {
        text: 'Github',
        href: 'https://github.com/minnug-dev/final_project',
        icon: faGithub,
      },
      {
        text: 'Project Docs',
        href: 'https://app.notion.com/p/nugmin/6-_-10e9975be804806981ddd6c6d84af993?source=copy_link',
        icon: faNotion,
      },
    ],
    info: {
      icon: faScrewdriverWrench,
      name: '기업 연계 프로젝트',
      date: '프로젝트 기간: 2024.07.17-2024.09.20 / 개발 기간: 2024.08.12-2024.09.20',
      stack: 'Next.js, TypeScript, SCSS, Axios, React Hook Form, Zod, Figma',
    },
  },
  {
    text: {
      title: '저기어때',
      subTitle: '숙박 예약 사이트',
      desc: 'BE 팀과 협업하여 제작한 숙박 검색 및 예약 서비스를 제공하는 숙박 예약 사이트입니다.',
    },
    buttons: [
      {
        text: 'Github',
        href: 'https://github.com/minnug-dev/jeogieottae_mini',
        icon: faGithub,
      },
      {
        text: 'View',
        href: 'https://your-trip-pied.vercel.app/',
        icon: faArrowUpRightFromSquare,
      },
    ],
    info: {
      icon: faScrewdriverWrench,
      name: '미니 프로젝트',
      date: '개발 기간: 2024.06.17-2024.07.07',
      stack: 'Next.js, TypeScript, styled-components, React Hook Form, Figma',
    },
  },
  {
    text: {
      title: '헬스 캘린더',
      subTitle: '개인 운동 정보 기록 플랫폼',
      desc: '캘린더를 통해 PT 수업 받은 내용을 기록하며 개인 운동 정보를 기록하고 관리할 수 있는 플랫폼입니다.',
    },
    buttons: [
      {
        text: 'Github',
        href: 'https://github.com/minnug-dev/health-calendar_toy2',
        icon: faGithub,
      },
      {
        text: 'View',
        href: 'https://health-two-silk.vercel.app/',
        icon: faArrowUpRightFromSquare,
      },
    ],
    info: {
      icon: faScrewdriverWrench,
      name: '토이 프로젝트 2',
      date: '개발 기간: 2024.05.27-2024.06.08',
      stack: 'React, Vite, TypeScript, Zustand, Firebase, styled-components, Figma',
    },
  },
  {
    text: {
      title: '패스트캠퍼스 인트라넷',
      subTitle: '수강생들을 위한 패스트캠퍼스 인트라넷',
      desc: '패스트캠퍼스 학원 수강생들이 편리하게 사용할 수 있게 제작한 인트라넷입니다.',
    },
    buttons: [
      {
        text: 'Github',
        href: 'https://github.com/minnug-dev/intranet-app_toy1',
        icon: faGithub,
      },
      {
        text: 'View',
        href: 'https://master--fastcampus-intrenet.netlify.app/',
        icon: faArrowUpRightFromSquare,
      },
    ],
    info: {
      icon: faScrewdriverWrench,
      name: '토이 프로젝트 1',
      date: '개발 기간: 2024.04.08-2024.04.21',
      stack: 'React, Vite, Firebase, SCSS, Figma',
    },
  },
];

export const contactText = {
  txt: 'Minjoo',
  items: [
    {
      link: '123',
      title: '456',
    },
    {
      link: '123',
      title: '456',
    },
  ],
};

export const footerText = [
  {
    title: 'youtube',
    desc: '유튜브에 오시면 더 많은 강의를 볼 수 있습니다.',
    link: 'https://www.youtube.com/@Webstoryboy',
  },
  {
    title: 'github',
    desc: '깃헙에 오시면 더 많은 소스를 볼 수 있습니다.',
    link: 'https://github.com/webstoryboy',
  },
  {
    title: 'blog',
    desc: '블러그에 오시면 더 많은 정보를 볼 수 있습니다.',
    link: 'https://webstoryboy.co.kr',
  },
  {
    title: 'gsap',
    desc: 'GSAP에 오시면 더 많은 강의를 볼 수 있습니다.',
    link: 'https://www.youtube.com/playlist?list=PL4UVBBIc6giL8-6jvrClimg0cFL-Muqiq',
  },
  {
    title: 'react',
    desc: '리액트로 만든 사이트를 같이 만들어 봅니다.',
    link: 'https://github.com/webstoryboy/port2023-react',
  },
  {
    title: 'vue',
    desc: '뷰로 만든 사이트를 같이 만들어 봅니다.',
    link: 'https://github.com/webstoryboy/port2023-vue',
  },
  {
    title: 'next',
    desc: '넥스트로 만든 사이트를 같이 만들어 봅니다.',
    link: 'https://github.com/webstoryboy/port2023-next',
  },
];
