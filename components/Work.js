"use client";

import React, { useRef, useEffect, useState } from 'react'
import { Heading } from '@/components'
import workData from '@/content/workData'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

const Work = (props) => {

  const router = useRouter()

  const [percentage, setPercentage] = useState(0)

  const handleRoute = (workurl) => {
    if (workurl)
      router.push(`/work/${workurl}`)
  }

  const cardSlide = useRef(null)

  const scrollHandler = (e) => {
    const container = cardSlide.current
    const divideY = e.deltaY/10
    const divideX = e.deltaX/10
    const newPercentage = percentage + divideX + divideY
    if (newPercentage <= 300 && newPercentage >= 0) {
      setPercentage(newPercentage);
      container.style.transition = 'transform 0.3s ease-out';
      container.style.transform = `translate(-${percentage/4}%, 0%)`;
    }
  }


  const Cards = workData.map(items => (
    <div key={items.id} id="works" className='flex flex-col items-start gap-[1.25rem] sm:hover:scale-105 hover:transition-all' onClick={() =>handleRoute(items.id)}>
      <div className='relative object-center w-[270px] h-[320px] border-purple-900/30 border-2 hover:border-purple-600 xl:w-[352px] xl:h-[400px]' >
        <Image 
          src={`/images/work/${items.img}`} 
          alt='Card Image'
          fill={true}
          className='grayscale hover:grayscale-0 snap-center object-cover transition-all'
          objectPosition={`${percentage/3}% 100%`}
          sizes='(max-width: 808px) 50vw, 100vw'
          priority={true}
        />
      </div>
      <p>{items.title}</p>
    </div>
  ))


  return (
    <section className='w-screen h-screen flex items-center' onWheel={scrollHandler}>
        <div ref={cardSlide} className='relative px-[10%] overflow-x-auto sm:overflow-visible sm:top-[5%] sm:pl-[50%] flex items-start gap-4 lg:gap-6 snap-mandatory snap-x scrollbar-hide' >
            {Cards}
        </div>  
    </section>
  )
}

export default Work