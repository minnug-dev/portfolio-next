'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Skip from '@/components/Skip';
import About from '@/components/About';
import Skill from '@/components/Skill';
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
        <Skill />
        <Site />
        <Port />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
