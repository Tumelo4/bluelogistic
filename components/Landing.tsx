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
          <div className=' absolute flex justify-center items-center z-10 text-white'>
            <motion.div
              initial={{ x: -1000, opacity: 0 }}
              animate={{ x: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >  
              <h1 className=' font-medium text-2xl'>Blue Logistics</h1>
            </motion.div>
          </div>
            <HomeSection />
        </section>
      </div>
  )
}

export default Landing