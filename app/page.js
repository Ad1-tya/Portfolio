"use client";

import React, { useState, useEffect } from 'react';
import {Navbar, Education, Work, Experience, Hero, Skills, Footer} from '@/components'
import { motion, scroll, useDragControls, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';


export default function Home() {

  let { scrollYProgress } = useScroll()
  let y= useTransform(scrollYProgress, [0, 4], ['0%', '50%']);

  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  return (
    <main className='bg-neutral-950/90'>
        <Image 
        src={'./mainbg.webp'}
        alt='background texture'
        objectFit='cover'
        layout='fill'
        sizes='(max-width: 808px) 50vw, 100vw'
        placeholder='blur'
        className='bg-neutral-950 -z-10 mix-blend-multiply repea'
        priority={true}/>
      <motion.div id='main-container' style={!isMobile ? { y } : {}} className='snap-y snap-proximity overflow-y-scroll flex flex-col sm:overflow-hidden h-screen sm:h-auto scrollbar-hide'>
        <div className='sm:snap-start'>
        <Navbar />
        </div>
        <div className='snap-start'>
        <Hero />
        </div>
        <div className='snap-start'>
          <Work />
        </div>
        <div className='snap-start'>
          <Experience />
        </div>
        <div className='snap-start'>
          <Skills />
        </div>
        <div className='snap-start'>
          <Education /> 
        </div>
        <div className='snap-start'>
        <Footer />
        </div>
      </motion.div>
    </main>
  )
}
