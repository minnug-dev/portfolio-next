import { workText, projectText } from '@/constants';
import { workDetail, projectDetail, DetailPageProps } from '@/constants/detail';

export const getWorkPage = (slug: string): DetailPageProps | null => {
  const list = workText.list;
  const i = list.findIndex((item) => item.slug === slug);
  if (i < 0) return null;

  const work = list[i];
  const detail = workDetail[slug];
  const prev = list[i - 1];
  const next = list[i + 1];

  return {
    category: 'Work',
    stit: workText.stit,
    backHref: '/#work',
    title: work.tit.trim(),
    desc: work.desc,
    // tags: work.tool,
    meta: detail?.meta ?? [],
    images: detail?.images,
    imagesClass: detail?.imagesClass,
    links: [],
    sections: detail?.sections ?? [],
    prev: prev && { href: `/work/${prev.slug}`, title: prev.tit.trim() },
    next: next && { href: `/work/${next.slug}`, title: next.tit.trim() },
  };
};

export const getProjectPage = (slug: string): DetailPageProps | null => {
  const list = projectText.list;
  const i = list.findIndex((item) => item.slug === slug);
  if (i < 0) return null;

  const project = list[i];
  const detail = projectDetail[slug];
  const prev = list[i - 1];
  const next = list[i + 1];

  return {
    category: 'Project',
    stit: projectText.stit,
    backHref: '/#project',
    title: project.text.tit,
    subtitle: project.text.subTitle,
    desc: project.text.desc,
    // tags: project.info.stack.split(',').map((s) => s.trim()),
    meta: [
      { label: '구분', value: project.info.name },
      { label: '기간', value: project.info.date },
      ...(detail?.meta ?? []),
    ],
    links: project.buttons,
    sections: detail?.sections ?? [],
    prev: prev && { href: `/project/${prev.slug}`, title: prev.text.tit },
    next: next && { href: `/project/${next.slug}`, title: next.text.tit },
  };
};
