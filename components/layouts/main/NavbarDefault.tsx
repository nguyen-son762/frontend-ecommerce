'use client'

import React, { memo } from 'react'

import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Tooltip,
  Button
} from '@nextui-org/react'
import Link from 'next/link'

const NavbarDefault = () => {
  return (
    <div className="divider">
      <div className="container mx-auto py-4 flex items-center gap-8">
        <Navbar>
          <NavbarContent
            className="hidden sm:flex gap-4 w-full"
            justify="center"
          >
            <NavbarItem>
              <Tooltip
                content={
                  <Button variant="light" fullWidth>
                    Đăng nhập
                  </Button>
                }
                placement="bottom"
              >
                <div>
                  jejjee
                </div>
              </Tooltip>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="#" aria-current="page">
                Customers
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Integrations
              </Link>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </div>
    </div>
  )
}

export default memo(NavbarDefault)
