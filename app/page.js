import {Education, Work, Experience, Hero, Skills } from '@/components'


export default function Home() {
  return (
    <main className='overflow-hidden'>
        <Hero />
        <Work />
        <Education />
        <Experience />
        <Skills />
    </main>
  )
}
