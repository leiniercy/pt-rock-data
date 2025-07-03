import { IconSearch } from '@components/icons/custom-icons'
import CustomInput from '@components/input'
import classNames from 'classnames'
import React from 'react'

const InputSearch = ({ className, placeholder }) => {
  return (
    <div className={classNames('relative block w-[323px]', className)}>
      <CustomInput placeholder={placeholder} />
      <IconSearch className='absolute top-0 bottom-0 right-0 h-[40px] w-[40px]' />
    </div>
  )
}

export default InputSearch
