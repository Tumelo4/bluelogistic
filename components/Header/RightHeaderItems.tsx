import React from 'react'
import NavBar from './NavBar'
import childrenProp from '@/interface/childrenProp'
import NavMenu from "@/components/Header/NavMenu";

const RightHeaderItems = ({children}:childrenProp) => {
  return (
      <div>
          <div className=' hidden md:flex'>
              <NavBar />
          </div>
          <div className='flex md:hidden'>
              <NavMenu />
          </div>

        {children}
      </div>
  )
}

export default RightHeaderItems