import React from 'react';
import {Navbar, Education, Experience, Hero, Skills, Footer, Explore} from '@/components'

export default function Home() {

  return (
    <section className='bg-neutral-950 flex flex-col pt-8 sm:pt-0'>
      <Navbar label="about" link="work"/>
      <Hero />
      <Explore />
      <Education />
      <Experience />
      <Skills />
      <Footer/>
    </section>
  )
}
