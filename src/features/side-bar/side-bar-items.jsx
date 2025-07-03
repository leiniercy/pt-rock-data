import classNames from 'classnames'
import { Building2, NotebookPen, ShoppingCart, Wallet } from 'lucide-react'
import React, { useMemo, useState } from 'react'

const SideBarItem = ({ title = '', icon = null, active = false }) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <article
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className='relative flex flex-col gap-1 items-center justify-center h-16 px-2 cursor-pointer'
    >
      <section
        className={classNames(
          'relative flex items-center justify-center h-14 w-14 rounded-xl',
          isHovered || active ? 'bg-purple-950' : 'bg-purple-900'
        )}
      >
        {icon}
      </section>
      <label className='text-[#fff] text-[14px] font-poppins font-normal leading-tight text-center'>
        {title}
      </label>
    </article>
  )
}

const SideBarItems = ({ className }) => {
  const items = useMemo(() => {
    return [
      { id: 1, title: 'SEO', icon: <Building2 color='#fff' height={48} />, active: false },
      { id: 2, title: 'Finanzas', icon: <Wallet color='#fff' height={48} />, active: false },
      { id: 3, title: 'Director de compras', icon: <ShoppingCart color='#fff' height={48} />, active: true },
      { id: 4, title: 'Director de sala', icon: <NotebookPen color='#fff' height={48} />, active: false }
    ]
  }, [])
  return (
    <section
      className={classNames(
        'relative flex flex-col gap-8 justify-start items-center w-full',
        className
      )}
    >
      {items?.map((item) => (
        <SideBarItem key={item.id} {...item} />
      ))}
    </section>
  )
}

export default SideBarItems
