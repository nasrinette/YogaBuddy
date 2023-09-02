import React from 'react'

export default function Statistic({title, subtit}) {
  return (
    <div className='text-center'>
        <h1 className='text-4xl font-bold	text-dark'>{title}+</h1>
        <p className='text-base	text-grayish'>{subtit}</p>
    </div>
  )
}
