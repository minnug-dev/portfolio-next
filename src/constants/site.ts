import type { Metadata } from 'next';

export const SITE_URL = 'https://minjoo-park.netlify.app';
export const SITE_NAME = '박민주 포트폴리오';
export const SITE_DESCRIPTION = 'Next.js로 제작한 박민주 포트폴리오 사이트입니다.';
export const CONTACT_EMAIL = 'parkminnug@gmail.com';

export const siteOpenGraph: NonNullable<Metadata['openGraph']> = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  siteName: SITE_NAME,
  images: [{ url: '/og-img.png', width: 1200, height: 630 }],
  locale: 'ko_KR',
  type: 'website',
};
