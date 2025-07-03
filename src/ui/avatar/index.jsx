import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'
import PropTypes from 'prop-types'

const CustomAvatar = ({ src = '/images/avatar.png', alt = 'avatar', className }) => {
  return (
    <figure className={classNames('relative h-[40px] w-[40px] cursor-pointer', className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className='object-fill rounded-full'
        loading='eager'
        quality={100}
        priority
      />
    </figure>
  )
}

CustomAvatar.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string
}

export default CustomAvatar
