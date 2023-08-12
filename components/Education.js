import React from 'react'
import { Heading } from '@/components'
import educationData from '@/content/educationData'
import Image from 'next/image'

const Education = () => {

  const Cards = educationData.map(items => (
    <div className='relative w-full'>
      <div className='flex-col-reverse gap-3 p-4 educard flex sm:flex-col items-start justify-between self-stretch w-full h-max sm:p-6 z-10'>
        <div className='flex flex-col items-start gap-6'>
          <h4>{items.subject}</h4>
          <div className='flex flex-col'>
          <p>{items.instituteName}</p>
          <p>{items.campus}</p>
          <p>{items.country}</p>
          </div>
        </div>
        <p className='text-purple-500'>{items.grade}</p>
      </div>
      <Image 
        src="./lighteff.svg" alt='Gradient effect' width={120} height={120}
        style={{fill: "radial-gradient(50% 50.00% at 50% 50.00%, #A562EA 0%, rgba(165, 98, 234, 0.00) 100%)", filter: "blur(22px)"}}
        className="absolute right-[10%] bottom-4 -z-10"
      />
    </div>
  ))

  return (
    <div id='education' className='main flex flex-col'>
        <Heading text="Education" />
        <div className='flex flex-col sm:flex-row items-start gap-5'>
            {Cards}
        </div>  
    </div>
  )
}

export default Education