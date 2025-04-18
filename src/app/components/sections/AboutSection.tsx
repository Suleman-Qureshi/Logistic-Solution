import Image from 'next/image'
import React from 'react'

function AboutSection() {
  return (
    <section className='w-screen min-h-screen relative overflow-hidden flex max-md:pr-0 max-md:px-4 max-sm:px-2 pr-20 py-20 gap-12'>
       <div className='w-full max-md:hidden'>
        <Image src='/3.png' width={500} height={500} alt='about img' className='w-auto' />
      </div>
        <div className=' w-full flex flex-col gap-8 max-sm:items-center max-sm:text-center'>
            <div className='flex flex-col gap-2 '>
            <h2 className='text-7xl font-bold text-[#002060]'>About Us</h2>
            <p className='text-gray-500 text-lg'>To deliver exceptional, innovative, and reliable services that empower our
            client and contribute to their success</p>
            </div>
            <div className='flex max-sm:flex-col gap-8'>
        <div className='flex flex-col gap-2 p-4 text-white justify-center max-sm:items-center w-80  bg-[#ED7D31] rounded-2xl py-6'>
            <Image src='/cardIcon1.svg' width={50} height={50} alt='icon1'/>
            <h5 className='text-2xl font-medium text-white ml-1'>23 Years of Excellence</h5>
            <p className='text-lg font-light ml-1 leading-snug'>A proven track record of delivering
            quality services
</p>
        </div>
        <div className='flex flex-col gap-2 p-4 text-white justify-center w-80 max-sm:items-center  bg-[#ED7D31] rounded-2xl py-6'>
            <Image src='/cardIcon2.svg' width={50} height={50} alt='icon1'/>
            <h5 className='text-2xl font-medium text-white ml-1'>Diverse Expertise</h5>
            <p className='text-lg font-light ml-1 leading-snug'>A wide range of services tailored
            to meet your unique needs.</p>
        </div>
            </div>
            <div className='flex gap-8 max-sm:flex-col'>
        <div className='flex flex-col gap-2 p-4 text-white justify-center w-80 max-sm:items-center  bg-[#ED7D31] rounded-2xl py-6'>
            <Image src='/CardIcon3.svg' width={50} height={50} alt='icon1'/>
            <h5 className='text-2xl font-medium text-white ml-1'>Client-Centric Approach</h5>
            <p className='text-lg font-light ml-1 leading-snug'>We prioritize your satisfaction
            above all else.</p>
        </div>
        <div className='flex flex-col gap-2 p-4 text-white justify-center w-80 max-sm:items-center  bg-[#ED7D31] rounded-2xl py-6'>
            <Image src='/CardIcon4.svg' width={50} height={50} alt='icon1'/>
            <h5 className='text-2xl font-medium text-white ml-1'>Innovation-Driven</h5>
            <p className='text-lg font-light ml-1 leading-snug'>Leveraging technology to provide
cutting-edge solutions.
</p>
        </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection
