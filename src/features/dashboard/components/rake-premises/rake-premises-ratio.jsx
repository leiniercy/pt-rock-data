import classNames from 'classnames'
import React from 'react'

const RakePremisesRatio = ({ number }) => {
  return (
    <section
      className={classNames(
        'relative flex items-center justify-center px-6 py-2 rounded-lg',
        number < 20 ? 'bg-green' : 'bg-wine'
      )}
    >
      <label className='text-[#fff] text-[14px] font-poppins font-medium leading-tight text-center'>{`${number}%`}</label>
    </section>
  )
}

export default RakePremisesRatio
