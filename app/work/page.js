import react from 'react'
import { Navbar, Work } from '@/components'

export default function About(){

    return(
        <section className='w-screen h-screen overflow-hidden bg-neutral-950'>
            <Navbar label="work" link="about"/>
            <Work />
        </section>
    )
}