import React from 'react'
import { Heading } from '@/components'
import skillsData from '@/content/skillsData'
import Image from 'next/image'

const Skills = () => {

  const desList = skillsData.Designing.map(items => (
    <div className='skillscard relative'>
      <Image 
        src={`/images/skills/${items.img}`}
        objectFit='contain'
        layout='fill'
        alt='logos'
        className='max-w-[48px] max-h-[48px] m-auto inset-0'
      />
    </div> 
  ))

  const feList = skillsData.Frontend.map(items => (
    <div className='skillscard relative'>
      <Image 
        src={`/images/skills/${items.img}`}
        objectFit='contain'
        layout='fill'
        alt='logos'
        className='max-w-[48px] max-h-[40px] m-auto inset-0'
      />
    </div> 
  ))

  return (
    <div id='skills' className='main flex flex-col'>
        <Heading text="Skills" />
        <div className='flex gap-6 items-start content-center lg:gap-11 self-stretch flex-wrap flex-1'>
            <div className='flex flex-col items-start gap-5'>
              <p className='text-neutral-500'>\\ FIGMA \\ PHOTOSHOP \\ ILLUSTRATOR \\</p>
              <div className='flex justify-between items-start content-start self-stretch'>{desList}</div>
              <h4 className='text-neutral-500'>Designing</h4>
            </div>
            <div className='flex flex-col items-start gap-5 flex-1'>
              <p className='text-neutral-500'>\\ REACT \\ CSS \\ HTML \\ NEXT \\ FRAMER MOTION \\ TAILWIND \\</p>
              <div className='flex gap-5 justify-between flex-wrap sm:gap-4 lg:justify-between items-start content-start self-stretch sm:flex-nowrap'>{feList}</div>
              <h4 className='text-neutral-500'>Frontend</h4>
            </div>
        </div>  
    </div>
  )
}

export default Skills