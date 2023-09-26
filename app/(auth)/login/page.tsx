import Login from '@/components/pages/Login'
import Link from 'next/link'
import React from 'react'
import { Home, ChevronRight } from 'react-feather'

const Page = () => {
  return (
    <section>
      <div className="divider">
        <div className="container mx-auto">
          <div className="flex items-end text-primary py-5">
            <Link href='/' className="flex items-center cursor-pointer">
              <Home size={16} className="mr-1" />
              <span className="mr-2 text-sm mt-1">Trang chủ</span>
              <ChevronRight size={16} className="mr-1" />
            </Link>
            <span className="flex text-sm text-gray-500">Đăng nhập</span>
          </div>
          <div></div>
        </div>
      </div>
      <Login />
    </section>
  )
}

export default Page
