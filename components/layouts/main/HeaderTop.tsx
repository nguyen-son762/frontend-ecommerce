import React, { memo } from 'react'
import { Link } from '@nextui-org/link'
import { Divider } from '@nextui-org/divider'

const HeaderTop = () => {
  return (
    <div>
      <div className="container mx-auto flex items-center justify-between py-2.5">
        <div className="flex items-center space-x-3">
          <Link
            href="/about"
            color="foreground"
            className="text-sm text-gray-500"
          >
            Về chúng tôi
          </Link>
          <div className="h-4">
            <Divider orientation="vertical" />
          </div>
          <Link
            href="/about"
            color="foreground"
            className="text-sm text-gray-500"
          >
            Tài khoản của tôi
          </Link>
          <div className="h-4">
            <Divider orientation="vertical" />
          </div>
          <Link
            href="/about"
            color="foreground"
            className="text-sm text-gray-500"
          >
            Theo dõi đơn hàng
          </Link>
        </div>
        <span className="text-sm text-gray-500">
          Gọi cho chúng tôi: <span className="text-primary">+1800900122</span>
        </span>
      </div>
      <Divider />
    </div>
  )
}

export default memo(HeaderTop)
