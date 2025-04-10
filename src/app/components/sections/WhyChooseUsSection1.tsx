import Image from 'next/image'
import React from 'react'

function WhyChooseUsSection1() {
  return (
    <section className='w-screen relative min-h-screen'>
      <div className='w-full bg-black'>
        <Image src={'/whchooseusimage.svg'} width={100000} height={100000} alt='Why Choose Us' className='w-full opacity-50' />
      </div>
      <div className='w-full h-auto'></div>
    </section>
  )
}

export default WhyChooseUsSection1
