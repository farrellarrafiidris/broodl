import React from 'react'
import Button from './Button'

export default function Login() {
  return (
    <div className='flex flex-col flex-1 justify-center items-center gap-4'><h3 className=' font-fugaz text-4xl sm:text-5xl md:text-6xl'>Login / Register</h3>
    <p>
      You&#39;re one stap away!
    </p>
    <input type="email" className='w-full max-w-[400px] mx-auto px-3 border-2 duration-200 hover:border-indigo-600 focus:border-indigo-600 py-2 sm:py-3 border-solid border-indigo-400 rounded-full outline-none' placeholder='Email' />
    <input type="password" className='w-full max-w-[400px] mx-auto px-3 border-2 duration-200 hover:border-indigo-600 focus:border-indigo-600 py-2 sm:py-3 border-solid border-indigo-400 rounded-full outline-none' placeholder='Password' />
    <div className='max-w-[400px] w-full mx-auto  '>
      <Button text="Submit" full/>
    </div>
    <p className='text-center'>Dont&#39;t have account? <span className='text-indigo-600'>Sign up</span></p>
    </div>
  )
}
