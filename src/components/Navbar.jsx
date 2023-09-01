import { Link } from 'react-router-dom';

import React, { useState, useEffect } from "react";

//color must change while scrolling

const Navbar = () => {
  let Links =[
    {name:"Home",link:"/"},
    {name:"About us",link:"/about"},
    {name:"Course",link:"/course"},
  ];
  const [open, setOpen] = useState(false);

  return (
    
    <header className=' w-full fixed top-0 left-0 text-light'>
      <div className='md:flex items-center justify-between py-4 md:px-10 px-7'>

        <Link to="/" className='font-bold text-2xl cursor-pointer flex items-center'>
        <span className='text-3xl mr-1 pt-2'>
        <ion-icon name="sparkles-sharp"></ion-icon>        
        </span>
          Yoga Buddy
        </Link>

        <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <Link to={link.link} className='text-slate-100 hover:text-grayish duration-500'>{link.name}</Link>
            </li>
          ))
        }
      </ul>
      </div>
    </header>
  );
};

export default Navbar;
