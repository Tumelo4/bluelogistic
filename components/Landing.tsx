import React from 'react'
import Header from './Header/Header'
import HomeSection from "@/components/Header/HomeSection";
const Landing = () => {
    const globeConfig = {
    };
  return (
      <div className=' w-full h-full'>
        <Header></Header>
        <section className=' h-screen bg-black'>
            <HomeSection />
        </section>
      </div>
  )
}

export default Landing