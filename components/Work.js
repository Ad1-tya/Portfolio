import React from 'react'
import { Heading } from '@/components'
import workData from '@/content/workData'
import Image from 'next/image'

const Work = () => {

  const Cards = workData.map(items => (
    <div className='flex flex-col items-start gap-[1.25rem]'>
      <div className='relative w-[288px] h-[336px] border-purple-900/30 border-2 xl:w-[352px] xl:h-[400px]'>
        <Image 
          src={`/images/work/${items.img}`} 
          alt='Card Image'
          fill={true}
          objectFit='cover'
          layout='fixed'
        />
      </div>
      <p>{items.title}</p>
    </div>
  ))

  return (
    <div className='main flex flex-col'>
        <Heading text="works" />
        <div className='flex items-start gap-5 sm:pl-[32%]'>
            {Cards}
        </div>  
    </div>
  )
}

export default Work