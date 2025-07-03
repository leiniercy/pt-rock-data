import React from 'react'
import Brand from './brand'
import SideBarItems from './side-bar-items'

const CustomAsideLeft = ({ className }) => {
  return (
    <section className='relative flex flex-col gap-8 items-center justify-start w-full'>
      {/* logo */}
      <Brand />
      <SideBarItems />
    </section>
  )
}

export default CustomAsideLeft
