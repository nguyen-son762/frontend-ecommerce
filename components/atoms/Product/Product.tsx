import React, { memo } from 'react'
import Image from 'next/image'
import { Star } from 'react-feather'

const Product = () => {
  return (
    <div className="border border-gray-400 border-solid rounded-xl">
      <Image
        width={0}
        height={0}
        src="https://res.cloudinary.com/monstarlab777/image/upload/v1695048150/cld-sample.jpg"
        alt="product"
        className="w-full h-auto rounded-xl"
      />
      <div className='px-5'>
      <p className="transition-all hover:text-primary cursor-pointer">
        Foster Farms Takeout Crispy Classic
      </p>
      <div className="flex items-center mt-5">
        <Star color="yellow" size={20} />
        <Star color="yellow" size={20} />
        <Star color="#aeaeae" size={20} />
        <Star color="#aeaeae" size={20} />
        <Star color="#aeaeae" size={20} />
      </div>
      </div>
    </div>
  )
}

export default memo(Product)
