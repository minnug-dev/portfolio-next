import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import localFont from 'next/font/local';
import '@/assets/scss/style.scss';
import Cursor from '../components/Cursor';

config.autoAddCss = false;

const pretendard = localFont({
  src: '../assets/font/pretendard/PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretendard',
});

export const metadata = {
  title: '박민주 포트폴리오',
  description: 'Next.js로 제작한 박민주 포트폴리오 사이트입니다.',
  url: 'https://minjoo-park.netlify.app/',
  openGraph: {
    title: '박민주 포트폴리오',
    description: 'Next.js로 제작한 박민주 포트폴리오 사이트입니다.',
    url: 'https://minjoo-park.netlify.app/',
    siteName: '박민주 포트폴리오',
    images: [
      {
        url: 'https://minjoo-park.netlify.app/og-img.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <link rel="icon" href="favicon.svg" />
      <body className={pretendard.variable}>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
