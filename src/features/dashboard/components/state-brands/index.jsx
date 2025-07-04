import Button from '@/ui/button/button'
import classNames from 'classnames'
import React, { useMemo } from 'react'

const StateBrandsItem = ({ name, precent = 50 }) => {
  return (
    <section className='relative flex flex-row items-center justify-start gap-2 w-full'>
      <label className='text-gray-900 text-[14px] font-poppins font-medium leading-tight text-center w-16'>{`${name}`}</label>
      <article className='relative flex items-center justify-start h-4 w-full flex-1 bg-gray-200 rounded-2xl'>
        <figure
          className={classNames('relative block bg-primary h-4 rounded-2xl')}
          style={{ width: `${precent}%` }}
        />
      </article>
      <Button
        className={classNames(
          'relative h-8 w-32 flex items-center justify-center rounded-lg',
          precent > 50 ? 'bg-green' : 'bg-gray-500'
        )}
      >
        <label className='block truncate text-[#fff] text-[14px] font-poppins font-medium leading-tight text-center'>{`En curso (${precent}%)`}</label>
      </Button>
    </section>
  )
}

const StateBrand = ({ className }) => {
  const brands = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => {
      return {
        id: i + 1,
        name: `Local ${i + 1}`,
        precent: Math.floor(30 + Math.random() * 61) // 30-100 inclusive
      }
    })
  }, [])
  return (
    <section
      className={classNames(
        'relative flex flex-col p-4 gap-4 items-start justify-start bg-[#fff] w-[100%] h-[100%] rounded-xl shadow-lg',
        'border border-gray-200',
        className
      )}
    >
      <header className='relative flex flex-row gap-4 items-center justify-between w-[100%]'>
        <h1 className='font-semibold text-black text-[18px] text-left'>
          Estado de consecución de acruerdos con Marcas
        </h1>
      </header>
      <article className='relative flex flex-col gap-8 items-start justify-start overflow-auto h-[500px] w-[100%]'>
        {brands.map((item) => (
          <StateBrandsItem key={item.id} {...item} />
        ))}
      </article>
    </section>
  )
}

export default StateBrand
