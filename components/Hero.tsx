"use client"
import React from 'react'
import CustomButton from './CustomButton'

function Hero() {
  const handleScroll = () => {

  }
  return (
    <div className='hero max-width'>
      <h1 className='hero__title'>Rent your favorite car quickly! </h1>
      <p className='hero__subtitle'>A rental experience with effortless booking process</p>
      <CustomButton
        title="Explore Now"
        containerStyle="mt-10 rounded-full text-white bg-[var(--purple)] w-[200px] text-[16px] uppercase pointer"
        handleClick={handleScroll}
      />
    </div>
  )
}

export default Hero