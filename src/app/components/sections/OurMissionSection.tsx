import Image from 'next/image'
import React from 'react'

function OurMissionSection() {
  return (
    <section className='w-screen min-h-screen relative bg-[url("/5.png")] bg-left max-sm:bg-center max-sm:bg-cover bg-contain bg-no-repeat'>
    <div className="absolute right-0 bottom-1/4 max-sm:top-0 max-sm:w-full max-sm:h-full max-sm:justify-center max-sm:flex-col flex items-center">
    <div className='w-96 max-sm:w-full h-52 bg-[#ED7D31] text-center text-7xl font-black text-white content-center'>Our <br />Mission</div>
    <div className='w-80 max-sm:w-2/3 h-44 bg-[#002060] text-white text-center p-4 px-6 flex flex-col items-center justify-between'>
      <Image src='/cardIcon5.svg' width={50} height={50} alt='mission-icon'/>
      <p className='text-sm leading-snug'>To deliver <b> exceptional, innovative, and reliable services</b> that empower our clients and contribute to their success.
      </p>
    </div>
    </div>
    </section>
  )
}

export default OurMissionSection
