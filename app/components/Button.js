import React from 'react'

export default function Button(props) {
    const {text, dark} = props
  return (
    <button className={'border border-solid rounded-full overflow-hidden duration-200 hover:opacity-60 border-indigo-600 ' + (dark ? 'text-white bg-indigo-600' : 'text-indigo-600')}>
        <p className='font-fugaz px-6 sm:px-10 whitespace-nowrap py-2 sm:py-3'>{text}</p>
    </button>
  )
}
