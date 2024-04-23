import React from 'react'
import Image from 'next/image'
import { Button } from '@/components'


const Hero = () => {
  return (
    <div className='snap-start pt-40 z-10 justify-center main lg:h-screen relative flex sm:justify-between flex-wrap sm:flex-nowrap'>
        <div className='absolute sm:right-8 sm:top-8 -top-7 sm:absolute lg:relative lg:inset-0 flex flex-col items-center justify-center w-[22rem] h-[22rem]'>
          <hr className='undEff w-11/12 top-[104px]' />
          <hr className='undEff w-11/12 top-[194px]' />
          <hr className='undEff w-11/12 top-[156px]' />
          <hr className='undEff w-11/12 top-[246px]' />
          <h1 className="text-center sm:text-left text-purple-500 uppercase">Aditya<br />Pandey</h1>
        </div>
        <div className='z-10 sm:relative flex flex-col sm:-z-10 lg:z-0 items-center '>
                <p className="hidden lg:block sm:absolute -top-4 w-max mx-auto uppercase text-neutral-50 opacity-10 text-2xl -z-10 sm:tracking-[1.75rem] ">Crafting Experience</p>
                <div>
                  <Image
                      src="/images/heroImage.webp"
                      width={352}
                      height={458}
                      alt="Image of Aditya"
                      className='z-10 object-cover'
                      priority={true}
                  />
                </div>
                <hr className='w-4/5 border-neutral-500 z-20'/>
        </div> 
        <div className='lg:static items-center text-center flex flex-col sm:text-left sm:items-start gap-[1rem] mt-auto w-[22rem]'>
            <h3>UI/UX DESIGNER</h3>
            <p className='text-neutral-400'>Besides designing, I love playing games (especially VALORANT), listening to music and just chilling with my friends.</p>
            {/* <Button text="Hire me" type="icon-right" /> */}
        </div>       
    </div>
  )
}

export default Hero