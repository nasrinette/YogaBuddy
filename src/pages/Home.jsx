import React from 'react';
import background from "../assets/background.png";
import Reason from '../components/Reason';
import reason1 from "../assets/reason1.png"
import reason2 from "../assets/reason2.png"
import reason3 from "../assets/reason3.png"
import reason4 from "../assets/reason4.png"
import AppButton from '../components/AppButton';
import picture from '../assets/buttonTonav.png'
import Card from '../components/Card';
import Footer from '../components/Footer';


function Home (){
  let reasons = [
    {source: reason1, title:"Keep healthy"},
    {source: reason2, title:"Experience the thrill"},
    {source: reason3, title:"Meditate anywhere"},
    {source: reason4, title:"Live here and now"},

  ]
  let cards = [
    {title: '5', subtit: 'per month', features: ['all basic course','cancel at any time', '100% refundable']},
    {title: '15', subtit: 'per month', features: ['unlimited course','cancel at any time', '100% refundable']},

  ]
    return (
      <div>
        <section 
          className='flex items-center justify-center md:container md:mx-auto' 
          style={{
            backgroundImage:`url(${background})`,
            height:'100vh',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            maxWidth: 'none',
          }}>
          <div className='text-center text-light pt-10 m-2'>
            <h1 className='text-5xl font-bold'>Find Yourself With Yoga Buddy</h1>
            <p className='mt-2 text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </section>
        <section className='bg-main'>
          <div className='p-7 pt-10'>
            <h1 className='text-5xl font-bold text-dark text-center p-14 '>Why Yoga Buddy?</h1>
          </div>

        <div className='flex flex-wrap items-center justify-center px-14'>
          {
          reasons.map((reason)=>(
              <Reason key={reason.title} image={reason.source} title={reason.title} />      
          )  )
          }
        </div>
        </section>
        <section className='flex flex-col items-center justify-center md:container md:mx-auto p-3 mt-10' 
          style={{
            width: '100%',
            backgroundImage:`url(${picture})`,
            height: 300,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            maxWidth: 'none',

          }}>
          <p className='text-center text-3xl font-bold text-light mb-4'>{"Learn ancient yoga practices easily with Yoga Buddy".toUpperCase()}</p>
          <AppButton>Explore courses</AppButton>
        </section>

        <section className='flex flex-wrap items-center justify-center p-14'> 
        <div className='max-xl:text-center flex flex-col mx-6 xl:w-1/2'>
          <p className='text-3xl font-bold text-gradient1'>Choose Your Plan</p>
          <h1 className='text-5xl  font-bold text-dark mt-6'>The great place to start your journey within</h1>
          <p className='text-2xl	text-gradient1 mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur purus hac turpis feugiat vulputate. Purus dui mattis maecenas ac velit et egestas pellentesque scelerisque.</p>
        </div>

              {
          cards.map((card)=>(
    
            <Card key={card.title} title={card.title} subtit={card.subtit} features={card.features}/>
          ))
        } 
  
        </section>
        <Footer />
      </div>
    );
}

export default Home;
