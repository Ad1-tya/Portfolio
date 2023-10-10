import React from 'react';
import {Navbar, Work} from '@/components'

export default function Home() {

  return (
    <section className='w-screen h-screen overflow-hidden bg-neutral-950'>
      <Navbar label="Works" link="About"/>
      <Work />
    </section>
  )
}
