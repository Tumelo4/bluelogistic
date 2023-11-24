import React from 'react'
import NavBar from './NavBar'
import childrenProp from '@/interface/childrenProp'

const RightHeaderItems = ({children}:childrenProp) => {
  return (
      <div>
        <NavBar />
        {children}
      </div>
  )
}

export default RightHeaderItems