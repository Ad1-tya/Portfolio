import React from 'react'
import { Heading } from '@/components'
import expData from '@/content/expData'
import Image from 'next/image'

const Experience = () => {

  const xps = expData.map(items => (
    <div key={items.id} className='border-neutral-800 border-b-[1px] min-w-[200px] p-4 w-full sm:border-none sm:w-[40vw] flex flex-col items-center gap-3 lg:w-[352px] sm:p-5 justify-center shrink-0 transition-all hover:bg-neutral-900/30  hover:filter-none'>
      <Image 
        src={`/images/exp/${items.img}`}
        width={40}
        height={40}
        alt='Experience Logos'
        className='max-w-[40px] max-h-[40px] m-auto inset-0 object-contain'
      />
      <div className='gap-1 w-full flex flex-col items-center'>
        <h4 className='text-purple-500'>{items.title}</h4>
        <p>{items.company}</p>
      </div> 
      <p className='text-neutral-300'>{items.time}</p>
    </div>
  ))

  return (
    <div id='experience' className='flex top-0 snap-start flex-col sm:items-center main'>
        <div><Heading text="Experience" /></div>
        <div className='flex justify-center flex-wrap items-end sm:justify-center lg:gap-5'>
            {xps}
        </div>
    </div>
  )
}

export default Experience