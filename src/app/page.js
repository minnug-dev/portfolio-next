'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Skip from '@/components/Skip';
import About from '@/components/About';
import Work from '@/components/Work';
import Site from '@/components/Site';
import Port from '@/components/Port';
import Contact from '@/components/Contact';
import lenis from '@/utils/lenis';
import link from '@/utils/link';

export default function Home() {
  useEffect(() => {
    lenis();
    link();
  }, []);

  return (
    <>
      <Skip />
      <Header />
      <main id="main" role="main">
        <About />
        <Work />
        <Site />
        <Port />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
