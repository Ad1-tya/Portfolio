import React from 'react'
import { Heading } from '@/components'
import expData from '@/content/expData'

const Experience = () => {

  const xps = expData.map(items => (
    <div className='min-w-[200px] p-4 w-full sm:w-[40vw] flex flex-col items-start gap-3 lg:w-[352px] sm:p-5 justify-center shrink-0 hover:glisten'>
      <div className='sm:gap-1 w-full flex justify-between sm:flex-col items-start'>
        <h4 className='text-purple-500'>{items.title}</h4>
        <p>{items.company}</p>
      </div> 
      <p className='text-neutral-300'>{items.time}</p>
    </div>
  ))

  return (
    <div className='flex flex-col sm:items-end main'>
        <Heading text="Experience" />
        <div className='flex justify-center flex-wrap items-end sm:justify-between lg:justify-end content-end lg:gap-5 lg:w-[70%]'>
            {xps}
        </div>
    </div>
  )
}

export default Experience