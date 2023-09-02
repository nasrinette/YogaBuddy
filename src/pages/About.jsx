import React from 'react';
import heading from "../assets/heading.png";
import Footer from '../components/Footer';
import lotus from '../assets/lotus.png'
import Statistic from '../components/Statistic';

  
function About () {
  let stats = [
    {title: '1875', subtit: 'Students'},
    {title: '20', subtit: 'Courses'},
    {title: '500', subtit: 'Events'},

  ]
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

            <section className='pt-14'>
              <h1 className='text-5xl font-bold text-dark text-center pt-14 '>Why Yoga Buddy?</h1>

            <div className='flex w-full sm:w-10/12 lg:w-1/2 flex-col items-center justify-center md:container md:mx-auto p-3' style={{
              height: 610,
              backgroundImage:`url(${lotus})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              maxWidth: 'none',
            }}
            >
        <p className='text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere magna viverra tincidunt sit risus, tellus nisl id id. Enim risus sit amet integer mauris nulla ornare. Egestas amet vel varius pharetra aliquam. Placerat vitae porta luctus non, est ultricies.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere magna viverra tincidunt sit risus, tellus nisl id id. Enim risus sit amet integer mauris nulla ornare. Egestas amet vel varius pharetra aliquam. Placerat vitae porta luctus non, est ultricies.       
        </p>

            </div>
          

          {/* </div> */}
          

            <div className='flex justify-around mb-10'>

                {
              stats.map((stat)=>(
                 <Statistic key={stat.title} title={stat.title} subtit={stat.subtit} />  
              ))
            }
            </div>
          
         
            </section>
          <Footer/>
      </>
  
}
export default About;