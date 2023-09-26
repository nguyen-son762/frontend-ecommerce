'use client'

import React, { memo } from 'react'
import NextImage from 'next/image'
import {
  Button,
  Input,
  Image,
  Badge,
  Tooltip,
} from '@nextui-org/react'
import { Heart, ShoppingCart, User } from 'react-feather'

const Header = () => {
  return (
    <div className="divider">
      <div className="container mx-auto py-7 flex items-center gap-8">
        <Image
          className="object-cover"
          as={NextImage}
          width={170}
          height={52}
          alt="Logo"
          src="/logo.png"
        />
        <div className="flex-1">
          <Input
            placeholder="Tìm kiếm"
            size="lg"
            color="primary"
            variant="bordered"
          />
        </div>
        <div className="flex items-center">
          <Tooltip
            content={
              <p className='py-3'>Không có sản phẩm yêu thích</p>
            }
            placement='bottom'
          >
            <div>
              <Badge
                content="5"
                color="danger"
                variant="flat"
                size="lg"
                placement="top-left"
              >
                <Button variant="light" startContent={<Heart color='#f54180' />}>
                  Yêu thích
                </Button>
              </Badge>
            </div>
          </Tooltip>

          <Tooltip
            content={
              <Button variant="light" fullWidth>
                Đăng nhập
              </Button>
            }
            placement='bottom'
          >
            <div>
              <Badge
                content="5"
                color="primary"
                variant="flat"
                size="lg"
                placement="top-left"
              >
                <Button variant="light" startContent={<ShoppingCart color='#3bb77e' />}>
                  Giỏ hàng
                </Button>
              </Badge>
            </div>
          </Tooltip>

          <Tooltip
            content={
              <Button variant="light" fullWidth>
                Đăng nhập
              </Button>
            }
            placement='bottom'
          >
            <Button variant="light" startContent={<User />}>
              Tài khoản
            </Button>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}

export default memo(Header)
