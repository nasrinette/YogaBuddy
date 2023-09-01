import React from 'react';
import heading from "../assets/heading.png";
import Footer from '../components/Footer';
import lotus from '../assets/lotus.png'

  
function About () {
    return     <>
    <section className='flex flex-col items-center justify-center md:container md:mx-auto p-3' 
            style={{
              width: '100%',
              height: 400,
              backgroundImage:`url(${heading})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              maxWidth: 'none',
  
            }}>
            <p className='text-center text-3xl font-bold text-light mb-4'>{"About Yoga Buddy".toUpperCase()}</p>
          </section>

            <section style={{
              width: '60%',
              height: '50rem',
              backgroundImage:`url(${lotus})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              maxWidth: 'none',
  
            }}>

            </section>
          {/* <Footer/> */}
      </>
  
}
export default About;