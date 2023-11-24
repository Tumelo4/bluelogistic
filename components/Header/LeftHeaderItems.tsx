import React from 'react'
import logo from "@/public/Blue logistics.png"
import Logo from "./Logo"
import childrenProp from '@/interface/childrenProp'


const LeftHeaderItems = ({children}:childrenProp) => {
  return (
    <div className='w-full min-w-fit'>
        <Logo src ={logo} alt = "blue logistics" />
        {children}
    </div>
  )
}

export default LeftHeaderItems