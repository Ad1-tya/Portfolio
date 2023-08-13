"use client";

import React, { useRef, useEffect, useState } from 'react'
import { Heading } from '@/components'
import workData from '@/content/workData'
import Image from 'next/image'
import { render } from 'react-dom';

const Work = (props) => {

  const [render, setRender] = useState(false)
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    const setRenderer = (e) => {
      if (render) {
        e.preventDefault();
      }
    };

    window.addEventListener('wheel', setRenderer, { passive: false });

    return () => {
      window.removeEventListener('wheel', setRenderer);
    };
  }, [render]);

  const cardSlide = useRef(null)

  const scrollHandler = (e) => {
    const container = cardSlide.current
    const divide = e.deltaY/10
    const newPercentage = percentage + divide
    console.log(newPercentage)
    if (newPercentage/2 <= 170 && newPercentage > 0) {
      setPercentage(newPercentage);
      container.style.transition = 'transform 0.3s ease-out';
      container.style.transform = `translate(-${percentage/2}%, 0%)`;
      setRender(true)
    } else{
      setRender(false)
    }
    console.log(newPercentage)
  }

  const Cards = workData.map(items => (
    <div className='flex flex-col items-start gap-[1.25rem] sm:hover:scale-105 hover:transition-all'>
      <div className='relative object-center w-[270px] h-[320px] border-purple-900/30 border-2 hover:border-purple-600 xl:w-[352px] xl:h-[400px]' >
        <Image 
          src={`./images/work/${items.img}`} 
          alt='Card Image'
          fill={true}
          className='grayscale hover:grayscale-0 snap-center object-cover transition-all'
          objectPosition={`${percentage/4}% 100%`}
        />
      </div>
      <p>{items.title}</p>
    </div>
  ))

  function disableRender(){
    setRender(false)
  }

  return (
    <div id='works' className='main top-0 flex flex-col' onScroll={scrollHandler} onMouseLeave={disableRender}>
        <Heading text="works" />
        <div ref={cardSlide} className='relative px-0 overflow-x-auto sm:overflow-visible sm:top-1/2 sm:left-1/2 flex items-start gap-4 lg:gap-6 snap-mandatory snap-x scrollbar-hide' >
            {Cards}
        </div>  
    </div>
  )
}

export default Work