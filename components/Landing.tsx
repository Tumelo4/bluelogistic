import React from 'react'
import Header from './Header/Header'
import dynamic from 'next/dynamic';

const HomeSection = dynamic(() => import('./Header/HomeSection'), {
  ssr: false,
});

const Landing = () => {
  return (
      <div className=' w-full h-full'>
        <Header></Header>
        <section className=' h-screen bg-black relative'>
            {/* <div className=' absolute flex justify-center items-center z-10 w-screen h-screen text-white'>
              Blue Logistics
            </div> */}
            <HomeSection />
        </section>
      </div>
  )
}

export default Landing