import type { Metadata } from 'next';
import { SITE_NAME, siteOpenGraph } from '@/constants/site';
import type { DetailPageProps } from '@/constants/detail';

// 상세 페이지 공통 메타데이터
export const buildDetailMetadata = (data: DetailPageProps | null, path: string): Metadata => {
  if (!data) return {};

  return {
    title: data.title,
    description: data.desc,
    alternates: { canonical: path },
    openGraph: {
      ...siteOpenGraph,
      title: `${data.title} | ${SITE_NAME}`,
      description: data.desc,
      url: path,
    },
  };
};
