import localFont from 'next/font/local';
import '@/assets/scss/style.scss';

const pretendard = localFont({
  src: '../assets/font/pretendard/PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretendard',
});

export const metadata = {
  title: '박민주 포트폴리오',
  description: 'Next.js로 제작한 박민주 포트폴리오 사이트입니다.',
  keywords: ['포트폴리오', '넥스트', 'portfolio', 'next.js'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <link rel="icon" href="favicon.svg" />
      <body className={pretendard.variable}>{children}</body>
    </html>
  );
}
