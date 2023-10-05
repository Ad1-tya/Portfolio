"use client"
import React, { useEffect, useState } from 'react';

const Loading = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (loadingProgress < 100) {
        setLoadingProgress((prevProgress) => prevProgress + 1);
      }
    },80); // Adjust the interval time as needed

    // Simulate loading completion (you can replace this with real loading logic)
    setTimeout(() => {
      clearInterval(interval);
    }, 4000); // Adjust the delay time as needed
  }, []);

  return (
    <div className="w-screen h-screen relative overflow-hidden bg-neutral-950">
      <div className="absolute top-[10%] left-[10%] text-neutral-200 text-xl">
        {loadingProgress}
      </div>
    <div className="flex items-center justify-center w-full h-full">
        <div className='uppercase text-base text-left text-neutral-200'>Hey! I'm <br/><span className='text-2xl text-neutral-50'>Aditya Pandey</span></div>
    </div>
    </div>
  );
};

export default Loading;
