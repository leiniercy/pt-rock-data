import classNames from 'classnames'
import { TrendingDown } from 'lucide-react'
import React from 'react'

const StadisticsGenerals = ({
  className,
  title = 'Ratio de compra de Mercaderias',
  precentGeneral = '13',
  precentCurrent = 7,
  precentLastYear = '20',
  objetive = '12'
}) => {
  return (
    <section
      className={classNames(
        'relative flex flex-col gap-8 items-start justify-start h-[12rem] w-full p-4',
        ' bg-[#fff] rounded-xl border border-gray-200',
        className
      )}
    >
      <header className='relative flex flex-col gap-4 items-start justify-start w-full'>
        <label className='text-gray-900 text-[16px] font-poppins font-medium leading-tight text-left'>{`${title}`}</label>
      </header>
      <article className='relative flex flex-col gap-4 items-start justify-start w-full'>
        <label className='text-gray-900 text-[24px] font-poppins font-bold leading-tight text-left'>{`${precentGeneral}`}</label>
        <section className='relative flex flex-row gap-1 items-start justify-start w-full'>
          <TrendingDown height={12} color={precentCurrent < 13 ? '#67aa72' : '#b0425c'} />
          <label
            className={classNames(
              'text-[14px] font-poppins font-normal leading-tight text-left',
              precentCurrent < 13 ? 'text-green' : 'text-wine'
            )}
          >
            {`${precentCurrent}%`}
          </label>
          <label
            className={classNames(
              'text-gray-800 text-[14px] font-poppins font-normal leading-tight text-left'
            )}
          >
            {`vs ${precentLastYear}`}
          </label>
          <label
            className={classNames(
              'text-gray-600 text-[14px] font-poppins font-normal leading-tight text-left'
            )}
          >
            año pasado
          </label>
        </section>
        <section className='relative flex flex-row gap-1 items-start justify-start w-full'>
          <label
            className={classNames(
              'text-primary text-[14px] font-poppins font-medium leading-tight text-left'
            )}
          >
            {`Objetivo: ${objetive}%`}
          </label>
        </section>
      </article>
    </section>
  )
}

export default StadisticsGenerals
