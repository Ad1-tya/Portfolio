import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='main gap-8 footerbg relative flex flex-col items-center justify-center lg:gap-11' style={{backgroundImage:"url(./images/footer/background.png)"}}>
        <div className='flex flex-col gap-8 items-center'>  
          <h4 className='font-normal text-purple-500 uppercase'> Let's connect! </h4>
          <div className='flex flex-col items-center gap-7'>
            <p> mraditya2017@gmail.com </p>
            <div className='flex items-start gap-5'>
              <svg className="fill-neutral-50 hover:fill-purple-500 cursor-pointer" width="48" height="49"><path d="M33 13h-6a2 2 0 0 0-2 2v6h8a.7.7 0 0 1 .68.92l-1.48 4.4a1 1 0 0 1-.94.68H25v15a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V27h-3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h3v-6a8 8 0 0 1 8-8h7a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1Z"/></svg>
              <svg className="fill-neutral-50 hover:fill-purple-500 cursor-pointer" width="48" height="49" fill="none"><path fill-rule="evenodd" d="M32 7H16C10.477 7 6 11.477 6 17v16c0 5.523 4.477 10 10 10h16c5.523 0 10-4.477 10-10V17c0-5.523-4.477-10-10-10Zm6.5 26a6.52 6.52 0 0 1-6.5 6.5H16A6.52 6.52 0 0 1 9.5 33V17a6.52 6.52 0 0 1 6.5-6.5h16a6.52 6.52 0 0 1 6.5 6.5v16Zm-5-15.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM24 16a9 9 0 1 0 9 9 8.98 8.98 0 0 0-9-9Zm-5.5 9a5.5 5.5 0 1 0 11 0 5.5 5.5 0 0 0-11 0Z" clip-rule="evenodd"/></svg>
              <svg className="fill-neutral-50 hover:fill-purple-500 cursor-pointer" width="48" height="49" ><path fill-rule="evenodd" d="M10 7h28a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4V11a4 4 0 0 1 4-4Zm6 30a1 1 0 0 0 1-1V22a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3Zm-1.5-18a3 3 0 1 1 0-6 3 3 0 0 1 0 6ZM35 37a1 1 0 0 0 1-1v-9.2a6.2 6.2 0 0 0-5.44-6.28A6 6 0 0 0 25 23.2V22a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7.5a3 3 0 0 1 6 0V36a1 1 0 0 0 1 1h3Z" clip-rule="evenodd"/></svg>
              <svg className="fill-neutral-50 hover:fill-purple-500 cursor-pointer" width="48" height="49" ><path d="M41.947 13.435a14.378 14.378 0 0 1-3.325 3.2v.99a21.943 21.943 0 0 1-6.517 15.644 21.921 21.921 0 0 1-15.715 6.329 21.989 21.989 0 0 1-9.795-2.266.45.45 0 0 1-.27-.413v-.198c0-.258.21-.468.467-.468a15.921 15.921 0 0 0 9.202-3.308 7.855 7.855 0 0 1-6.991-4.604.468.468 0 0 1 .467-.647 7.188 7.188 0 0 0 2.732-.252 7.839 7.839 0 0 1-6.2-6.85.468.468 0 0 1 .646-.468 7.183 7.183 0 0 0 2.84.611 7.698 7.698 0 0 1-3.073-8.883.97.97 0 0 1 1.635-.323 22.21 22.21 0 0 0 15.116 6.977 7.208 7.208 0 0 1-.216-1.799 7.84 7.84 0 0 1 4.979-7.167 7.834 7.834 0 0 1 8.519 1.88 15.615 15.615 0 0 0 4.295-1.492.306.306 0 0 1 .324 0c.062.1.062.225 0 .324a7.858 7.858 0 0 1-3.163 3.596 15.422 15.422 0 0 0 3.594-.863.287.287 0 0 1 .324 0 .305.305 0 0 1 .125.45Z"/></svg>
            </div>
          </div>
        </div> 
        <p className='hover:text-purple-500 cursor-pointer hover:underline'> Back to top </p>

    </div>
  )
}

export default Footer