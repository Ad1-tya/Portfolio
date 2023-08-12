"use client";

import React, { useState, useEffect } from 'react';
import {Navbar, Education, Work, Experience, Hero, Skills, Footer} from '@/components'
import { motion, scroll, useDragControls, useScroll, useTransform } from 'framer-motion';


export default function Home() {

  let { scrollYProgress } = useScroll()
  const y = window.innerWidth > 640 ? useTransform(scrollYProgress, [0, 1], ['0%', '50%']) : '0%';


  return (
    <motion.main 
    style={{y, background: "url(./mainbg.png), linear-gradient(0deg, #121311 0%, #121311 100%)", backgroundBlendMode:"multiply" ,backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundAttachment:"fixed"}} 
    className='snap-y snap-mandatory sm:snap-proximity flex flex-col overflow-y-scroll h-screen sm:h-auto scrollbar-hide'>
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
    </motion.main>
  )
}
