import React from 'react';
import {Navbar, Work} from '@/components'

export default function Home() {

  return (
    <section className='w-screen h-screen overflow-hidden bg-neutral-950'>
      <Navbar label="works" link="about"/>
      <Work />
    </section>
  )
}
