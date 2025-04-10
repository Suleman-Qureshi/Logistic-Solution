import Image from 'next/image'
import React from 'react'

function OurMissionSection() {
  return (
    <section className='w-screen min-h-screen relative before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-[url("/5.png")] before:bg-left before:bg-contain before:bg-no-repeat'>
    <div className="absolute right-0 bottom-1/4 flex items-center">
    <div className='w-96 h-52 bg-[#ED7D31] text-center text-7xl font-black text-white content-center'>OUR <br />Mission</div>
    <div className='w-64 h-44 bg-[#002060] text-white text-center p-4 px-6 flex flex-col items-center justify-between'>
      <Image src='/cardIcon5.svg' width={50} height={50} alt='mission-icon'/>
      <p className='text-sm leading-snug'>To deliver <b> exceptional, innovative, and reliable services</b> that empower our clients and contribute to their success.
      </p>
    </div>
    </div>
    </section>
  )
}

export default OurMissionSection
