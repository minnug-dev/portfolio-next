import { workText, projectText } from '@/constants';
import {
  workDetail,
  projectDetail,
  DetailPageProps,
  DetailSection,
  DetailSectionView,
  DetailBlock,
  DetailNavItem,
} from '@/constants/detail';

// blocks 없이 paragraphs/list/cards/images 필드로 작성된 섹션도 blocks 형태로 통일
// (필드 렌더링 순서: paragraphs → subtit → list → cards → images)
const normalizeSections = (sections: DetailSection[] = []): DetailSectionView[] =>
  sections.map((section) => {
    if (section.blocks) return { tit: section.tit, blocks: section.blocks };

    const blocks: DetailBlock[] = [];
    if (section.paragraphs) blocks.push({ type: 'paragraphs', items: section.paragraphs });
    if (section.subtit) blocks.push({ type: 'subtit', text: section.subtit });
    if (section.list) blocks.push({ type: 'list', items: section.list });
    if (section.cards) blocks.push({ type: 'cards', items: section.cards });
    if (section.images) blocks.push({ type: 'images', items: section.images });

    return { tit: section.tit, blocks };
  });

const getSiblings = <T>(list: T[], index: number, toNav: (item: T) => DetailNavItem) => {
  const prev = list[index - 1];
  const next = list[index + 1];

  return {
    prev: prev && toNav(prev),
    next: next && toNav(next),
  };
};

export const getWorkPage = (slug: string): DetailPageProps | null => {
  const list = workText.list;
  const i = list.findIndex((item) => item.slug === slug);
  if (i < 0) return null;

  const work = list[i];
  const detail = workDetail[slug];

  return {
    category: 'Work',
    stit: workText.stit,
    backHref: '/#work',
    title: work.tit.trim(),
    desc: work.desc,
    meta: detail?.meta ?? [],
    images: detail?.images,
    imagesClass: detail?.imagesClass,
    links: [],
    sections: normalizeSections(detail?.sections),
    ...getSiblings(list, i, (item) => ({ href: `/work/${item.slug}`, title: item.tit.trim() })),
  };
};

export const getProjectPage = (slug: string): DetailPageProps | null => {
  const list = projectText.list;
  const i = list.findIndex((item) => item.slug === slug);
  if (i < 0) return null;

  const project = list[i];
  const detail = projectDetail[slug];

  return {
    category: 'Project',
    stit: projectText.stit,
    backHref: '/#project',
    title: project.text.tit,
    subtitle: project.text.subTitle,
    desc: project.text.desc,
    meta: [
      { label: '구분', value: project.info.name },
      { label: '기간', value: project.info.date },
      ...(detail?.meta ?? []),
    ],
    links: project.buttons,
    sections: normalizeSections(detail?.sections),
    ...getSiblings(list, i, (item) => ({ href: `/project/${item.slug}`, title: item.text.tit })),
  };
};
