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
        <section className='w-screen h-screen relative flex bg-[#002060]'>
            <div className='w-full h-full text-white flex flex-col gap-8 pl-20 pr-10 pt-14'>
                <h1 className='text-5xl font-bold'>Your Trusted Partner for
                Event Management Services</h1>
                <p className='text-[#ED7D31] font-semibold text-xl'>At Logistics Solutions, We Specialize In Turning
                Your Events Into Unforgettable Experiences! </p>
                <div className='flex gap-2 items-start'>
                    <div>
                        <Image src='/EM/icon1.svg' alt='' width={100} height={100} className='w-16' />
                    </div>
                        <p>Whether it’s a corporate gathering, a wedding, a private
party, or a large-scale public event, we provide end-to-end
event management services tailored to your needs. </p>
                </div>
                <div className='flex gap-2 items-start'>
                    <div>
                        <Image src='/EM/icon2.svg' alt='' width={100} height={100} className='w-16' />
                    </div>
                        <p>With just a call or WhatsApp message, we’ll handle every
detail, ensuring your event is seamless, stress-free, and
spectacular, at very reasonable rates</p>
                </div>
            </div>
            <div className='w-full h-full'>
                <Image src='/EM/image1.svg' alt='' width={1000} height={1000} className='w-full' />
            </div>
        </section>
         <section className="w-screen relative pb-10">
                  <div className="w-full h-68 overflow-hidden">
                    <Image
                      src="/EM/image2.svg"
                      alt=""
                      width={10000}
                      height={100000}
                      className="w-full"
                    />
                  </div>
                  <span className="absolute bg-[#002060] w-2/3 text-white text-7xl font-bold items-center justify-center text-center flex gap-8 top-44 py-12 min-w-[500px] rounded-r-2xl">
                    <Image
                      src="/EM/icon3.svg"
                      alt=""
                      width={80}
                      height={80}
                      className=""
                    />
                    <p>Why Choose Us?</p>
                  </span>
                  <div className="w-full pt-28 px-20 flex flex-col gap-8 ">
                    <div className='flex w-full justify-between items-center gap-10'>
                    <div className='flex gap-2 w-full'>
                        <div>
                            <Image src='/EM/icon4.svg' alt='' width={100} height={100} className='w-10' />
                        </div>
                        <div>
                            <h6 className='text-xl font-semibold'>Comprehensive Event Solutions </h6>
                            <p>From planning to execution, we manage it all.</p>
                        </div>
                    </div>
                    <div className='flex gap-2 w-full'>
                        <div>
                            <Image src='/EM/icon5.svg' alt='' width={100} height={100} className='w-10' />
                        </div>
                        <div>
                            <h6 className='text-xl font-semibold'>Reasonable Ratess </h6>
                            <p>We believe in delivering excellence. Affordable and
competitive charges with discounts could be offered on
specail deals.
</p>
                        </div>
                    </div>
                    </div>
                    <div className='flex w-full justify-between items-center gap-10'>
                    <div className='flex gap-2 w-full'>
                        <div>
                            <Image src='/EM/icon6.svg' alt='' width={100} height={100} className='w-10' />
                        </div>
                        <div>
                            <h6 className='text-xl font-semibold'>Hassle-Free Booking </h6>
                            <p>Just a call or WhatsApp message away</p>
                        </div>
                    </div>
                    <div className='flex gap-2 w-full'>
                        <div>
                            <Image src='/EM/icon7.svg' alt='' width={100} height={100} className='w-10' />
                        </div>
                        <div>
                            <h6 className='text-xl font-semibold'>Experienced Team </h6>
                            <p>Our professionals bring creativity, precision, and
                            reliability to every event.</p>
                        </div>
                    </div>
                    </div>
                  </div>
                </section>
                <section className='w-screen flex flex-col'>
                    <div className='w-screen h-68  bg-[url("/EM/image3.svg")] bg-cover bg-no-repeat bg-center bg-fixed'>
                    <div className='w-full h-full bg-black/50 text-white content-center text-center text-5xl font-bold'>Our Event Management Services Include
                    </div>
                    </div>
                    <div className='mx-auto flex gap-4 flex-wrap'>
                        <div className='w-56 bg-[#002060] flex flex-col gap-6 p-2 text-white'>
                            <div className='w-full flex justify-center'>
                                <div className='p-2 bg-white rounded-full w-12 h-12'>
                                    <Image src='/EM/icon8.svg' alt='' width={100} height={100} className='w-full' />  
                                </div>
                            </div>
                            <h5 className='text-xl font-semibold'>Corporation Events</h5>
                            <div className='flex flex-col gap-2'>
                                <div className='flex gap-1 '>
                                    <div><GoDotFill className="translate-y-1" /></div>
                                    <p>Conferences and seminars</p>
                                </div>
                                <div className='flex gap-1 '>
                                    <div><GoDotFill className="translate-y-1" /></div>
                                    <p>Product launches and trade shows</p>
                                </div>
                                <div className='flex gap-1 '>
                                    <div><GoDotFill className="translate-y-1" /></div>
                                    <p>Team-building activities and corporate retreats</p>
                                </div>
                                <div className='flex gap-1 '>
                                    <div><GoDotFill className="translate-y-1" /></div>
                                    <p>Annual meetings and award ceremonies</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-56 bg-[#002060] flex flex-col gap-6 p-2 text-white'>
                            <div className='w-full flex justify-center'>
                                <div className='p-2 bg-white rounded-full w-12 h-12'>
                                    <Image src='/EM/icon9.svg' alt='' width={100} height={100} className='w-full' />  
                                </div>
                            </div>
                            <h5 className='text-xl font-semibold'>Weddings and Social Events</h5>
                            <div className='flex flex-col gap-2'>
                                <div className='flex gap-1 '>
                                    <div><GoDotFill className="translate-y-1" /></div>
                                    <p>Wedding planning and coordination</p>
                                </div>
                                <div className='flex gap-1 '>
                                    <div><GoDotFill className="translate-y-1" /></div>
                                    <p>Engagement parties and bridal showers</p>
                                </div>
                                <div className='flex gap-1 '>
                                    <div><GoDotFill className="translate-y-1" /></div>
                                    <p>Birthday celebrations and anniversary parties</p>
                                </div>
                                <div className='flex gap-1 '>
                                    <div><GoDotFill className="translate-y-1" /></div>
                                    <p>Theme parties and private dinners</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-56 bg-[#002060] flex flex-col gap-6 p-2 text-white'>
                            <div className='w-full flex justify-center'>
                                <div className='p-2 bg-white rounded-full w-12 h-12'>
                                    <Image src='/EM/icon10.svg' alt='' width={100} height={100} className='w-full' />  
                                </div>
                            </div>
                            <h5 className='text-xl font-semibold'>Cultural and Public Events</h5>
                            <div className='flex flex-col gap-2'>
                                <div className='flex gap-1 '>
                                    <div><GoDotFill className="translate-y-1" /></div>
                                    <p>Festivals and cultural
                                    programss</p>
                                </div>
                                <div className='flex gap-1 '>
                                    <div><GoDotFill className="translate-y-1" /></div>
                                    <p>Concerts and live
                                    performances</p>
                                </div>
                                <div className='flex gap-1 '>
                                    <div><GoDotFill className="translate-y-1" /></div>
                                    <p>Charity events and
                                    fundraisers</p>
                                </div>
                                <div className='flex gap-1 '>
                                    <div><GoDotFill className="translate-y-1" /></div>
                                    <p>Community fairs and
                                    exhibitions</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-56 bg-[#002060] flex flex-col gap-6 p-2 text-white'>
                            <div className='w-full flex justify-center'>
                                <div className='p-2 bg-white rounded-full w-12 h-12'>
                                    <Image src='/EM/icon11.svg' alt='' width={100} height={100} className='w-full' />  
                                </div>
                            </div>
                            <h5 className='text-xl font-semibold'>Logistics and Support
Services
</h5>
                            <div className='flex flex-col gap-2'>
                                <div className='flex gap-1 '>
                                    <div><GoDotFill className="translate-y-1" /></div>
                                    <p>Venue selection and booking</p>
                                </div>
                                <div className='flex gap-1 '>
                                    <div><GoDotFill className="translate-y-1" /></div>
                                    <p>Catering and menu planning</p>
                                </div>
                                <div className='flex gap-1 '>
                                    <div><GoDotFill className="translate-y-1" /></div>
                                    <p>Decor and theme design</p>
                                </div>
                                <div className='flex gap-1 '>
                                    <div><GoDotFill className="translate-y-1" /></div>
                                    <p>Audio-visual equipment and
                                    technical support</p>
                                </div>
                                <div className='flex gap-1 '>
                                    <div><GoDotFill className="translate-y-1" /></div>
                                    <p>Transportation and guest
                                    management</p>
                                </div>
                                <div className='flex gap-1 '>
                                    <div><GoDotFill className="translate-y-1" /></div>
                                    <p>On-site coordination and
staff support</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-56 bg-[#002060] flex flex-col gap-6 p-2 text-white'>
                            <div className='w-full flex justify-center'>
                                <div className='p-2 bg-white rounded-full w-12 h-12'>
                                    <Image src='/EM/icon12.svg' alt='' width={100} height={100} className='w-full' />  
                                </div>
                            </div>
                            <h5 className='text-xl font-semibold'>Specialized Services</h5>
                            <div className='flex flex-col gap-2'>
                                <div className='flex gap-1 '>
                                    <div><GoDotFill className="translate-y-1" /></div>
                                    <p>CEvent marketing and
promotions</p>
                                </div>
                                <div className='flex gap-1 '>
                                    <div><GoDotFill className="translate-y-1" /></div>
                                    <p>Guest registration and
                                    ticketing</p>
                                </div>
                                <div className='flex gap-1 '>
                                    <div><GoDotFill className="translate-y-1" /></div>
                                    <p>Photography and
                                    videography</p>
                                </div>
                                <div className='flex gap-1 '>
                                    <div><GoDotFill className="translate-y-1" /></div>
                                    <p>Entertainment and performer
                                    coordination</p>
                                </div>
                                <div className='flex gap-1 '>
                                    <div><GoDotFill className="translate-y-1" /></div>
                                    <p>Post-event cleanup and
                                    feedback analysis</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-screen relative pb-20 flex items-center">
                          <div className="w-1/2 h-full flex flex-col gap-8 pl-20">
                            <h2 className="text-6xl font-bold text-[#002060] mb-4">
                              How It Works
                            </h2>
                            <div className='flex flex-col gap-2'>
                                <h3 className='text-4xl font-bold text-[#ED7D31]'>Contact Us</h3>
                                <p className='text-xl'>Call or WhatsApp us with your supply requirements.</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h3 className='text-4xl font-bold text-[#ED7D31]'>We Plan and Execute</h3>
                                <p className='text-xl'>Our team handles every detail, from
                                concept to completion.</p>
                            </div>
                          </div>
                          <div className="w-1/2 h-[547.3px] rounded-l-full flex flex-col justify-center pl-16  bg-[#002060]">
                            <Image
                              src="/EM/image4.svg"
                              alt="How it works"
                              width={1000}
                              height={1000}
                              className="w-96 h-96 rounded-full"
                            />
                          </div>
                        </section>
                        <section className='w-screen h-screen flex flex-col justify-center items-center text-center gap-8 bg-[url("/EM/image5.svg")] bg-no-repeat bg-center bg-cover bg-fixed'>
                        <h2 className='text-7xl font-bold text-[#ED7D31]'>Our Promise</h2>
                        <p className='text-2xl font-semibold text-white'>We’re committed to delivering memorable, stress-free, and flawlessly <br />
executed events that exceed your expectations. Your satisfaction is our <br />
ultimate goal!</p>
                        </section>
      </main>
      <Footer/>
    </>
  )
}

export default Page
