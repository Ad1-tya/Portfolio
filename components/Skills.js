import React from 'react'
import { Heading } from '@/components'
import skillsData from '@/content/skillsData'
import Image from 'next/image'

const Skills = () => {

  const desList = skillsData.Designing.map(items => (
    <div key={items.id} className='skillscard relative'>
      <Image 
        src={`/images/skills/${items.img}`}
        width={48}
        height={48}
        alt='logos'
        sizes='(max-width: 808px) 50vw, 100vw'
        className='max-w-[48px] max-h-[48px] m-auto inset-0 object-contain'
      />
    </div> 
  ))

  const feList = skillsData.Frontend.map(items => (
    <div key={items.id} className='skillscard relative'>
      <Image 
        src={`/images/skills/${items.img}`}
        width={48}
        height={48}
        alt='logos'
        className='max-w-[48px] max-h-[40px] m-auto inset-0 object-contain'
        sizes='(max-width: 808px) 50vw, 100vw'
      />
    </div> 
  ))

  return (
    <div id='skills' className='snap-start main flex flex-col'>
        <Heading text="Skills" />
        <div className='flex gap-6 items-start content-center lg:gap-11 self-stretch flex-wrap flex-1'>
            <div className='flex flex-col-reverse items-start gap-5'>
              <p className='text-neutral-500'>\\ FIGMA \\ PHOTOSHOP \\ ILLUSTRATOR \\</p>
              <div className='flex justify-between items-start content-start self-stretch'>{desList}</div>
              <h4 className='text-neutral-500'>Designing</h4>
            </div>
            <div className='flex flex-col-reverse items-start gap-5 flex-1'>
              <p className='text-neutral-500'>\\ REACT \\ CSS \\ HTML \\ NEXT \\ FRAMER MOTION \\ TAILWIND \\</p>
              <div className='flex gap-5 justify-between flex-wrap sm:gap-4 lg:justify-between items-start content-start self-stretch sm:flex-nowrap'>{feList}</div>
              <h4 className='text-neutral-500'>Frontend</h4>
            </div>
        </div>  
    </div>
  )
}

export default Skills