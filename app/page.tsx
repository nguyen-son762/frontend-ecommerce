import Product from '@/components/atoms/Product/Product'

export default function Home() {
  return (
    <section className="container mx-auto">
      <h3 className="text-3xl font-medium text-gray-700 mt-6">
        Sản phẩm thông dụng
      </h3>
      <div className='grid grid-cols-5 gap-5 mt-5'>
        <Product />
        <Product />
      </div>
    </section>
  )
}
