import React from 'react'

export default function Reason({image, title}) {
  return (
    <div className='flex items-center justify-center md:container md:mx-auto md:max-w-full m-3 rounded-e-xl	' 
    style={{
        backgroundImage:`url(${image})`,
        width: 610,
        height: 230,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        maxWidth: 'none',
      }} >
        <p className='text-center text-3xl font-bold text-light'>{title.toUpperCase()}</p>
    </div>
  )
}
