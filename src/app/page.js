'use client';

import React from 'react';
import Header from '@/components/Header';
import Skip from '@/components/Skip';
import Intro from '@/components/Intro';
import About from '@/components/About';
import Work from '@/components/Work';
import Project from '@/components/Project';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
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
