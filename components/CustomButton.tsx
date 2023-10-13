"use client";
import { CustomButtonProps } from '@/types';
import Image from 'next/image'
import React from 'react'

//* keep in mind by default all component that is rendered in next.js is server-side rendered component 
//* we have click event so this is a client rendered component 
 
function CustomButton({title, containerStyle, handleClick}: CustomButtonProps) {

  return (
    <button className={`custom-btn ${containerStyle}`}
    disabled={false}
    type={'button'}
    onClick={handleClick}
    >
      <span>
        {title}
      </span>
    </button>
  )
}

export default CustomButton