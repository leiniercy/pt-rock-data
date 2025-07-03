import NavBar from '@/features/nav-bar'
import CustomAsideLeft from '@/features/side-bar'
import DropDownLayout from '@/features/side-bar/dropdown-layout'
import classNames from 'classnames'
import React from 'react'

const CustomLayout = ({ children }) => {
  return (
    <section
      className={classNames(
        'relative grid grid-cols-12 grid-rows-12 gap-0 items-center justify-center h-[100vh] w-[100%] bg-gray-100'
      )}
    >
      <header className='relative row-start-1 row-span-1 col-start-4 col-span-9 w-full h-full bg-[#fff]'>
        <NavBar />
      </header>
      <article className='relative row-start-1 row-span-12 col-start-1 col-span-1 h-full w-full bg-primary self-start py-4'>
        <CustomAsideLeft />
      </article>
      <article className='relative row-start-1 row-span-12 col-start-2 col-span-2 h-full w-full self-start py-4'>
        <DropDownLayout />
      </article>
      <article
        className={classNames('relative row-start-2 row-span-11 col-start-4 col-span-9 items-start justify-start w-full h-full bg-[#fff]')}
      >
        {children}
      </article>
    </section>
  )
}

export default CustomLayout
