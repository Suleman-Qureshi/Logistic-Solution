import Image from 'next/image'
import React from 'react'

function CommitmentSection() {
  return (
    <section className='w-screen min-h-screen flex justify-center items-center gap-4 pr-20 py-10'>
      <div className='w-full'>
        <Image src='/3.png' width={500} height={500} alt='' />
      </div>
      <div className='w-full flex flex-col gap-12 justify-center'>
        <h2 className='text-5xl font-semibold text-[#002060]'>Our Commitment To Innovation</h2>
        <div className='flex flex-col gap-6'>
            <div className='flex gap-2 items-start'>
                <Image src='/icon1.svg' width={70} height={100} alt='' />
                <p className='text-lg'>At Logistics Solutions, we are
constantly striving to introduce
technological innovations to address
the day-to-day challenges of our
clients. </p>
            </div>
            <div className='flex gap-2 items-start'>
                <Image src='/icon2.svg' width={70} height={70} alt='' />
                <p className='text-lg'>Soon, we will be launching high-tech
applications to further enhance our
service delivery and client
experience </p>
            </div>
        </div>
         </div>
    </section>
  )
}

export default CommitmentSection
