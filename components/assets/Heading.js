import React from 'react'

const Heading = (props) => {
  return (
    <div className='relative flex flex-col w-max px-2 items-center sm:self-stretch self-center'>
        <hr className='absolute undEff top-[12px] sm:top-[13px]' />
        <h2>{props.text}</h2>
        <hr className='undEff absolute top-[47px] sm:top-[54px]' />
    </div>
  )
}

export default Heading