"use client";

import React from 'react'
import { Link } from 'react-scroll'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className="main z-40 justify-center py-4 flex sm:justify-between">
        <Image
            src="./logo.svg"
            alt="Adi Logo"
            sizes='(max-width: 808px) 50vw, 100vw'
            placeholder='blur'
        />
        <div className="hidden sm:text-neutral-500 sm:text-sm sm:flex sm:items-center sm:gap-7">
            <Link to="works" spy={true} smooth={true} offset={200} duration={500} className='hover:text-purple-500 cursor-pointer'>WORKS</Link>
            <Link to="experience" spy={true} smooth={true} offset={350} duration={500} className='hover:text-purple-500 cursor-pointer'>EXPERIENCE</Link>
            <Link to="skills" spy={true} smooth={true} offset={450} duration={500} className='hover:text-purple-500 cursor-pointer'>SKILLS</Link>
            <Link to="education" spy={true} smooth={true} offset={550} duration={500} className='hover:text-purple-500 cursor-pointer'>EDUCATION</Link>
        </div>
    </div>
  )
}

export default Navbar