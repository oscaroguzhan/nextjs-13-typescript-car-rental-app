"use client";
import { CustomButtonProps } from '@/types';
import React from 'react'

//* keep in mind by default all component are server-side rendered in next.js and
//* we have click event so we turn this one to client rendered component

//* it is also important to tell ts which type of props get this custom button component
function CustomButton({title, containerStyle, handleClick, btnType}: CustomButtonProps) {

  return (
    <button className={`custom-btn ${containerStyle}`}
    disabled={false}
    type={btnType || 'button'}
    onClick={handleClick}
    >
      <span>
        {title}
      </span>
    </button>
  )
}

export default CustomButton