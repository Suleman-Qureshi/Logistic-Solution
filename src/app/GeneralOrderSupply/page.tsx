import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'
import { GoDotFill } from 'react-icons/go'

function Page() {
  return (
    <>
     <Header/> 
     <main className='w-screen overflow-hidden'>
        <section className='w-screen h-screen bg-[url("/GOS/image1.svg")] bg-no-repeat bg-cover flex justify-center items-center text-center p-20 max-lg:p10 max-md:p-4'>
        <h1 className='text-white text-[5vw] max-md:text-[7vw] font-bold leading-20 max-lg:leading-8'>Your Trusted Partner For <br className='max-lg:hidden' />
General Order Supplies And <br className='max-lg:hidden' />
Procurement Solutions</h1>
        </section>
        <section className='w-screen relative flex flex-row-reverse'>
            <span className=' h-screen overflow-hidden max-lg:hidden'>
                <Image src='/GOS/image2.svg' alt='image2' width={500} height={500} className=''/>
            </span>
            <div className='w-2/3 px-20 max-lg:px-10 max-md:px-4 py-10 flex gap-8 flex-col max-lg:w-full'>
                <h1 className='text-5xl font-bold text-[#002060] h-fit relative before:absolute before:w-20 before:h-1 before:rounded-full before:bg-[#ED7D31] before:-bottom-5'>Your Trusted Partner For
General Order Supplies And
Procurement Solutions</h1>
<p className='text-xlg font-semibold'>At, <b className='text-[#002060]'>Logistics Solutions</b> we simplify your supply chain needs by providing
<b className='text-[#002060]'> general order supplies of all sorts</b>, whether technical or non-technical
equipment/materials.</p>
            <div className='flex max-sm:flex-col gap-8 items-center'>
                 <div className='flex flex-col gap-2 p-4 text-white justify-center w-96 h-60 bg-[#ED7D31] rounded-2xl py-6'>
                             <Image src='/GOS/icon1.svg' width={50} height={50} alt='icon1'/>
                             <p>From indenting and tendering to direct purchases
and single-source supplier arrangements, we
handle it all domestically and internationally
through import/export modalities and other tailored
arrangements. </p>
                         </div>
                 <div className='flex flex-col gap-2 p-4 text-white justify-center w-96 h-60  bg-[#ED7D31] rounded-2xl py-6'>
                             <Image src='/GOS/icon2.svg' width={50} height={50} alt='icon1'/>
                             <p>With just a call or WhatsApp message, we ensure
you get the right supplies, at the right time, and at
the best value. </p>
                         </div>
            </div>
            </div>
        </section>
        <section className='w-screen relative flex max-lg:flex-col'>
            <div className='w-full pl-20 max-lg:pl-10 max-md:pl-4 p-10 flex flex-col gap-6'>
                <h2 className='text-6xl font-bold text-[#002060]'>Why <br />Choose Us?</h2>
                <div className="flex gap-4">
                    <div>
                              <GoDotFill className="text-[#ED7D31] text-2xl p-[1px] bg-[#ed7c3192] rounded-full translate-y-1" />
                    </div>
                              <div className="flex flex-col gap-1">
                                <h5 className="text-xl font-semibold">End-to-End Procurement Solutions: </h5>
                                <p className="text-lg">
                                We manage the entire supply chain process for you.
                                </p>
                              </div>
                            </div>
                <div className="flex gap-4">
                    <div>
                              <GoDotFill className="text-[#ED7D31] text-2xl p-[1px] bg-[#ed7c3192] rounded-full translate-y-1" />
                    </div>
                              <div className="flex flex-col gap-1">
                                <h5 className="text-xl font-semibold">Global Reach: </h5>
                                <p className="text-lg">
                                Domestic and international sourcing through
import/export modalities.
                                </p>
                              </div>
                            </div>
                <div className="flex gap-4">
                    <div>
                              <GoDotFill className="text-[#ED7D31] text-2xl p-[1px] bg-[#ed7c3192] rounded-full translate-y-1" />
                    </div>
                              <div className="flex flex-col gap-1">
                                <h5 className="text-xl font-semibold">Flexible Procurement Methods: </h5>
                                <p className="text-lg">
                                Indenting, tendering, competitive bidding, direct
                                purchase, and single-source supplier arrangements.
                                </p>
                              </div>
                            </div>
                <div className="flex gap-4">
                    <div>
                              <GoDotFill className="text-[#ED7D31] text-2xl p-[1px] bg-[#ed7c3192] rounded-full translate-y-1" />
                    </div>
                              <div className="flex flex-col gap-1">
                                <h5 className="text-xl font-semibold">Hassle-Free Services: </h5>
                                <p className="text-lg">
                                Just a call or WhatsApp or E-mail message away!
                                </p>
                              </div>
                            </div>
                <div className="flex gap-4">
                    <div>
                              <GoDotFill className="text-[#ED7D31] text-2xl p-[1px] bg-[#ed7c3192] rounded-full translate-y-1" />
                    </div>
                              <div className="flex flex-col gap-1">
                                <h5 className="text-xl font-semibold">Cost-Effective and Reliable: </h5>
                                <p className="text-lg">
                                We ensure quality and value in every transaction.
                                </p>
                              </div>
                            </div>
            </div>
            <div className='w-full h-screen flex justify-center'>
                <Image src='/GOS/image3.svg' alt='image3' width={5122100} height={5190} className='h-full w-auto'/>
            </div>
        </section>
        <section className='w-screen min-h-screen flex'>
            <div className='w-full  relative max-lg:hidden'>
                <div className='w-full h-full flex justify-center items-end p-4 absolute'>
            <span className='w-full px-6 py-4  bg-[#002060] text-white text-5xl font-bold text-center '>Our Procurement and Supply Services Includes</span>
                </div>
<Image src='/GOS/image4.svg' alt='image4' width={5122100} height={5190} className='w-full'/>
            </div>
            <div className='w-full h-full px-20 max-lg:px-10 max-md:px-4 py-10 flex flex-col gap-6 justify-center'>
                <div className='flex flex-col gap-4'>
                    <Image src='/GOS/icon5.svg' alt='icon3' width={50} height={50} className=''/>
                    <h3 className='text-4xl font-bold'>General Order Supplies</h3>
                    <div className='flex flex-col gap-1'>
                    <div className='flex gap-2'>
                    <div><GoDotFill className="text-lg translate-y-1" /></div>
                    <p>Supply of Equipment/Machinery/Spares for Oil and
Gas (Petroleum Sector) Industry and other sectors as well.
 </p>
                    </div>
                    <div className='flex gap-2'>
                        <div><GoDotFill className="text-lg translate-y-1" /></div>
                    <p>Humanitarian supplies</p>
                    </div>
                    <div className='flex gap-2'>
                        <div><GoDotFill className="text-lg translate-y-1" /></div>
                    <p>Industrial equipment and tools </p>
                    </div>
                    <div className='flex gap-2'>
                        <div><GoDotFill className="text-lg translate-y-1" /></div>
                    <p>Construction materials and machinery </p>
                    </div>
                    <div className='flex gap-2'>
                        <div><GoDotFill className="text-lg translate-y-1" /></div>
                    <p>Medical and laboratory equipment</p>
                    </div>
                    <div className='flex gap-2'>
                        <div><GoDotFill className="text-lg translate-y-1" /></div>
                    <p>IT and technical hardware </p>
                    </div>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <Image src='/GOS/icon6.svg' alt='icon3' width={50} height={50} className=''/>
                    <h3 className='text-4xl font-bold'>Procurement Methods</h3>
                    <div className='flex flex-col gap-1'>
                    <div className='flex gap-2'>
                    <div><GoDotFill className="text-lg translate-y-1" /></div>
                    <p><b>Indenting:</b> Customized procurement based on your
                    specifications</p>
                    </div>
                    <div className='flex gap-2'>
                    <div><GoDotFill className="text-lg translate-y-1" /></div>
                    <p><b>Tendering/Competitive Bidding: </b>Transparent
and competitive pricing.
</p>
                    </div>
                    <div className='flex gap-2'>
                    <div><GoDotFill className="text-lg translate-y-1" /></div>
                    <p><b>Direct Purchase: </b>Quick and efficient sourcing from
trusted suppliers.
</p>
                    </div>
                    <div className='flex gap-2'>
                    <div><GoDotFill className="text-lg translate-y-1" /></div>
                    <p><b>Single-Source Supplier:</b> Streamlined
                    procurement for consistent quality</p>
                    </div>
                
                    </div>
                </div>
            </div>
        </section>
        <section className='w-screen min-h-screen flex flex-col'>
            <div className='w-full h-96 max-md:h-40 bg-[url("/GOS/image5.svg")] bg-no-repeat bg-center bg-cover relative bg-fixed'>
            </div>
<div className='flex max-lg:flex-col max-lg:p-10 max-md:p-4 gap-12 p-20'>
    <div className='flex flex-col gap-4'>
    <h5 className='text-4xl font-bold text-[#ED7D31]'>Domestic and International Sourcing</h5>
    <div className='flex gap-2'>
                        <div><GoDotFill className="text-lg translate-y-1" /></div>
                    <p>Local supplier networks for quick deliveries. </p>
                    </div>
    <div className='flex gap-2'>
                        <div><GoDotFill className="text-lg translate-y-1" /></div>
                    <p>Global sourcing through import/export modalities.
                    </p>
                    </div>
    <div className='flex gap-2'>
                        <div><GoDotFill className="text-lg translate-y-1" /></div>
                    <p>Customs clearance and logistics support.
                    </p>
                    </div>
    </div>
    <div className='flex flex-col gap-4'>
    <h5 className='text-4xl font-bold text-[#ED7D31]'>Specialized Arrangements</h5>
    <div className='flex gap-2'>
                        <div><GoDotFill className="text-lg translate-y-1" /></div>
                    <p>Bulk purchasing for cost savings.
                    </p>
                    </div>
    <div className='flex gap-2'>
                        <div><GoDotFill className="text-lg translate-y-1" /></div>
                    <p>Just-in-time delivery for urgent needs.
                    </p>
                    </div>
    <div className='flex gap-2'>
                        <div><GoDotFill className="text-lg translate-y-1" /></div>
                    <p>Vendor management and quality assurance.
                    </p>
                    </div>
    <div className='flex gap-2'>
                        <div><GoDotFill className="text-lg translate-y-1" /></div>
                    <p>Inspection on Delivery
                    </p>
                    </div>
    </div>
</div>
        </section>
        <section className='w-screen h-screen flex flex-col gap-6 justify-center items-center bg-[url("/GOS/image6.svg")] bg-no-repeat bg-center bg-cover text-center'>
        <h2 className='text-8xl font-bold text-[#Ed7D31]'>Our Promise</h2>
        <p className='text-white text-2xl font-medium'>We’re committed to providing efficient, reliable, and cost-effective <br className='max-lg:hidden' />
procurement solutions tailored to your needs. Whether it’s a small <br className='max-lg:hidden' />
order or a large-scale supply chain requirement, we’ve got you covered.</p>
        </section>
     </main>
     <Footer/>
    </>
  )
}

export default Page
