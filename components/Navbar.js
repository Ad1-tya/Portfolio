import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className="main justify-center py-4 flex sm:justify-between">
        <Image
            src="./logo.svg"
            alt="Adi Logo"
            width={56}
            height={24}
        />
        <ul className="hidden sm:text-neutral-500 sm:text-sm sm:list-none sm:flex sm:items-center sm:gap-7">
            <li>WORKS</li>
            <li>EDUCATION</li>
            <li>EXPERIENCE</li>
            <li>SKILLS</li>
        </ul>
    </div>
  )
}

export default Navbar