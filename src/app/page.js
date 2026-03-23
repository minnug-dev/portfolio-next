'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Skip from '@/components/Skip';
import Intro from '@/components/Intro';
import Skill from '@/components/Skill';
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
        <Intro />
        <Skill />
        <Port />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
