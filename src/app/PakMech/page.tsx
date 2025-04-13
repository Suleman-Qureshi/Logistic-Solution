import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'
function Page() {
  return (
    <>
     <Header/> 
     <main className='w-screen overflow-hidden'>
        <section className='w-screen h-screen relative before:absolute before:w-full before:h-full before:bg-[url("/PakMech/image1.svg")] before:bg-no-repeat before:bg-cover before:top-0 before:-left-1'>
            <h1 className='text-[4vw] font-bold text-[#002060] absolute right-10 bottom-10 leading-16'>PAKMECH - On - <br />Demand Auto <br />Repair Solution</h1>
        </section>
<section className='w-screen min-h-screen relative before:absolute before:w-2/3 before:h-full  before:right-0 before:top-0 before:bg-[url("/PakMech/image2.svg")] before:bg-no-repeat before:bg-cover before:z-0'>
<div className='p-6 bg-[#002060] text-white flex flex-col gap-6 rounded-2xl z-10 absolute max-w-[35rem] top-1/2 -translate-y-1/2 right-[50vw]'>
    <h2 className='text-3xl font-bold'>Introducing PAKMECH – Your On - Demand Auto Repair Solution</h2>
    <div className='flex gap-2'>
        <div>
            <Image src='/PakMech/icon1.svg' alt='image' width={80} height={80} className='' />
        </div>
        <p className=''>PAKMECH connects vehicle owners to certified mechanics
        for on-demand repairs and maintenance services.</p>
    </div>
    <div className='flex gap-2'>
        <div className=''>
            <Image src='/PakMech/icon2.svg' alt='image' width={300} height={300} className=' ' />
        </div>
        <p className=''>A subsidiary of Logistics Solutions, we are excited to launch
PAKMECH, a revolutionary mobile app designed to connect
vehicle owners with certified auto mechanics and engineers for
on-demand vehicle repair and maintenance services. Inspired
by the convenience of ride-hailing apps, PAKMECH brings the
same ease and efficiency to auto repairs, ensuring your vehicle
gets the care it needs, whenever and wherever you need it.</p>
    </div>
</div>
</section>
<section className='w-screen min-h-screen flex bg-[#002060]'>
    <div className='w-full h-full'>
        <Image src='/PakMech/image3.svg' alt='image' width={1000} height={1000} className='w-full' />
    </div>
    <div className='w-full h-full p-20 flex flex-col gap-8 text-white justify-center'>
        <h2 className='text-7xl font-bold'>What is PAKMECH?</h2>
        <div className='flex gap-2'>
            <div>
                <div className='w-16 h-16 p-2 bg-[#ED7D31] rounded-lg'>
                    <Image src='/PakMech/icon3.svg' alt='image' width={300} height={300} className='w-full h-full' />
                </div>
            </div>
                <p className='text-lg'>A mobile app that offers on-the-spot auto repairs, 24/7.</p>
        </div>
        <div className='flex gap-2'>
            <div>
                <div className='w-16 h-16 p-2 bg-[#ED7D31] rounded-lg'>
                    <Image src='/PakMech/icon4.svg' alt='image' width={300} height={300} className='w-full h-full' />
                </div>
            </div>
                <p className='text-lg'>PAKMECH is a user-friendly, tech-driven platform that bridges the gap between vehicle owners and skilled auto mechanics. Whether you’re facing a breakdown, need routine maintenance, or require emergency repairs, PAKMECH is your one-stop solution.</p>
        </div>
    </div>
</section>
<section className='flex w-screen min-h-screen py-20'>
    <div className='w-full flex flex-col gap-4'>
       <h2 className='text-6xl font-bold text-[#ED7D31] pl-20'>Key Features <br /> of PAKMECH</h2>
       <div className='w-full bg-[#002060] px-20 py-8 text-white flex flex-col gap-4'>
        <div className='flex gap-2 items-start'>
            <Image src='/PakMech/icon5.svg' alt='image' width={30} height={30} className='' />
            <p>Real-Time Tracking, Secure Payments, Quality Assurance,
            24/7 Support.</p>
        </div>
        <div className='flex gap-2 items-start'>
            <Image src='/PakMech/icon6.svg' alt='image' width={30} height={30} className='' />
            <p><b>Request Services:</b> Specify your location, vehicle type,
and issue to request a mechanic instantly. <br />
<b>Real-Time Tracking:</b> Track the assigned mechanic’s
location in real-time. <br />
<b>Secure Payments:</b> Pay seamlessly via credit/debit cards,
mobile wallets, or cash. <br />
<b>Ratings & Feedback:</b> Rate mechanics and provide
feedback to ensure quality service.</p>
        </div>
       </div>
    </div>
    <div className='w-full'>
        <Image src='/PakMech/image4.svg' alt='image' width={1000} height={1000} className='w-full border-8 border-[#002060] bg-[#002060] p-4 pr-0' />
    </div>
</section>
<section className="w-screen min-h-screen relative">
          <div className="w-full h-68 overflow-hidden">
            <Image
              src="/PakMech/image5.svg"
              alt="ICCNimage4"
              width={10000}
              height={100000}
              className="w-full"
            />
          </div>
          <span className="absolute bg-[#002060] w-2/3 text-white text-5xl font-bold items-center justify-center text-center flex gap-8 top-44 py-12 min-w-[500px] rounded-r-2xl">
            <Image
              src="/PakMech/icon7.svg"
              alt="HLPimage4"
              width={80}
              height={80}
              className=""
            />
            <p>Why Choose PAKMECH?</p>
          </span>
          <div className="w-full pt-28 px-20 flex flex-col text-center text-xl ">
            <p><b>Convenience:</b> Get auto repair services at your doorstep with just a few taps.</p>
            <p><b>Transparency:</b> Real-time tracking and upfront pricing ensure no surprises..</p>
            <p><b>Quality Assurance:</b> All mechanics are certified, verified, and rated by users.</p>
            <p><b>Secure Payments:</b> PCI-DSS compliant payment gateways for safe transactions.</p>
            <p><b>24/7 Support:</b> Reliable customer support to assist you at every step.</p>
          </div>
        </section>
         <section className="w-screen min-h-screen p-20 flex justify-center items-center">
                                          <div className="w-1/2 ">
                                            <Image
                                              src="/PakMech/image6.svg"
                                              alt="HLPIMAGE4"
                                              width={10000000}
                                              height={10000000}
                                              className="h-full"
                                            />
                                          </div>
                                          <div className="w-2/3 h-full flex flex-col justify-center gap-8 shadow-2xl bg-white p-8 -translate-x-8">
                                            <h2 className="text-4xl font-bold text-[#002060]">How PAKMECH Works</h2>
                                           <div className='flex flex-col gap-2 text-lg'>
                                            <p><b className='text-[#ED7D31]'>Download the App: </b>Available on iOS and Android.</p>
                                            <p><b className='text-[#ED7D31]'>Request a Mechanic: </b>Enter your location, vehicle details, and issue.</p>
                                            <p><b className='text-[#ED7D31]'>Track & Connect: </b> Monitor the mechanic’s
                                            arrival in real-time.</p>
                                            <p><b className='text-[#ED7D31]'>Get Your Vehicle Fixed: </b>Enjoy professional,
                                            on-the-spot repairs.</p>
                                            <p><b className='text-[#ED7D31]'>Pay & Rate: </b>Complete payment and share
                                            your feedback.</p>
                                           </div>
                                            
                                          </div>
                                        </section>
     </main>
     <Footer/>
    </>
  )
}

export default Page
