import classNames from 'classnames'
import { Award, DatabaseBackup, PanelLeftClose, SquareRadical } from 'lucide-react'
import React, { useMemo, useState } from 'react'

const DropDownLayoutTitle = ({ title = 'title' }) => {
  return (
    <article className='relative block w-full pb-4 px-4 border-b border-gray-200'>
      <header className='relative flex flex-row gap-2 items-center justify-start w-full '>
        {(
          <label className='flex-1 font-poppins font-normal text-[18px] text-left text-gray-900'>
            {title}
          </label>
        ) || 'Header Title'}
        <PanelLeftClose height={16} color='#4f00a8' />
      </header>
    </article>
  )
}
// 374151
const DropDownLayoutBoardItem = ({ name = '', Icon = null, active = false }) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <section
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={classNames(
        'relative flex flex-row gap-2 items-center justify-start w-full py-2 px-4 cursor-pointer rounded-md',
        active ? 'text-[#fff] bg-primary' : 'text-gray-900',
        'hover:bg-primary  hover:text-[#fff]'
      )}
    >
      <div className='relative flex items-center justify-center w-6 h-6'>
        <Icon height={14} color={isHovered || active ? '#fff' : '#374151'} />
      </div>
      <span className=' font-poppins font-normal text-[14px]'>{name}</span>
    </section>
  )
}

const DropDownLayout = ({ className }) => {
  const hedaerInfo = useMemo(() => {
    return {
      title: 'D. de compras',
      boards: [
        {
          id: '`board-1`',
          name: 'Vista general',
          Icon: SquareRadical,
          active: true
        },
        {
          id: '`board-2`',
          name: 'Eficiencia',
          Icon: DatabaseBackup,
          active: false
        },
        {
          id: '`board-3`',
          name: 'Performance',
          Icon: Award,
          active: false
        }
      ]
    }
  }, [])
  console.log(hedaerInfo?.boards)
  return (
    <section
      className={`relative flex flex-col gap-4 items-center justify-start w-full ${className}`}
    >
      <DropDownLayoutTitle title={hedaerInfo.title} />
      <article className='relative flex flex-col gap-2 items-center justify-start w-full px-4'>
        <header className='relative w-full flex items-start justify-start'>
          <h2 className='text-gray-900 font-poppins font-normal text-[14px]'>Tableros</h2>
        </header>
        {hedaerInfo?.boards?.map((item) => (
          <DropDownLayoutBoardItem key={item.id} {...item} />
        ))}
      </article>
    </section>
  )
}

export default DropDownLayout
