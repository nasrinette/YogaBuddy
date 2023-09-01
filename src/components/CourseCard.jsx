import React from 'react'
import {TbClockHour2} from 'react-icons/tb'
import { FaSignal } from 'react-icons/fa';
import AppButton from './AppButton';

export default function CourseCard({title, duration, level, isBestSeller, image}) {
  return (
    <div className=' m-5 w-80 h-96 bg-light rounded-xl	'>
       <div 
    style={{
        backgroundImage:`url(${image})`,
        width: '100%',
        height: '80%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        maxWidth: 'none',
      }} >
       
       { isBestSeller && <AppButton className='m-4 text-xs font-normal'>Best seller</AppButton>}

       

    </div>

    <div className='px-4'>
       <h3 className='text-lg my-2 font-extrabold'>{title}</h3>
    
    <div className='flex justify-between text-grayish font-semibold text-base'>

      <div className='flex items-center'>
      <TbClockHour2 />
      <p className='ml-2'>{duration}</p>
    </div>
      <div className='flex items-center '>
        <FaSignal />
      <p className='ml-2'>{level}</p>
      </div>
    </div>
    </div>
   
    
      
    </div>
   
  )
}
