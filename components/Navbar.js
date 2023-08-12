"use client";

import React from 'react'
import { Link } from 'react-scroll'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className="main bg-neutral-950 z-40 justify-center py-4 flex sm:justify-between">
        <Image
            src="./logo.svg"
            alt="Adi Logo"
            width={56}
            height={24}
        />
        <div className="hidden sm:text-neutral-500 sm:text-sm sm:flex sm:items-center sm:gap-7">
            <Link to="works" spy={true} smooth={true} offset={800} duration={500} className='hover:text-purple-500 cursor-pointer'>WORKS</Link>
            <Link to="education" spy={true} smooth={true} offset={1300} duration={500} className='hover:text-purple-500 cursor-pointer'>EDUCATION</Link>
            <Link to="experience" spy={true} smooth={true} offset={1700} duration={500} className='hover:text-purple-500 cursor-pointer'>EXPERIENCE</Link>
            <Link to="skills" spy={true} smooth={true} offset={2000} duration={500} className='hover:text-purple-500 cursor-pointer'>SKILLS</Link>
        </div>
    </div>
  )
}

export default Navbar