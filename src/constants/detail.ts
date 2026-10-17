import { StaticImageData } from 'next/image';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import chunjaeTab from '@/assets/img/work_chunjae_tab.png';
import chunjaeTabPop from '@/assets/img/work_chunjae_tab_pop.png';
import chunjaeTabList from '@/assets/img/work_chunjae_tab_list.webp';
import chunjaeTabTimetable from '@/assets/img/work_chunjae_tab_timetable.webp';
import chunjaeWeb from '@/assets/img/work_chunjae_web.jpg';
import chunjaeWebPop from '@/assets/img/work_chunjae_web_pop.jpg';
import chunjaeAppNone from '@/assets/img/work_chunjae_app_stap_none.png';
import chunjaeAppStep01 from '@/assets/img/work_chunjae_app_stap01.png';
import chunjaeAppStep02 from '@/assets/img/work_chunjae_app_stap02.png';
import chunjaeAppStep03 from '@/assets/img/work_chunjae_app_stap03.png';
import meplzSales from '@/assets/img/work_meplz_sales.png';
import meplzSalesMain from '@/assets/img/work_meplz_sales_main.png';
import meplzSalesStatus from '@/assets/img/work_meplz_sales_status.png';
import meplzSalesTrade from '@/assets/img/work_meplz_sales_trade.png';
import meplzSalesMoStatus from '@/assets/img/work_meplz_sales_mo_status.png';
import meplzSalesMoTrade from '@/assets/img/work_meplz_sales_mo_trade.png';
import meplzPeopleLeader from '@/assets/img/work_meplz_people_leader.png';
import meplzPeopleMain from '@/assets/img/work_meplz_people_main.png';
import meplzPeopleStep02 from '@/assets/img/work_meplz_people_step02.png';
import meplzPeopleStep04 from '@/assets/img/work_meplz_people_step04.png';
import meplzConsoli from '@/assets/img/work_meplz_consoli.png';
import meplzConsoliSetting from '@/assets/img/work_meplz_consoli_setting.png';
import meplzConsoliTable from '@/assets/img/work_meplz_consoli_table.png';
import meplzHyunList from '@/assets/img/work_meplz_hyundai_list.png';
import meplzHyunLogin from '@/assets/img/work_meplz_hyundai_login.png';
import meplzHyunMenu from '@/assets/img/work_meplz_hyundai_menu.png';
import meplzHyunRegister from '@/assets/img/work_meplz_hyundai_register.png';
import meplzValexAgree from '@/assets/img/work_meplz_valex_agree.png';
import meplzValexComplete from '@/assets/img/work_meplz_valex_complete.png';
import meplzValexLogin from '@/assets/img/work_meplz_valex_login.png';
import meplzValexLoginSimple from '@/assets/img/work_meplz_valex_login_simple.png';
import meplzValexPassword from '@/assets/img/work_meplz_valex_password.png';
import meplzValexPop from '@/assets/img/work_meplz_valex_pop.png';

export interface DetailCard {
  tit: string;
  desc: string;
}

export interface DetailImage {
  src: StaticImageData;
  alt: string;
  caption?: string;
}

export type DetailBlock =
  | { type: 'subtit'; text: string }
  | { type: 'paragraphs'; items: string[] }
  | { type: 'list'; items: string[] }
  | { type: 'cards'; items: DetailCard[] }
  | { type: 'images'; items: DetailImage[] };

export interface DetailSection {
  tit: string;
  subtit?: string;
  paragraphs?: string[];
  list?: string[];
  cards?: DetailCard[];
  images?: DetailImage[];
  blocks?: DetailBlock[];
}

export interface DetailMeta {
  label: string;
  value: string;
  className?: string;
}

export interface DetailContent {
  meta?: DetailMeta[];
  images?: DetailImage[];
  imagesClass?: string;
  sections: DetailSection[];
}

export interface DetailLink {
  text: string;
  href: string;
  icon: IconDefinition;
}

export interface DetailNavItem {
  href: string;
  title: string;
}

export interface DetailPageProps {
  category: 'Work' | 'Project';
  stit: string;
  backHref: string;
  title: string;
  subtitle?: string;
  desc: string;
  // tags: string[];
  meta: DetailMeta[];
  images?: DetailImage[];
  imagesClass?: string;
  links: DetailLink[];
  sections: DetailSection[];
  prev?: DetailNavItem;
  next?: DetailNavItem;
}

const chunjaeRole: DetailSection = {
  tit: 'Role',
  list: [
    '밀크T 웹·태블릿·모바일 서비스의 다양한 학습 콘텐츠 UI 퍼블리싱',
    '기획·디자인 시안을 바탕으로 디바이스별 특성을 고려한 화면 구성',
    '다양한 디바이스와 해상도에 대응하는 퍼블리싱',
    '기존 서비스 UI 유지·보수 및 신규 기능·콘텐츠 화면 개발',
  ],
};

const meplzRole = (extra: string[] = []): DetailSection => ({
  tit: 'Role',
  list: [
    ...extra,
    '기획자·디자이너·개발자와 협업하며 디자인 의도를 정확하게 구현',
    'PC·모바일·태블릿 환경에 대응하는 반응형 웹 퍼블리싱',
    '기존 서비스 UI 개선 및 리뉴얼을 통한 사용성·접근성 향상',
  ],
});

const vueRole = meplzRole(['Vue.js 기반 업무 시스템의 공통 컴포넌트 퍼블리싱으로 UI 일관성과 유지보수성 향상']);

export const workDetail: Record<string, DetailContent> = {
  'chunjae-tab': {
    images: [
      { src: chunjaeTab, alt: '오답노트 현황', caption: '오답노트 현황' },
      { src: chunjaeTabPop, alt: '오답노트 학습 안내 팝업', caption: '오답노트 학습 안내 팝업' },
      { src: chunjaeTabList, alt: '오늘의 학습 선택', caption: '오늘의 학습 선택' },
      { src: chunjaeTabTimetable, alt: '오늘의 학습 시간표', caption: '오늘의 학습 시간표' },
    ],
    meta: [
      { label: '소속', value: '(주)천재교과서' },
      { label: '프로젝트 기간', value: '2024.12 - 2025.01', className: 'mono' },
      { label: '담당 역할', value: '웹 퍼블리셔' },
      { label: '기술 스택', value: 'HTML5, CSS3, JavaScript, jQuery, Figma', className: 'mono' },
    ],
    sections: [
      {
        tit: '프로젝트 개요',
        paragraphs: [
          '밀크T 초등 서비스의 학습 편의성과 학습 현황 확인 기능을 개선하기 위한 프로젝트입니다.',
          '오답노트 개선 작업과 오늘의 학습 자율 시간표 기능 구축에 참여하여 학습 계획 등록부터 학습 진행 현황 확인까지 각 기능의 목적에 맞는 UI를 퍼블리싱했습니다.',
        ],
      },
      {
        tit: '오답노트 개선',
        blocks: [
          {
            type: 'paragraphs',
            items: [
              '밀크T 초등 오답노트의 학습 현황과 오답 차시 정보를 확인하기 쉽도록 화면을 개선하는 프로젝트입니다.',
              '기존 학습 정보와 학습 진행 상태를 보다 명확하게 전달할 수 있도록 일별·주별·월별 화면과 학습 통계, 학습 안내 등 다양한 UI 요소를 개선하는 내용을 포함합니다.',
            ],
          },
          { type: 'subtit', text: '오답 차시 목록' },
          {
            type: 'list',
            items: [
              '오답 차시별 학습 정보를 확인할 수 있는 목록 화면',
              '학년별 콘텐츠 구성에 따른 카드형·리스트형 UI',
              '차시 정보와 학습 진행 상태를 구분해 보여주는 화면 구성',
            ],
          },
          { type: 'subtit', text: '학습 진행 현황' },
          {
            type: 'list',
            items: [
              '차시별 학습 진행률 및 완료 상태 표시',
              '학습한 문항과 남은 학습 현황을 확인할 수 있는 정보 구성',
              '학습 상태를 빠르게 파악할 수 있도록 정보 영역 구성',
            ],
          },
          { type: 'subtit', text: '기간별 학습 현황' },
          {
            type: 'list',
            items: [
              '오늘·주간·월간 단위의 학습 현황 화면 구성',
              '오답 차시 및 오답 문항의 완료 현황 표시',
              '완강률, 정답률 등 학습 통계 정보의 시각적 구분',
            ],
          },
          { type: 'subtit', text: '오답노트 학습 안내' },
          {
            type: 'list',
            items: ['오답노트 이용 방법을 단계별로 안내하는 화면', '학년에 따른 안내 이미지 구성 차이 반영'],
          },
        ],
      },
      {
        tit: '오늘의 학습 자율 시간표',
        blocks: [
          {
            type: 'paragraphs',
            items: [
              '학생과 학부모가 학습 콘텐츠를 선택하고 원하는 학습 일정을 설정해 오늘의 학습 계획을 등록할 수 있도록 자율 시간표 기능을 구성하는 프로젝트입니다.',
              '학습 콘텐츠를 담는 단계부터 계획 등록에 필요한 정보를 설정하는 단계까지 순차적인 학습 계획 등록 흐름에 맞춰 UI를 퍼블리싱했습니다.',
            ],
          },
          { type: 'subtit', text: '학습 담기' },
          {
            type: 'list',
            items: [
              '학습 계획에 추가할 콘텐츠를 선택하는 화면 UI 구현',
              '학습 콘텐츠 선택 과정에 필요한 정보 및 버튼 영역 구성',
              '학습을 담고 다음 단계로 진행할 수 있도록 화면 흐름에 맞춰 UI 구성',
            ],
          },
          { type: 'subtit', text: '시간표 계획 등록' },
          {
            type: 'list',
            items: [
              '선택한 학습을 계획으로 등록하기 위한 화면 UI 구현',
              '학습 일정 설정에 필요한 항목을 구분해 배치',
              '사용자가 단계별 입력 내용을 확인하며 계획을 등록할 수 있도록 화면 구성',
            ],
          },
          { type: 'subtit', text: '단계별 UI 구성' },
          {
            type: 'list',
            items: [
              '학습 콘텐츠 선택과 시간표 계획 등록 단계의 화면 구조 구성',
              '각 단계에서 필요한 정보와 조작 요소를 구분해 배치',
              '학습 계획 등록 흐름에 맞춰 화면 간 일관성 유지',
            ],
          },
        ],
      },
      {
        tit: '구현 포인트',
        cards: [
          {
            tit: '학습 기능 UI 구축 및 개선',
            desc: '학습 계획 등록부터 오답 차시 목록까지 사용자 흐름에 맞춘 화면 UI 구현 및 레이아웃 개선',
          },
          {
            tit: '학습 정보 및 진행 현황 시각화',
            desc: '학습 일정 설정 UI와 학습 진행률·완료 상태·기간별 통계 정보 표시 UI 구현',
          },
        ],
      },
      {
        tit: '주요 성과',
        blocks: [
          { type: 'subtit', text: '학습 편의성 향상' },
          {
            type: 'list',
            items: ['학습 계획 등록과 오답 차시 확인 과정을 직관적인 UI로 구성해 학습 접근성 개선'],
          },
          { type: 'subtit', text: '학습 정보 가시성 개선' },
          {
            type: 'list',
            items: ['학습 일정과 진행 상태, 기간별 통계 정보를 한눈에 확인할 수 있도록 구성'],
          },
        ],
      },
    ],
  },
  'chunjae-web': {
    images: [{ src: chunjaeWeb, alt: '밀크T초등 브랜드웹', caption: '밀크T초등 브랜드웹' }],
    meta: [
      { label: '소속', value: '(주)천재교과서' },
      { label: '프로젝트 기간', value: '2025.02', className: 'mono' },
      { label: '담당 역할', value: '웹 퍼블리셔' },
      { label: '기술 스택', value: 'HTML5, CSS3, JavaScript, jQuery, Photoshop', className: 'mono' },
    ],
    sections: [
      {
        tit: '프로젝트 개요',
        paragraphs: [
          '밀크T 초등 브랜드웹에 강의형 콘텐츠를 소개하고, 사용자가 관심 있는 강좌의 정보와 맛보기 영상을 확인할 수 있도록 강좌 맛보기 메뉴를 추가하는 프로젝트입니다. ',
          '다양한 과목과 강좌를 탐색하고 상세 정보를 확인할 수 있도록 목록과 상세 팝업 UI를 구현했습니다.',
        ],
      },
      {
        tit: '담당 업무',
        blocks: [
          {
            type: 'list',
            items: [
              '강좌 목록 및 분류 탭 UI 퍼블리싱',
              '강좌 상세 정보 및 맛보기 영상 팝업 UI 퍼블리싱',
              '반응형 화면 대응 및 크로스 브라우징 검수',
            ],
          },
        ],
      },
      {
        tit: '주요 구현 내용',
        blocks: [
          { type: 'subtit', text: '강좌 목록 및 분류 탭' },
          {
            type: 'list',
            items: [
              '과목 및 강좌 분류에 따른 목록 UI 구현',
              '강좌 카드 내 과목, 선생님, 강좌명, 교재 정보 등 콘텐츠 정보 표시',
              '분류 탭을 통해 원하는 강좌를 탐색할 수 있도록 탭 UI 구성',
            ],
          },
          { type: 'subtit', text: '강좌 상세 정보 UI' },
          {
            type: 'list',
            items: [
              '강좌명과 과목, 선생님, 교재 정보를 확인할 수 있는 상세 영역 구현',
              '강좌 소개 및 교재 소개 영역 구성',
              '콘텐츠 정보가 읽기 쉽도록 텍스트 영역과 화면 구조 정리',
            ],
          },
          { type: 'subtit', text: '맛보기 영상 팝업' },
          {
            type: 'list',
            items: [
              '맛보기 버튼 선택 시 영상 팝업이 노출되는 UI 구현',
              '강좌 정보와 영상 플레이어가 함께 표시되는 팝업 화면 구성',
              '영상 콘텐츠를 확인할 수 있도록 팝업 내 정보 영역과 플레이어 영역 구현',
            ],
          },
          { type: 'images', items: [{ src: chunjaeWebPop, alt: '맛보기 영상 팝업', caption: '맛보기 영상 팝업' }] },

          { type: 'subtit', text: '화면 검수' },
          {
            type: 'list',
            items: ['반응형 화면 대응', '브라우저별 화면 표시 및 레이아웃 검수'],
          },
        ],
      },
      {
        tit: '구현 포인트',
        cards: [
          {
            tit: '강좌 목록 및 분류 UI 구현',
            desc: '강좌 목록과 분류 탭을 구성해 원하는 강좌를 탐색할 수 있는 화면 구현',
          },
          {
            tit: '강좌 상세 및 영상 팝업 구현',
            desc: '강좌 상세 정보와 맛보기 영상 팝업 UI 구현',
          },
        ],
      },
      {
        tit: '주요 성과',
        blocks: [
          { type: 'subtit', text: '강좌 탐색 편의성 개선' },
          {
            type: 'list',
            items: ['강좌 목록과 분류 탭을 통해 원하는 강좌를 쉽게 찾아볼 수 있도록 구성'],
          },
          { type: 'subtit', text: '강좌 정보 및 콘텐츠 접근성 향상' },
          {
            type: 'list',
            items: ['상세 정보와 맛보기 영상 팝업을 통해 강좌 정보와 미리보기 콘텐츠를 확인할 수 있도록 구현'],
          },
        ],
      },
    ],
  },
  'chunjae-app': {
    imagesClass: 'col-4',
    images: [
      { src: chunjaeAppNone, alt: '티스푼 - 강좌 없는 경우', caption: '티스푼 - 강좌 없는 경우' },
      {
        src: chunjaeAppStep01,
        alt: '티스푼 - STEP1 강좌·과목 선택',
        caption: '티스푼 - STEP1 강좌·과목 선택',
      },
      { src: chunjaeAppStep02, alt: '티스푼 - STEP2 학습 선택', caption: '티스푼 - STEP2 학습 선택' },
      { src: chunjaeAppStep03, alt: '티스푼 - STEP3 학습일 설정', caption: '티스푼 - STEP3 학습일 설정' },
    ],
    meta: [
      { label: '소속', value: '(주)천재교과서' },
      { label: '프로젝트 기간', value: '2025.01', className: 'mono' },
      { label: '담당 역할', value: '웹 퍼블리셔' },
      { label: '기술 스택', value: 'HTML5, CSS3, JavaScript, jQuery, Figma', className: 'mono' },
    ],
    sections: [
      {
        tit: '프로젝트 개요',
        paragraphs: [
          '티스푼 앱에서 학부모가 학습 콘텐츠를 선택하고 학습 일정을 설정해 밀크T 오늘의 학습 계획을 등록할 수 있도록 기능을 구축하는 프로젝트입니다.',
          '학습 콘텐츠를 담는 단계와 학습 차시 및 일정을 설정하는 단계로 이어지는 사용자 흐름에 맞춰 UI를 퍼블리싱했습니다.',
        ],
      },
      {
        tit: '담당 업무',
        blocks: [
          {
            type: 'list',
            items: ['학습 담기 단계 UI 퍼블리싱', '시간표 계획 등록 단계 UI 퍼블리싱'],
          },
        ],
      },
      {
        tit: '주요 구현 내용',
        blocks: [
          { type: 'subtit', text: '학습 콘텐츠 선택 및 담기' },
          {
            type: 'list',
            items: [
              '학년·학기·과목 등 학습 콘텐츠 선택에 필요한 화면 요소 구성',
              '강좌 목록과 학습 정보를 확인할 수 있는 UI 구현',
              '선택한 학습을 계획 등록 단계로 이어갈 수 있도록 화면 구성',
            ],
          },
          { type: 'subtit', text: '학습 차시 선택' },
          {
            type: 'list',
            items: [
              '계획에 포함할 학습 내용을 선택하는 화면 UI 구현',
              '단원 및 차시 정보를 확인하고 학습 범위를 선택하는 흐름 반영',
            ],
          },
          { type: 'subtit', text: '학습 일정 설정' },
          {
            type: 'list',
            items: [
              '학습 요일을 선택하는 UI 구성',
              '하루 학습량과 시작일 등 일정 설정 항목 배치',
              '반복 학습 주기를 설정할 수 있도록 관련 UI 구성',
            ],
          },
          { type: 'subtit', text: '단계별 등록 흐름 구현' },
          {
            type: 'list',
            items: [
              '학습 선택부터 일정 설정까지 이어지는 화면 흐름 구성',
              '각 단계에서 필요한 정보와 조작 요소를 구분해 배치',
              '학습 계획을 설정하는 과정이 자연스럽게 이어지도록 UI 구성',
            ],
          },
          { type: 'subtit', text: '화면 검수' },
          {
            type: 'list',
            items: ['반응형 화면 대응', '브라우저별 화면 표시 및 레이아웃 검수'],
          },
        ],
      },
      {
        tit: '구현 포인트',
        cards: [
          {
            tit: '단계별 학습 계획 UI 구현',
            desc: '학습 콘텐츠 선택 및 담기부터 시간표 계획 등록까지 단계별 화면 구현',
          },
          {
            tit: '상태별 인터랙션 UI 구현',
            desc: '학습 콘텐츠의 선택·완료·활성화 상태에 따른 UI 변화 및 사용자 인터랙션 구현',
          },
        ],
      },
      {
        tit: '주요 성과',
        blocks: [
          { type: 'subtit', text: '학습 계획 등록 편의성 향상' },
          {
            type: 'list',
            items: ['단계별 화면 구성을 통해 학습 콘텐츠 선택부터 계획 등록까지의 흐름을 명확하게 제공'],
          },
          { type: 'subtit', text: '사용자 조작에 따른 상태 인지 개선' },
          {
            type: 'list',
            items: ['선택·완료·활성화 상태를 시각적으로 구분해 현재 진행 상태를 쉽게 파악할 수 있도록 구성'],
          },
        ],
      },
    ],
  },
  'kolon-salesworx': {
    images: [
      { src: meplzSalesMain, alt: '메인', caption: '메인' },
      // { src: meplzSalesDetail, alt: '수주품의 상세', caption: '수주품의 상세' },
      { src: meplzSales, alt: 'PJT완료보고품의 ', caption: 'PJT완료보고품의' },
      { src: meplzSalesTrade, alt: '거래처별 여신현황', caption: '거래처별 여신현황' },
      { src: meplzSalesStatus, alt: '판매/구매 현황', caption: '판매/구매 현황' },
      { src: meplzSalesMoTrade, alt: 'Mobile - 판매/구매현황', caption: 'Mobile - 판매/구매현황' },
      { src: meplzSalesMoStatus, alt: 'Mobile - 거래처별 여신현황', caption: 'Mobile - 거래처별 여신현황' },
    ],
    meta: [
      { label: '소속', value: '(주)미플즈' },
      { label: '고객사', value: '코오롱베니트(주)' },
      { label: '프로젝트 기간', value: '2021.07 - 2022.01', className: 'mono' },
      { label: '담당 역할', value: '웹 퍼블리셔' },
      { label: '기술 스택', value: 'Vue.js, SCSS, Zeplin, Sourcetree', className: 'mono' },
    ],
    sections: [
      {
        tit: '프로젝트 개요',
        paragraphs: [
          '코오롱베니트(주)의 영업 활동과 프로젝트 운영 프로세스를 통합 관리하는 CRM 기반 업무 시스템 리뉴얼 프로젝트입니다.',
          '고객 정보, 영업 기회, 프로젝트 진행 현황 등 다양한 업무 데이터를 효율적으로 관리할 수 있도록 사용자 인터페이스를 구축했습니다.',
        ],
      },
      {
        tit: '담당 업무',
        blocks: [
          {
            type: 'list',
            items: [
              'Vue.js 기반 50페이지 이상의 화면 퍼블리싱',
              '공통 레이아웃 및 화면 템플릿 구축',
              '버튼, 테이블, 모달, 탭 등 공통 UI 컴포넌트 구현',
              'SCSS 변수와 믹스인을 활용한 스타일 관리 체계 구성',
              'PC·태블릿·모바일 환경에 대응하는 반응형 UI 구현',
              'Zeplin 디자인 명세 기반 화면 구현 및 개발 협업',
            ],
          },
        ],
      },
      {
        tit: '주요 구현 내용',
        blocks: [
          { type: 'subtit', text: 'Vue.js 기반 반응형 UI 구축' },
          {
            type: 'list',
            items: [
              '업무 화면 50페이지 이상 퍼블리싱',
              '공통 레이아웃 및 화면 템플릿 구성',
              '다양한 디바이스 환경을 고려한 반응형 레이아웃 구현',
            ],
          },
          { type: 'subtit', text: '재사용 가능한 공통 컴포넌트 구축' },
          {
            type: 'list',
            items: [
              '버튼, 테이블, 모달, 탭 등 반복되는 UI 요소 공통화',
              '컴포넌트 단위의 마크업 구조 설계',
              '데이터 바인딩을 고려한 화면 구조 구성 및 개발 협업 지원',
            ],
          },
          { type: 'subtit', text: 'SCSS 스타일 구조화' },
          {
            type: 'list',
            items: [
              '변수와 믹스인을 활용한 공통 스타일 관리',
              '공통 스타일 및 반응형 규칙 구성',
              '중복 스타일을 줄이고 유지보수하기 쉬운 스타일 구조 마련',
            ],
          },
        ],
      },
      {
        tit: '구현 포인트',
        cards: [
          {
            tit: '공통 컴포넌트 설계',
            desc: '버튼·테이블·모달 등 반복되는 UI를 재사용 가능한 컴포넌트로 구성',
          },
          {
            tit: '반응형 UI 대응',
            desc: 'PC·태블릿·모바일 해상도에 맞춘 레이아웃 구현',
          },
          {
            tit: 'SCSS 스타일 관리',
            desc: '변수·믹스인 기반으로 공통 스타일과 반응형 규칙 관리',
          },
          {
            tit: '디자인 명세 기반 퍼블리싱',
            desc: 'Zeplin 시안을 바탕으로 디자인과 일치하는 UI 구현',
          },
        ],
      },
      {
        tit: '주요 성과',
        blocks: [
          {
            type: 'list',
            items: [
              '50페이지 이상의 화면 퍼블리싱을 담당하며 프로젝트 구축 완료',
              '공통 UI 컴포넌트 구축을 통해 반복 작업을 줄이고 화면 개발 효율성 향상',
              'SCSS 변수와 믹스인을 활용해 일관된 스타일 관리 및 유지보수 기반 마련',
              'PC·태블릿·모바일 환경에 대응하는 반응형 UI 구현',
              '고객사의 긍정적인 평가를 바탕으로 동일 고객사의 후속 프로젝트에 연속 참여',
            ],
          },
        ],
      },
      {
        tit: '회고',
        blocks: [
          {
            type: 'paragraphs',
            items: [
              '유사한 화면과 반복되는 UI 요소가 많은 업무 시스템을 구축하며 공통 컴포넌트 설계와 스타일 구조화의 중요성을 경험했습니다. 단순히 화면을 구현하는 데 그치지 않고 재사용성과 유지보수성을 고려해 작업했으며, 개발자 및 디자이너와의 협업을 통해 UI 품질과 일정 관리 역량을 높였습니다.',
            ],
          },
        ],
      },
    ],
  },
  'kolon-peopleworx': {
    images: [
      { src: meplzPeopleMain, alt: '메인 - 인사팀', caption: '메인 - 인사팀' },
      { src: meplzPeopleLeader, alt: '메인 - 팀장', caption: '메인 - 팀장' },
      { src: meplzPeopleStep02, alt: '소득공제신청 - 인적공제 입력', caption: '소득공제신청 - 인적공제 입력' },
      {
        src: meplzPeopleStep04,
        alt: '소득공제신청 - 공제자료 입력 및 조회',
        caption: '소득공제신청 - 공제자료 입력 및 조회',
      },
    ],
    meta: [
      { label: '소속', value: '(주)미플즈' },
      { label: '고객사', value: '코오롱베니트(주)' },
      { label: '프로젝트 기간', value: '2022.01 - 2022.02', className: 'mono' },
      { label: '담당 역할', value: '웹 퍼블리셔' },
      { label: '기술 스택', value: 'Vue.js, SCSS, Zeplin, Sourcetree', className: 'mono' },
    ],
    sections: [
      {
        tit: '프로젝트 개요',
        paragraphs: [
          'PeopleWorX는 조직 및 인사 정보를 통합 관리하는 인사 관리 플랫폼으로, 근태 현황과 조직 데이터를 시각적으로 제공하는 대시보드 중심의 업무 시스템입니다.',
          '사용자가 주요 인사 정보를 직관적으로 확인할 수 있도록 대시보드 UI와 공통 컴포넌트를 구축했습니다.',
        ],
      },
      {
        tit: '담당 업무',
        blocks: [
          {
            type: 'list',
            items: [
              'Vue.js 기반 14페이지 이상의 화면 퍼블리싱',
              '근태 현황 및 조직 데이터 대시보드 UI 구현',
              '도넛 차트, 상태 카드, 슬라이드 UI 퍼블리싱',
              '카드 및 상태 영역 등 공통 UI 컴포넌트 구축',
              'SCSS 변수와 믹스인을 활용한 스타일 관리',
              'Zeplin 디자인 명세 기반 화면 구현 및 개발 협업',
            ],
          },
        ],
      },
      {
        tit: '주요 구현 내용',
        blocks: [
          { type: 'subtit', text: '대시보드 UI 구축' },
          {
            type: 'list',
            items: [
              '근태 현황 및 조직 데이터를 보여주는 대시보드 화면 구현',
              '도넛 차트, 상태 카드 등 데이터 시각화 UI 퍼블리싱',
              '정보의 가독성을 고려한 대시보드 레이아웃 구성',
            ],
          },
          { type: 'subtit', text: '재사용 가능한 공통 컴포넌트 구축' },
          {
            type: 'list',
            items: [
              '카드, 상태 영역, 슬라이드 등 공통 UI 요소 구현',
              '반복되는 UI 패턴을 공통화하여 재사용성 고려',
              'Vue.js 컴포넌트 구조를 고려한 마크업 설계',
            ],
          },
          { type: 'subtit', text: 'SCSS 스타일 구조화' },
          {
            type: 'list',
            items: [
              '변수와 믹스인을 활용한 스타일 관리 체계 구성',
              '공통 스타일 규칙을 모듈화하여 관리',
              '중복 스타일을 줄이고 유지보수하기 쉬운 스타일 구조 마련',
            ],
          },
        ],
      },
      {
        tit: '구현 포인트',
        cards: [
          {
            tit: '대시보드 UI 구현',
            desc: '근태 현황과 조직 데이터를 한눈에 확인할 수 있는 정보 중심 레이아웃 구성',
          },
          {
            tit: '데이터 시각화 UI 퍼블리싱',
            desc: '도넛 차트·상태 카드 등을 활용해 주요 정보를 시각적으로 표현',
          },
          {
            tit: '공통 컴포넌트 구축',
            desc: '카드·상태 영역·슬라이드 등 반복되는 UI 요소를 재사용 가능한 구조로 구성',
          },
          {
            tit: 'SCSS 스타일 관리',
            desc: '변수·믹스인 기반으로 공통 스타일을 관리해 일관성 있는 UI 구현',
          },
        ],
      },
      {
        tit: '주요 성과',
        blocks: [
          {
            type: 'list',
            items: [
              '14페이지 이상의 화면 퍼블리싱을 담당하며 인사 관리 플랫폼의 주요 UI 구축',
              '근태 현황과 조직 데이터를 시각적으로 확인할 수 있는 대시보드 UI 구현',
              '공통 컴포넌트 기반으로 반복되는 UI 요소의 재사용성 및 유지보수성 강화',
              'PC·태블릿·모바일 환경에 대응하는 반응형 UI 구현',
              'Vue.js 컴포넌트 구조를 고려한 마크업 설계로 개발 협업 지원',
            ],
          },
        ],
      },
      {
        tit: '회고',
        blocks: [
          {
            type: 'paragraphs',
            items: [
              '인사 관리 시스템의 대시보드 UI를 구현하며 데이터를 효과적으로 전달하기 위해서는 화면 구성뿐 아니라 정보의 가독성과 시각적 구분이 중요하다는 점을 경험했습니다. 또한 공통 컴포넌트와 SCSS 스타일 구조를 고려해 작업하면서 재사용성과 유지보수성을 중시하는 퍼블리싱 역량을 강화했습니다.',
            ],
          },
        ],
      },
    ],
  },
  'kolon-consoliworx': {
    images: [
      { src: meplzConsoli, alt: '메인', caption: '메인' },
      { src: meplzConsoliTable, alt: '연결재무제표', caption: '연결재무제표' },
      { src: meplzConsoliSetting, alt: '참조 설정 ', caption: '참조 설정' },
    ],
    meta: [
      { label: '소속', value: '(주)미플즈' },
      { label: '고객사', value: '코오롱베니트(주)' },
      { label: '프로젝트 기간', value: '2022.04 - 2022.05', className: 'mono' },
      { label: '담당 역할', value: '웹 퍼블리셔' },
      { label: '기술 스택', value: 'Vue.js, SCSS, Zeplin, Sourcetree', className: 'mono' },
    ],
    sections: [
      {
        tit: '프로젝트 개요',
        paragraphs: [
          'ConsoliWorX는 기업의 연결 재무제표 및 회계 데이터를 통합 관리하는 연결 회계 플랫폼입니다.',
          '다양한 재무 정보를 효율적으로 조회하고 관리할 수 있도록 데이터 중심의 업무 화면과 UI 컴포넌트를 구축했습니다.',
        ],
      },
      {
        tit: '담당 업무',
        blocks: [
          {
            type: 'list',
            items: [
              'Vue.js 기반 재무 데이터 조회 및 관리 화면 퍼블리싱',
              '데이터 테이블, 검색 영역, 상세 정보 화면 구현',
              '테이블·폼·버튼 등 공통 UI 컴포넌트 구축',
              'Vue.js 컴포넌트 구조를 고려한 마크업 설계',
              'SCSS 변수와 믹스인을 활용한 스타일 관리',
              'Zeplin 디자인 명세 기반 화면 구현 및 개발 협업',
            ],
          },
        ],
      },
      {
        tit: '주요 구현 내용',
        blocks: [
          { type: 'subtit', text: '재무 데이터 조회 UI 구축' },
          {
            type: 'list',
            items: [
              '재무 정보 조회 및 관리 화면 퍼블리싱',
              '데이터 테이블, 검색 영역, 상세 정보 화면 구현',
              '정보 가독성을 고려한 업무 화면 레이아웃 구성',
            ],
          },
          { type: 'subtit', text: '재사용 가능한 공통 컴포넌트 구축' },
          {
            type: 'list',
            items: [
              '테이블·폼·버튼 등 반복되는 UI 요소 구현',
              '공통 UI 패턴을 재사용할 수 있도록 구성',
              'Vue.js 컴포넌트 구조를 고려한 마크업 설계',
            ],
          },
          { type: 'subtit', text: 'SCSS 스타일 구조화' },
          {
            type: 'list',
            items: [
              '변수와 믹스인을 활용한 공통 스타일 관리',
              '공통 스타일 및 반응형 규칙 구성',
              '유지보수성을 고려한 스타일 구조 설계',
            ],
          },
        ],
      },
      {
        tit: '구현 포인트',
        cards: [
          {
            tit: '데이터 조회 UI 구현',
            desc: '재무 정보 확인을 위한 테이블·검색 영역·상세 화면 구성',
          },
          {
            tit: '정보 가독성을 고려한 레이아웃',
            desc: '데이터 중심 업무 화면에 적합한 정보 구조와 화면 배치',
          },
        ],
      },
      {
        tit: '주요 성과',
        blocks: [
          {
            type: 'list',
            items: [
              '연결 회계 시스템 화면 퍼블리싱 수행',
              '재무 데이터 조회 및 관리에 필요한 주요 업무 UI 구축',
              '공통 UI 컴포넌트를 구성해 화면 재사용성과 유지보수성 강화',
              '복잡한 재무 정보를 다루는 업무 시스템에서 데이터 가독성을 고려한 UI 구현 경험 확보',
            ],
          },
        ],
      },
      {
        tit: '회고',
        blocks: [
          {
            type: 'paragraphs',
            items: [
              '연결 회계 시스템의 화면을 구현하며 다양한 재무 정보를 정확하고 명확하게 전달하기 위해 정보 구조와 가독성을 고려하는 것이 중요하다는 점을 경험했습니다. 또한 테이블과 폼 등 반복적으로 사용되는 UI 요소를 공통화하고, 유지보수성을 고려한 스타일 구조를 구성하며 업무 시스템 퍼블리싱 역량을 강화했습니다.',
            ],
          },
        ],
      },
    ],
  },
  'hyundai-mh': {
    imagesClass: 'col-4',
    images: [
      { src: meplzHyunLogin, alt: '로그인', caption: '로그인' },
      { src: meplzHyunMenu, alt: '메뉴창', caption: '메뉴창' },
      { src: meplzHyunList, alt: '연구과제관리 목록', caption: '연구과제관리 목록' },
      { src: meplzHyunRegister, alt: '개인별 MH 관리', caption: '개인별 MH 관리' },
    ],
    meta: [
      { label: '소속', value: '(주)미플즈' },
      { label: '고객사', value: '현대자동차(주)' },
      { label: '프로젝트 기간', value: '2022.01', className: 'mono' },
      { label: '담당 역할', value: '웹 퍼블리셔' },
      { label: '기술 스택', value: 'HTML5, CSS3, JavaScript, jQuery, Figma ', className: 'mono' },
    ],
    sections: [
      {
        tit: '프로젝트 개요',
        paragraphs: [
          '현대 M/H 관리 시스템은 개인별 근무시간과 일정을 관리할 수 있도록 지원하는 업무 시스템입니다.',
          '사용자가 근무 현황과 일정을 직관적으로 확인할 수 있도록 캘린더 기반의 업무 화면과 일정 관리 UI를 구축했습니다.',
        ],
      },
      {
        tit: '담당 업무',
        blocks: [
          {
            type: 'list',
            items: [
              '웹·모바일 환경의 일정 관리 화면 퍼블리싱',
              '월별·일별 일정 조회를 위한 캘린더 UI 구현',
              '일정 상세 정보 팝업 UI 구현',
              '메뉴 모달 및 화면 이동 구조 구현',
              '모바일 환경을 고려한 화면 구성',
              '고객사 요구사항 및 디자인 피드백 반영',
              '개발자와 협업하며 화면 수정 및 품질 개선',
            ],
          },
        ],
      },
      {
        tit: '주요 구현 내용',
        blocks: [
          { type: 'subtit', text: '업무 화면 및 네비게이션 구현' },
          {
            type: 'list',
            items: [
              '메뉴 모달 및 화면 이동 구조 구현',
              '데이터 테이블, 검색 영역, 상세 정보 화면 구현',
              '사용자가 필요한 정보에 접근하기 쉽도록 화면 구조 설계',
            ],
          },
          { type: 'subtit', text: '고객사 요구사항 반영' },
          {
            type: 'list',
            items: [
              '고객사 피드백에 따른 화면 수정 및 개선',
              '요구사항을 반영한 UI 보완',
              '개발자와 협업하여 화면 품질 검수',
            ],
          },
        ],
      },
      {
        tit: '구현 포인트',
        cards: [
          {
            tit: '웹·모바일 UI 대응',
            desc: '다양한 화면 환경을 고려한 레이아웃 및 인터페이스 구성',
          },
          {
            tit: '메뉴 및 화면 이동 구조 구현',
            desc: '메뉴 모달과 화면 이동 흐름을 고려한 네비게이션 구성',
          },
        ],
      },
      {
        tit: '주요 성과',
        blocks: [
          {
            type: 'list',
            items: [
              '인사 관리 시스템의 일정 관리 화면 퍼블리싱 수행',
              '웹·모바일 환경을 고려한 사용자 인터페이스 구현',
              '고객사 피드백을 반영하며 요구사항 대응 및 협업 역량 강화',
            ],
          },
        ],
      },
      {
        tit: '회고',
        blocks: [
          {
            type: 'paragraphs',
            items: [
              '일정 관리 화면을 구현하며 사용자가 필요한 정보를 빠르게 확인할 수 있도록 화면 구성과 정보 접근성을 고려하는 것이 중요하다는 점을 경험했습니다. 상세 정보 팝업, 메뉴 이동 구조를 구현하며 사용자 흐름을 고려한 UI 설계 경험을 쌓았고, 고객사 피드백을 반영하는 과정에서 요구사항 대응과 협업 역량을 강화했습니다.',
            ],
          },
        ],
      },
    ],
  },
  'valex-prism': {
    imagesClass: 'col-4',
    images: [
      { src: meplzValexLogin, alt: '로그인', caption: '로그인' },
      { src: meplzValexPassword, alt: '비밀번호 입력', caption: '비밀번호 입력' },
      { src: meplzValexPop, alt: '비밀번호 입력 오류 팝업', caption: '비밀번호 입력 오류 팝업' },
      { src: meplzValexComplete, alt: '비밀번호 등록 완료', caption: '비밀번호 등록 완료' },
      { src: meplzValexAgree, alt: '서비스 이용약관', caption: '서비스 이용약관' },
    ],
    meta: [
      { label: '소속', value: '(주)미플즈' },
      { label: '고객사', value: '(주)발렉스서비스' },
      { label: '프로젝트 기간', value: '2022.03', className: 'mono' },
      { label: '담당 역할', value: '웹 퍼블리셔' },
      { label: '기술 스택', value: 'HTML5, CSS3, JavaScript, jQuery, Figma', className: 'mono' },
    ],
    sections: [
      {
        tit: '프로젝트 개요',
        paragraphs: [
          'PRISM은 임직원의 로그인 및 인증 절차를 모바일 환경에서도 편리하게 이용할 수 있도록 구축한 인사관리 시스템의 모바일 웹 프로젝트입니다.',
          '로그인부터 비밀번호 설정, 인증 오류 안내까지 로그인 프로세스 전반의 화면 퍼블리싱을 담당했습니다.',
        ],
      },
      {
        tit: '담당 업무',
        blocks: [
          {
            type: 'list',
            items: [
              '웹·모바일 로그인 및 비밀번호 설정 화면 퍼블리싱',
              '비밀번호 입력 및 재입력 UI 구현',
              '비밀번호 오입력 및 계정 잠금 등 인증 예외 상황 안내 UI 구현',
              '입력 오류에 따른 시각적 피드백 구현',
              '고객사와 직접 소통하며 요구사항 및 디자인 변경 사항 반영',
              '개발 진행 상황 공유 및 화면 품질 검수',
            ],
          },
        ],
      },
      {
        tit: '주요 구현 내용',
        blocks: [
          { type: 'subtit', text: '로그인 및 비밀번호 입력 UI 구현' },
          {
            type: 'list',
            items: ['웹·모바일 환경에 최적화된 로그인 화면 구성', '비밀번호 설정 및 재입력 화면 구현'],
          },
          { type: 'subtit', text: '인증 오류 및 피드백 UI 구현' },
          {
            type: 'list',
            items: [
              '비밀번호 오입력 및 계정 잠금 안내 모달 구현',
              '입력 오류 시 하단 경고 텍스트 및 테두리 색상 변경 적용',
            ],
          },
          { type: 'subtit', text: '고객사 협업 및 요구사항 반영' },
          {
            type: 'list',
            items: [
              '고객사와 직접 소통하며 변경 사항 확인 및 반영',
              '디자인 피드백에 따른 화면 수정 및 보완',
              '개발 진행 상황 공유 및 UI 품질 검수',
            ],
          },
        ],
      },
      {
        tit: '구현 포인트',
        cards: [
          {
            tit: '인증 예외 상황 대응',
            desc: '비밀번호 오입력·계정 잠금 상황별 안내 모달 및 경고 UI 구성',
          },
          {
            tit: '입력 오류 피드백',
            desc: '테두리 색상 변경·토스트 알림을 활용해 오류 상태를 시각적으로 표현',
          },
          {
            tit: '고객사 요구사항 반영',
            desc: '고객사와 직접 소통하며 변경 사항을 확인하고 화면에 반영',
          },
        ],
      },
      {
        tit: '주요 성과',
        blocks: [
          {
            type: 'list',
            items: [
              '웹·모바일 로그인 및 비밀번호 인증 화면 퍼블리싱 전담 수행',
              '인증 오류 상황별 안내 UI를 구현해 사용자에게 명확한 피드백 제공',
              '고객사와 직접 협업하며 요구사항 대응 및 커뮤니케이션 역량 강화',
            ],
          },
        ],
      },
      {
        tit: '회고',
        blocks: [
          {
            type: 'paragraphs',
            items: [
              '로그인 화면을 구축하며 작은 인터랙션과 오류 안내 방식이 사용자 경험에 영향을 준다는 점을 경험했습니다. 입력 과정에서 사용자가 혼란을 겪지 않도록 상태별 피드백을 구현하고, 고객사와 직접 소통하며 요구사항을 반영하는 과정에서 사용자 관점의 UI 구현과 커뮤니케이션 역량을 강화했습니다.',
            ],
          },
        ],
      },
    ],
  },
};

export const projectDetail: Record<string, DetailContent> = {
  dainreview: {
    meta: [{ label: '협업', value: 'PM · UX/UI · FE · BE' }],
    sections: [],
  },
  jeogieottae: {
    meta: [{ label: '협업', value: 'BE 팀' }],
    sections: [],
  },
  'health-calendar': {
    sections: [],
  },
  'fastcampus-intranet': {
    sections: [],
  },
};
