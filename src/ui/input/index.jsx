import classNames from 'classnames'
import React from 'react'

const CustomInput = ({ className, placeholder = 'Buscar...', type }) => {
  return (
    <input
      className={classNames('relative h-[40px] w-[100%] px-[12px] pr-[40px] pl-[16px] bg-white-100 border-[1px] border-[#E2E8F0] border-solid text-[16px] font-normal leading-[19.36px] rounded-[20px] gap-[10px]', className)}
      type={type}
      placeholder={placeholder}
    />
  )
}

export default CustomInput
