'use client'

import React, { memo } from 'react'

import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@nextui-org/react'
import Link from 'next/link'
import { ChevronDown } from 'react-feather'

const NavbarDefault = () => {
  return (
    <div className="divider">
      <div className="container mx-auto py-4 flex items-center gap-8">
        <Popover placement="bottom-start">
          <PopoverTrigger>
            <Button variant="solid" color="primary" className="px-7 rounded-md">
              <span className="text-white text-sm">Tất cả sản phẩm</span>
              <span>
                <ChevronDown color="white" size={18} />
              </span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="border border-primary border-solid py-2">
            <div className="grid grid-cols-2 gap-2">
              <Link href="/">
                <div className="border border-gray-100 border-solid rounded-lg py-2 px-3 hover:border-primary hover:shadow-md transition-all">
                  Wines & Drinks
                </div>
              </Link>
              <Link href="/">
                <div className="border border-gray-100 border-solid rounded-lg py-2 px-3 hover:border-primary hover:shadow-md transition-all">
                  Wines & Drinks
                </div>
              </Link>
              <Link href="/">
                <div className="border border-gray-100 border-solid rounded-lg py-2 px-3 hover:border-primary hover:shadow-md transition-all">
                  Wines & Drinks
                </div>
              </Link>
            </div>
          </PopoverContent>
        </Popover>
        <Navbar>
          <NavbarContent className="hidden sm:flex gap-4 w-full">
            <NavbarItem>
              <Link href="/" className="font-medium">
                Trang chủ
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/about" className="font-medium">
                Về chúng tôi
              </Link>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </div>
    </div>
  )
}

export default memo(NavbarDefault)
