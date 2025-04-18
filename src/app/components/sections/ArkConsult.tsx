import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GoDotFill } from 'react-icons/go'

function ArkConsult() {
  return (
    <>
    <section className='w-screen flex flex-col items-center'>
        <div className='h-28'>
            <Image src={'https://www.arkconsult.com.au/files/logo.svg'} alt='' width={1000} height={1000} className='h-full'/>
        </div>
            <div className='w-full'>
            <Image src={'/ArkConsult.svg'} alt='' width={1000} height={1000} className='w-full'/>
            <div className='w-full bg-[#002060] p-6 flex gap-10 max-md:flex-col text-white'>
                <div className='w-full flex flex-col gap-8'>
                    <h5 className='text-4xl font-bold'>Strategic Partnership & Joint Ventures</h5>
                    <div className='flex  gap-2'>
                        <div>
                        <GoDotFill className="text-[#ED7D31] text-2xl p-[1px] bg-[#ed7c3192] rounded-full" />
                        </div>
                    <p>At the core of our mission is a strong belief in mutual growth, shared success, and
impactful collaboration. We actively foster strategic alliances that spark innovation,
broaden capabilities, and deliver sustainable value to our clients and stakeholders.</p>
                    </div>
                    <div className='flex  gap-2'>
                        <div>
                        <GoDotFill className="text-[#ED7D31] text-2xl p-[1px] bg-[#ed7c3192] rounded-full" />
                        </div>
                    <p>As part of this commitment, we are proud to be in joint ventures with distinguished
national and international partners</p>
                    </div>
                    <div className='text-2xl font-semibold'>ARK Consult – Melbourne, Australia</div>
                </div>
                <div className='w-full flex flex-col gap-8'>
                <Link href='https://www.arkconsult.com.au/' className='text-4xl font-bold underline max-sm:text-lg'>www.arkconsult.com.au</Link>
                <div className='flex  gap-2'>
                        <div>
                        <GoDotFill className="text-[#ED7D31] text-2xl p-[1px] bg-[#ed7c3192] rounded-full" />
                        </div>
                    <p>ARK Consult brings a wealth of global experience across a wide range of
specialized services, including Procurement (Social, Sustainable, and
Indigenous), Commercial Services (Contracts & Government), Project
Management, Corporate Communications, Change Management,
Continuous Improvement, Responsible Management Practices (RMP),
and Administrative Support. Their expertise is instrumental in driving
strategic transformation and sustainable development outcomes.</p>
                    </div>
                </div>
            </div>
            </div>
    </section>
    <section className='w-screen min-h-screen flex max-lg:flex-col  gap-12  p-20 pl-0 overflow-hidden'>
             <div className='w-2/3 max-sm:w-full h-full relative text-start'>
             <span className='absolute bg-[#002060] text-white w-96 -right-20 top-1/2 -translate-y-1/2 p-4 py-8 leading-24 flex flex-col gap-8'><p className='text-4xl font-bold
             '>Strategic Partnerships & Joint Ventures</p><p className='text-2xl font-bold'>SHARCO-2 Islamabad,Pakistan</p></span>
             <Image src='/ArkConsultimage2.jpg' alt='ICanHearYou' width={100000} height={100000} className='w-full' />
             </div>
             <div className='flex flex-col gap-8 justify-center h-full w-1/3 max-lg:w-full content-center pl-16'>
                <div className='flex gap-2'>
                    <div>
                    <div className='w-12 h-12 rounded-full bg-[#ED7D31] p-3'>
                        <Image src='/hear/icon3.svg' alt='ICanHearYou' width={100} height={100} className='' />
                    </div>
                    </div>
                    <p className='text-lg'>A well-established and respected name
in project implementation, indenting, and
general order supplies for commercial,
governmental, and development
organizations across Pakistan.
SHARCO-2 also offers a broad range of
consultancy services tailored to diverse
sectors and operational needs
</p>
                </div>
                <div className='flex gap-2'>
                    <div>
                    <div className='w-12 h-12 rounded-full bg-[#ED7D31] p-3'>
                        <Image src='/hear/icon4.svg' alt='ICanHearYou' width={100} height={100} className='' />
                    </div>
                    </div>
                    <p className='text-lg'>These collaborative ventures enable
us to deliver diversified, high-impact
solutions, combining international best
practices with deep local
understanding—empowering us to
respond effectively to complex
challenges and emerging opportunities
across industries and geographies</p>
                </div>
             </div>
            </section>
            </>
  )
}

export default ArkConsult
