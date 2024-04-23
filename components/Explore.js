import React from 'react'
import Link from 'next/link'

const Explore = () => {

  return (
    <Link href="/work" className='main group explorebg relative flex flex-col items-center justify-center cursor-pointer' >
        <div className='text-neutral-50 text-lg sm:text-2xl  items-center justify-center group-hover:scale-105 transition-all duration-300'>
            <span className='text-purple-500 group-hover:textglow'>Click</span> to explore my best works
        </div>  
    </Link>
  )
}

export default Explore