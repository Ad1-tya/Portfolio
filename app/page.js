"use client";

import React, { useState, useEffect } from 'react';
import {Navbar, Education, Work, Experience, Hero, Skills, Footer} from '@/components'
import { motion, scroll, useDragControls, useScroll, useTransform } from 'framer-motion';


export default function Home() {

  let { scrollYProgress } = useScroll()
  let y = useTransform(scrollYProgress, [0,1], ['0%','50%'])


  return (
    <motion.main 
    style={{y}} 
    className='scrollbar-hide'>
        <Navbar />
        <Hero />
        <Work />
        <Education />
        <Experience />
        <Skills />
        <Footer />
    </motion.main>
  )
}
