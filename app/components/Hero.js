import React from 'react'
import Button from './Button'
import Calendar from './Calendar'

export default function Hero() {
  return (
    <div className='py-4 md:py-0 flex flex-col gap-4 sm:gap-8 mx-3'>
        <h1 className='font-fugaz text-5xl sm:text-6xl md:text-7xl text-center'><span className='textGradient'>Broodle</span> helps you track your <span className='textGradient'>daily</span> mood!</h1>
        <p className='text-lg sm:text-xl md:text-2xl text-center font-openSans w-full mx-auto max-x-[600px]'>Create your mood record and see how you feel on<br/> <span className='font-semibold'>everyday of everyyear.</span></p>
        <div className='grid grid-cols-2 gap-4 w-fit mx-auto'>
          <Button text="Sign Up" />
          <Button text="Login" dark/>
        </div>
        <Calendar/>
    </div>

  )
}
