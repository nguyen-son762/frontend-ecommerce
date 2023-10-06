'use client'

import React, { memo, useState } from 'react'
import { Input, Button } from '@nextui-org/react'
import { Eye, EyeOff } from 'react-feather'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { LoginParams, login } from '@/services/auth.service'
import { useAuthStore } from '@/store/auth.store'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Email không hợp lệ'),
  password: Yup.string()
    .min(3, 'Mật khẩu phải có ít nhất 3 kí tự')
    .max(50, 'Mật khẩu chỉ tối đa 50 ký tự!'),
})

const Login = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const { setAuth } = useAuthStore()

  const toggleVisibility = () => setIsVisible(!isVisible)
  const onSubmit = (values: LoginParams) => {
    setLoading(true)
    login(values)
      .then((data) => {
        setAuth(data)
        router.push('/')
        toast.success('Đăng nhập thành công')
      })
      .catch(() => {
        toast.error('Sai tài khoản hoặc mật khẩu')
      })
      .finally(() => setLoading(false))
  }

  return (
    <div className="container mx-auto">
      <h1 className="font-semibold text-4xl text-gray-600 mt-20">Đăng nhập</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={onSubmit}
      >
        {({
          handleSubmit,
          handleChange,
          isValid,
          errors,
          touched,
          dirty,
          values,
          handleBlur,
        }) => (
          <form
            onSubmit={handleSubmit}
            className="mt-10 border-1 border-gray-200 border-solid rounded-xl p-5"
          >
            <Input
              fullWidth
              name="email"
              variant="bordered"
              label="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email ? (
              <p className="text-danger-500 text-xs ml-1">{errors.email}</p>
            ) : null}
            <Input
              name="password"
              variant="bordered"
              className="mt-5"
              fullWidth
              label="Password"
              onBlur={handleBlur}
              value={values.password}
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <Eye className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeOff className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? 'text' : 'password'}
              onChange={handleChange}
            />
            {errors.password && touched.password ? (
              <p className="text-danger-500 text-xs ml-1">{errors.password}</p>
            ) : null}
            <Button
              type="submit"
              isLoading={loading}
              isDisabled={!(isValid && dirty)}
              className="mt-6 text-white"
              size="lg"
              color="primary"
            >
              Đăng nhập
            </Button>
            <p className="text-sm mt-3">
              Bạn chưa có tài khoản?
              <span className=" ml-1 cursor-pointer text-primary underline">
                Đăng kí
              </span>
            </p>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default memo(Login)
