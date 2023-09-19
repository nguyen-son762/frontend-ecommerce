import React, { memo } from 'react'
import { Image } from '@nextui-org/image'
import NextImage from 'next/image'

const Header = () => {
  return (
    <div className='divider'>
      <div className="container mx-auto py-7">
        <Image
          className="object-cover"
          as={NextImage}
          width={170}
          height={52}
          alt="Logo"
          src="/logo.png"
        />
      </div>
    </div>
  )
}

export default memo(Header)
