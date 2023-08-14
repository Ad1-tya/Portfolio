"use client";

import {easeInOut, motion} from 'framer-motion'
import React , {useState} from 'react'
import Image from 'next/image'
import { Button } from '@/components'


const itemani = {
  hidden:{
    opacity: 0,
    y: 100
  },
  visible:{
    opacity:1,
    y: 0
  },
  transition:{
    delay: 0.3,
    duration: 2,
    ease:'easeInOut'
  }

}

const Hero = () => {

  const [isLoading, setLoading] = useState(true);

  return (
    <div className='pt-11 z-10 justify-center main relative flex sm:justify-between flex-wrap sm:flex-nowrap'>
        <div className='absolute sm:right-8 sm:top-8 -top-7 sm:absolute lg:relative lg:inset-0 flex flex-col items-center justify-center w-[22rem] h-[22rem]'>
          <hr className='undEff w-11/12 top-[104px]' />
          <hr className='undEff w-11/12 top-[194px]' />
          <hr className='undEff w-11/12 top-[156px]' />
          <hr className='undEff w-11/12 top-[246px]' />
          <h1 className="text-center sm:text-left text-purple-500 uppercase">Aditya<br />Pandey</h1>
          
        </div>
        <motion.div className='z-10 sm:relative flex flex-col sm:-z-10 lg:z-0 items-center'>
                <motion.p initial={{opacity:0}} animate={{opacity:0.1, duration:3, delay:3}} transition={{type:easeInOut}}
                  className="hidden lg:block sm:absolute -top-4 w-max mx-auto uppercase text-neutral-50 opacity-10 text-2xl -z-10 sm:tracking-[1.75rem] ">Crafting Experience</motion.p>
                <motion.div variants={itemani} initial="hidden" animate="visible">
                  <Image
                  loading='lazy'
                      src="./images/heroImage.png"
                      width={352}
                      height={458}
                      alt="Image of Aditya"
                      className={` z-10 object-cover
                                    duration-700 ease-in-out group-hover:opacity-75
                                    ${
                                      isLoading
                                        ? "scale-110 blur-2xl grayscale"
                                        : "scale-100 blur-0 grayscale-0"
                                    })`}
                                onLoadingComplete={() => setLoading(false)}
                  
                      sizes='(max-width: 808px) 50vw, 100vw'
                      placeholder='blur'
                  />
                </motion.div>
                <hr className='w-4/5 border-neutral-500 z-20'/>
        </motion.div> 
        <div className='lg:static items-center text-center flex flex-col sm:text-left sm:items-start gap-[1rem] mt-auto w-[22rem]'>
            <h3>UI/UX DESIGNER</h3>
            <p className='text-neutral-400'>Besides designing, I love playing games (especially VALORANT), listening to music and just chilling with my friends.</p>
            {/* <Button text="Hire me" type="icon-right" /> */}
        </div>       
    </div>
  )
}

export default Hero