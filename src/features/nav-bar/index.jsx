import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { BellDot, Calendar, ChevronDown, RefreshCcw } from 'lucide-react'
import Button from '@/ui/button/button'
import CustomAvatar from '@/ui/avatar'

const NavBar = ({ className }) => {
  return (
    <section
      className={classNames(
        'relative flex flex-col items-start justify-start w-full border-b border-gray-200 px-4',
        className
      )}
    >
      <article
        className={classNames('relative w-full flex flex-row items-start justify-between gap-4')}
      >
        <section className='relative flex flex-row items-center justify-start gap-4'>
          {/* vista general */}
          <section className='relative flex flex-col gap-2 items-start justify-center'>
            <label className='font-poppins font-medium text-[18px] leading-tight text-gray-900'>
              Vista general
            </label>
            <label className='font-poppins font-medium text-[14px] leading-tight text-gray-400'>
              Actualizado hace 2 segundos
            </label>
          </section>
          <figure className='relative block h-[4rem] w-[1px] bg-gray-200' />
          {/* buttons */}
          <section className='relative flex flex-row items-center justify-start gap-4'>
            <Button className='relative flex flex-row gap-2 items-center justify-center bg-gray-100 p-3 rounded-lg'>
              <Calendar height={14} color='#4b5563' />
              <label className='font-poppins font-medium text-[14px] leading-tight text-gray-600'>
                Mes actual
              </label>
              <ChevronDown className='mt-1' height={14} color='#4b5563' />
            </Button>
            <Button className='relative flex flex-row gap-2 items-center justify-center bg-gray-100 p-3 rounded-lg'>
              <RefreshCcw height={14} color='#4b5563' />
              <label className='font-poppins font-medium text-[14px] leading-tight text-gray-600'>
                Resetear filtros
              </label>
            </Button>
          </section>
        </section>
        <section>
          <section className='relative flex flex-row items-center justify-start gap-4 h-[4rem]'>
            <BellDot height={24} color='#4f00a8' />
            <CustomAvatar
              className='h-[40px] w-[40px] rounded-full border border-gray-200'
              src='/images/avatar.png'
            />
          </section>
        </section>
      </article>
    </section>
  )
}

NavBar.propTypes = {
  className: PropTypes.string
}

export default NavBar
