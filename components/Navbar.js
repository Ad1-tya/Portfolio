import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

const Navbar = (props) => {
  return (
    <div className={`main flex items-center h-max mx-auto inset-0 snap-start justify-between absolute z-50 py-4`}>
        <Image
            src="./logo.svg"
            alt="Adi Logo"
            width={40}
            height={24}
            className='grayscale'
        />
        <div className='flex gap-3'>
          <div className='text-sm capitalize text-neutral-300 font-bold'>{props.label}</div>
          <Link href={`/${ props.link=="works"? ``: `${props.link}`}`} className='capitalize text-sm text-neutral-500 hover:blur-[1px]'>{props.link}</Link>
        </div>
    </div>
  )
}

export default Navbar