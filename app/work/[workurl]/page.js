"use client"

import react from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import workData from '@/content/workData'


export default function Portfolio(){

    const pathname = usePathname();
    const workid = pathname.split('/')[2];

    const workItem = workData.find(item => item.id === parseInt(workid));

    const iframeSrc = workItem?.workurl ? workItem.workurl : 'about:blank';
    const iframeSrcMob = workItem?.workurlmob ? workItem.workurlmob : 'about:blank';
    const iframeSrcMed = workItem?.workurlmed ? workItem.workurlmed : 'about:blank';

    return(
        <section className='w-screen h-screen overflow-hidden bg-neutral-950'>
            <iframe className='w-full h-[108vh] sm:hidden' src={iframeSrcMob} allowfullscreen></iframe>
            <iframe className='w-full h-[108vh] hidden xl:block' src={iframeSrc} allowfullscreen></iframe>
            <iframe className='w-full h-[108vh] hidden sm:block xl:hidden' src={iframeSrcMed} allowfullscreen></iframe>
        </section>
    )
}
