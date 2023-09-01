
// Course.js
import React from 'react';
import heading from "../assets/heading.png";
import CourseCard from '../components/CourseCard';
import img from '../assets/img.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import Footer from '../components/Footer';


  
function Course (){
    let courses = [
        {title: 'Group Yoga', duration:'2 hours', isBestSeller: true, level: 'Beginner', image: img},
        {title: 'Advanced Yoga', duration:'3 hours', isBestSeller: false, level: 'Advanced', image: img2},
        {title: 'Regular Yoga', duration:'1 hours', isBestSeller: true, level: 'Intermediate', image: img3}

    ]
return (
    <>
  <section className='flex flex-col items-center justify-center md:container md:mx-auto p-3' 
          style={{
            width: '100%',
            height: 400,
            backgroundImage:`url(${heading})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            maxWidth: 'none',

          }}>
          <p className='text-center text-3xl font-bold text-light mb-4'>{"Explore Top Courses".toUpperCase()}</p>
        </section>
        <section className=' p-10 flex flex-wrap justify-between max-md:justify-center'>
            {
                courses.map((course)=>(
                <CourseCard key={course.title} title={course.title} duration={course.duration} image={course.image} isBestSeller={course.isBestSeller} level={course.level} />
                ))
            }
        </section>
        <Footer/>
    </>
)
}
  
export default Course;