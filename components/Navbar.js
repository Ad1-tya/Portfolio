import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

const Navbar = (props) => {
  return (
    <div className={`flex items-center h-max sm:snap-start snap-end justify-between ${props.label=="about"? `main mx-auto inset-0`:`w-full px-[10%]`} absolute sm:snap-start z-50 py-4`}>
        <Image
            src="./logo.svg"
            alt="Adi Logo"
            width={40}
            height={24}
            className='grayscale'
        />
        <div className='uppercase text-base text-neutral-500 font-bold'>{props.label}</div>
        <Link href={`/${ props.link=="works"? ``: `${props.link}`}`} className=' text-sm uppercase text-purple-500 hover:blur-[1px]'>{props.link}</Link>
    </div>
  )
}

export default Navbar