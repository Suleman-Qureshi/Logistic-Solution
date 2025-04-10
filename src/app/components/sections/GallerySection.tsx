import Image from 'next/image'
import React from 'react'

function GallerySection() {
  return (
    <section className='w-screen min-h-screen relative overflow-hidden flex flex-col gap-12 items-center pb-20'>
      <div className="flex flex-col items-center gap-6">
        <h1 className="w-screen bg-[#ED7D31] text-white text-7xl font-bold text-center py-2 relative left-0">
          Gallery
        </h1>
        <p className="text-lg text-gray-500 text-center w-2/3">
        Explore our gallery showcasing our fleet, warehouse operations, delivery network, and dedicated team—highlighting our commitment to efficient, reliable, and secure logistics solutions
        </p>
      </div>
<div className='px-auto flex flex-col gap-4 justify-center items-center'>
    <div className='flex gap-4'>
        <div className='flex flex-col gap-4'>
            <div className='w-72 h-52 bg-[#002060] overflow-hidden'>
                <Image src='/IMG-20250407-WA0007.jpg' alt='' width={1000} height={1000} className='w-full h-full' />
            </div>
            <div className='w-72 h-96 bg-[#002060] overflow-hidden'>
                <Image src='/IMG-20250407-WA0006.jpg' alt='' width={1000} height={1000} className='w-full h-full' />
            </div>
            <div className='w-72 h-52 bg-[#002060] overflow-hidden'>
                <Image src='/IMG-20250407-WA0009.jpg' alt='' width={1000} height={1000} className='w-full h-full' />
            </div>
        </div>
        <div className='flex flex-col gap-4'>
            <div className='w-72 h-64 bg-[#002060] overflow-hidden'>
                <Image src='/IMG-20250407-WA0022.jpg' alt='' width={1000} height={1000} className='w-full h-full' />
            </div>
            <div className='w-72 h-64 bg-[#002060] overflow-hidden'>
                <Image src='/IMG-20250407-WA0008.jpg' alt='' width={1000} height={1000} className='w-full h-full' />
            </div>
            <div className='w-72 h-64 bg-[#002060]'>
                <Image src='/IMG-20250407-WA0013.jpg' alt='' width={1000} height={1000} className='w-full h-full' />
            </div>
        </div>
        <div className='flex flex-col gap-4'>
            <div className='w-72 h-52 bg-[#002060] overflow-hidden'>
                <Image src='/IMG-20250407-WA0019.jpg' alt='' width={1000} height={1000} className='w-full h-full' />
            </div>
            <div className='w-72 h-96 bg-[#002060] overflow-hidden'>
                <Image src='/IMG-20250407-WA0017.jpg' alt='' width={1000} height={1000} className='w-full h-full' />
            </div>
            <div className='w-72 h-52 bg-[#002060] overflow-hidden'>
                <Image src='/IMG-20250407-WA0023.jpg' alt='' width={1000} height={1000} className='w-full h-full' />
            </div>
        </div>
    </div>
    <div className='w-full h-24 bg-[#002060]'>
        <Image src={'/IMG-20250407-WA0018.jpg'} alt='' width={1000} height={1000} className='w-full' />
    </div>
</div>
    </section>
  )
}

export default GallerySection
