import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedWork from '../components/FeaturedWork';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section id="work">
          <FeaturedWork />
        </section>
        <Contact />
      </main>
    </>
  );
}