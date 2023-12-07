'use client'
import React from 'react'
import Header from './Header/Header'
import dynamic from 'next/dynamic';
import { motion } from "framer-motion";

const HomeSection = dynamic(() => import('./Header/HomeSection'), {
  ssr: false,
});

const Landing = () => {
  return (
      <div className=' w-full h-full'>
        <Header></Header>
        <section className=' h-screen w-screen bg-black relative flex justify-center items-center'>
          <div className=' absolute flex justify-center items-center z-10 text-white flex-col'>
            <motion.div
              initial={{ x: -1000}}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
              style={{display:'flex', justifyContent: 'center', flexDirection:'column'}}
            > 
              <div>
                <h1 className=' font-medium text-4xl'>Blue Logistics</h1>
                <p>Efficiency all the way</p>
              </div> 
              <button className=' mt-6 hover:bg-blue-500 ease-in-out duration-500 hover:cursor-pointer p-3 outline-blue-500 outline capitalize'>Get started</button>
            </motion.div>
          </div>
            <HomeSection />
        </section>
      </div>
  )
}

export default Landing