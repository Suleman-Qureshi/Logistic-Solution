import Image from 'next/image'
import React from 'react'

function HowItsWorks() {
  return (
    <section className='w-screen relative pb-20 max-md:pb-10 flex max-md:flex-col max-md:px-4 overflow-hidden'>
      <div className='w-1/2 max-md:w-full h-full flex flex-col gap-12 pl-20 max-md:pl-0 py-20 max-md:py-10 max-sm:py-4'>
      <h2 className='text-6xl font-bold text-[#ED7D31]'>How It Works</h2>
      <div className='flex flex-col gap-6'>
        <div className='flex gap-4 w-96 max-sm:w-full'>
            <Image src='/howitworksicon1.svg' alt='How it works icon 1' width={50} height={50} className='w-12 h-12'/>
            <div className='flex flex-col gap-2 text-black'>
                <h5 className='text-2xl font-semibold'>Contact Us</h5>
                <p className='text-xl'>Call or WhatsApp us with supply requirements.</p>
            </div>
        </div>
        <div className='flex gap-4 w-96 max-sm:w-full'>
            <Image src='/Phowitworksicon2.svg' alt='How it works icon 1' width={50} height={50} className='w-12 h-12'/>
            <div className='flex flex-col gap-2 text-black'>
                <h5 className='text-2xl font-semibold'>We Plan and Excute</h5>
                <p className='text-xl'>Our team handles every detail, from
                concept to completion.</p>
            </div>
        </div>
      </div>
      </div>
      <div className='w-1/2 max-md:w-full h-[547.3px] rounded-l-full max-md:rounded-r-full flex flex-col justify-center items-center max-sm:p-8  bg-[#002060]'>
        <Image src='/howitworksimage.svg' alt='How it works' width={1000} height={1000} className='w-96 h-96 max-sm:w-full max-sm:h-auto'/>
      </div>
    </section>
  )
}

export default HowItsWorks
