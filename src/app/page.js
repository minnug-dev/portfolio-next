'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Skip from '@/components/Skip';
import Intro from '@/components/Intro';
import About from '@/components/About';
import Work from '@/components/Work';
import Project from '@/components/Project';
import Contact from '@/components/Contact';
import lenis from '@/utils/lenis';
import link from '@/utils/link';
import Footer from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    lenis();
    link();
  }, []);

  return (
    <>
      <Skip />
      <Header />
      <main className="main" role="main">
        <Intro />
        <About />
        <Work />
        <Project />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
