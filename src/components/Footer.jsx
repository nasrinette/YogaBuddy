import React from 'react'
// import {BsFillSendFill} from '@react-icons/all-files/bs/BsFillSendFill'
import { FaBeer } from 'react-icons/fa';
//there is problem that send button is outside of the parent div, so container is not centered properly
export default function Footer() {
  return (
    <div className='flex flex-wrap content-center justify-around bg-gradient-to-r from-gradient1 to-gradient2 w-full h-64'>
        <p className='text-4xl text-center 	text-light font-bold'>Yoga Buddy Classes</p>
        <div className=" flex mt-3 ">

        <label >
        <input style={{padding: '0.7rem', paddingRight: '16vh'}} className="placeholder:text-grayish text-base border border-gradient1 bg-light rounded-l-lg shadow-sm focus:outline-none focus:border-gradient2 focus:ring-gradient2 focus:ring-1 sm:text-sm" name="myInput" placeholder="Your email address" />
        </label>
        <div className='flex items-center cursor-pointer text-2xl bg-dark text-light p-2 rounded-r-lg'>
            <ion-icon name="send"></ion-icon> 
        </div>   
        
        </div>
        

    </div>
  )
}
