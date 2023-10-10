import react from 'react'
import {Loading, Navbar, Education, Work, Experience, Hero, Skills, Footer} from '@/components'

export default function About(){

    return(
        <section className='bg-neutral-950 flex flex-col pt-8 sm:pt-0'>
            <Navbar label="about" link="works"/>
            <Hero />
            <Education />
            <Experience />
            <Skills />
            <Footer/>
        </section>
    )
}