import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

const Brand = ({ src = '/images/logo/logo-mini.png', alt = 'Rock srtar data' }) => {
  const router = useRouter()
  return (
    <figure onClick={() => router.push('/')} className='relative h-[60px] w-[60px] cursor-pointer'>
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

export default Brand
