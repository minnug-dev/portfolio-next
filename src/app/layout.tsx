import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import localFont from 'next/font/local';
import { Montserrat, Space_Mono } from 'next/font/google';
import '@/assets/scss/style.scss';
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, siteOpenGraph } from '@/constants/site';
import Skip from '@/components/Skip';
import Cursor from '@/components/Cursor';

config.autoAddCss = false;

const pretendard = localFont({
  src: '../assets/font/pretendard/PretendardVariable.woff2',
  weight: '45 920',
  display: 'swap',
  variable: '--font-pretendard',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  icons: { icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }] },
  openGraph: siteOpenGraph,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="ko"
      className={`${pretendard.variable} ${montserrat.variable} ${spaceMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Skip />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
