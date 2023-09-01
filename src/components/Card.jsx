import React from 'react'
import AppButton from './AppButton'
export default function Card({title, subtit, features=[]}) {
  return (
    <div className='bg-light rounded-lg flex flex-col items-center m-5'  style={{
        width: 280,
        height: 420,

      }}>
        <div className='my-10'>
        <p className='text-dark font-semibold text-4xl'>{'$'+title}</p>
        <p className='text-grayish text-lg'>{subtit}</p>
        </div>
       

        {features.map((feature)=>(
            <div key={(Math.random() + 1).toString(36).substring(7)}>
            <hr className='border-gradient1 border-1 rounded '/>
            <p  className='text-dark text-xl p-1'>{feature}</p> 
            </div>
        ))}

        <div className='my-10'>
        <AppButton >Get started</AppButton>

        </div>
    </div>
  )
}
