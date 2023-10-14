"use client"
import React from 'react'
import CustomButton from './CustomButton'
import Image from 'next/image'

function Hero() {
  const handleScroll = () => {

  }
  return (
    <div className='hero max-width'>
      <div className='flex-1'>
        <h1 className='hero__title'>Rent your favorite car quickly! </h1>
        <p className='hero__subtitle'>A rental experience with effortless booking process</p>
        <CustomButton
          title="Explore Now"
          containerStyle="mt-6 mx-auto rounded-full text-white bg-[var(--purple)] w-[200px] text-[16px] uppercase pointer"
          handleClick={handleScroll}
        />
      </div>
        <div className='hero__image-container'>
          <div className="hero__image">
            <Image src="/tesla-hero-pic1.png" alt='hero' fill className='object-contain' />
            <div className='hero__image-overlay'/>
          </div>
        </div>
    </div>
  )
}

export default Hero