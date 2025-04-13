import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'
import { GoDotFill } from "react-icons/go";

function Page() {
  return (
    <>
    <Header/>
      <main>
        <section className='w-screen h-screen bg-[url("/ARF/image1.svg")] bg-no-repeat bg-center bg-cover bg-fixed'>
            <div className='w-full h-full flex flex-col bg-black/50  justify-center gap-6 px-20 items-center  text-center'>
<Image src='/ARF/icon1.svg' alt='agriculture' width={80} height={80} className='' />
<h1 className='text-[5vw] font-bold text-white'>Agricultural
Research Farms</h1>
<p className='text-lg text-white'>
At Logistics Solutions, we are proud to contribute to the agricultural development of Khyber Pakhtunkhwa through our Agricultural Research Farms located in Nasimabad, Viallage Chambai, Tehsil, and District Kohat.
</p>
            </div>
        </section>
        <section className='w-screen min-h-screen flex p-20'>
            <div className='w-full h-full flex flex-col gap-8 pr-10'>
<h2 className='text-3xl font-bold text-[#002060] relative before:absolute before:w-52 before:h-1 before:rounded-full before:bg-[#ED7D31] before:-bottom-2'>Advancing Agriculture for Self-Reliant Future - Nasimabad Aricultural Research Farms</h2>
<div className='flex gap-4'>
    <div className='text-5xl font-bold text-[#002060]'>01</div>
    <p className='text-lg'>We’re dedicated to improving agricultural productivity and
food security in Khyber Pakhtunkhwa, aiming for selfreliance by 2030. At Logistics Solutions, we are proud to
contribute to the agricultural development of Khyber
Pakhtunkhwa through our Agricultural Research Farms
located in Nasimabad, Viallage Chambai, Tehsil, and
District Kohat.</p>
</div>
<div className='flex gap-4'>
    <div className='text-5xl font-bold text-[#002060]'>02</div>
    <p className='text-lg'>In collaboration with the Provincial Government of Khyber
Pakhtunkhwa, the Barani Agricultural Research Station
(BARS) Kohat, and the District Agriculture Office Kohat, we
are dedicated to enhancing the province’s agricultural
productivity and food security. Our mission is to achieve selfreliance in the food basket of Khyber Pakhtunkhwa by 2030.</p>
</div>
            </div>
            <div className='w-full h-full'>
                <Image src='/ARF/image2.svg' alt='agriculture' width={100000} height={100000} className='h-full' />
            </div>
        </section>
         <section className="flex p-20 items-center w-screen min-h-screen overflow-hidden">
                  <div className="p-6 w-3/5 flex flex-col gap-8 bg-[#002060] rounded-lg z-10 text-white">
                    <h3 className="text-5xl font-bold">Our Key Initiatives</h3>
                    <div className="flex flex-col gap-2">
<div className='flex gap-2 items-center'><GoDotFill className='text-xl' /><p className="">Enhancing Wheat Seed Bank Capacity</p></div>
<div className='flex gap-2 items-center'><GoDotFill className='text-xl' /><p className="">ntroducing New Crops</p></div>
<div className='flex gap-2 items-center'><GoDotFill className='text-xl' /><p className="">Promoting Modern Agricultural Implements</p></div>
<div className='flex gap-2 items-center'><GoDotFill className='text-xl' /><p className="">Subsidized Services for Local Farmers</p></div>
                    </div>
                    <div className='flex flex-col gap-2'>
<div className='flex gap-2'><GoDotFill className='text-xl translate-y-2' /><p className="">Testing and developing new high-yield wheat varieties in collaboration with BARS Kohat.</p></div>
<div className='flex gap-2'><GoDotFill className='text-xl translate-y-2' /><p className="">Strengthening the provincial wheat seed bank to ensure better crop yields for farmers.</p></div>
<div className='flex gap-2'><GoDotFill className='text-xl translate-y-2' /><p className="">Promoting the adoption of improved wheat varieties among local farmers.</p></div>
                        
                    </div>
                  </div>
                  <div className="w-3/4 h-full overflow-hidden absolute right-0">
                    <Image
                      src="/ARF/image3.svg"
                      alt="ARFIMAGE3"
                      width={1000000}
                      height={10000000}
                      className=""
                    />
                  </div>
                </section>
                <section className="w-screen min-h-screen relative">
                          <div className="w-full h-68 overflow-hidden">
                            <Image
                              src="/ARF/image4.svg"
                              alt="ICCNimage4"
                              width={10000}
                              height={100000}
                              className="w-full"
                            />
                          </div>
                          <span className="absolute bg-[#002060] w-2/3 text-white text-5xl font-bold items-center justify-center text-center flex gap-8 top-44 py-12 min-w-[500px] rounded-r-2xl">
                            <Image
                              src="/HLP/icon4.svg"
                              alt="HLPimage4"
                              width={80}
                              height={80}
                              className=""
                            />
                            <p>Our Impact</p>
                          </span>
                          <div className="w-full pt-28 px-20 flex gap-8 ">
                            <div className="flex gap-2 text-black items-start w-full">
                              <div className="text-lg flex flex-col gap-2">
                                <div className="flex gap-2">
                                  <div>
                                    <GoDotFill className="text-[#ED7D31] text-2xl p-[1px] bg-[#ed7c3192] rounded-full translate-y-1" />
                                  </div>
                                  <p>
                                    {" "}
                                    <strong className="text-[#ED7D31]">
                                    Increased Crop Yields:
                                    </strong>{" "} <br />
                                    Farmers benefiting from our initiatives have reported significant improvements in their crop production.
                                  </p>
                                </div>
                                <div className="flex gap-2">
                                  <div>
                                    <GoDotFill className="text-[#ED7D31] text-2xl p-[1px] bg-[#ed7c3192] rounded-full translate-y-1" />
                                  </div>
                                  <p>
                                    {" "}
                                    <strong className="text-[#ED7D31]">
                                    Economic Empowerment:
                                    </strong>{" "} <br />
                                    By adopting new crops and technologies, farmers are diversifying their income and improving their livelihoods.
                                  </p>
                                </div>
                                <div className="flex gap-2">
                                  <div>
                                    <GoDotFill className="text-[#ED7D31] text-2xl p-[1px] bg-[#ed7c3192] rounded-full translate-y-1" />
                                  </div>
                                  <p>
                                    {" "}
                                    <strong className="text-[#ED7D31]">
                                    Food Security:
                                    </strong>{" "} <br />
                                    Our efforts are contributing to the province’s goal of achieving self-reliance in food production by 2030.
                                  </p>
                                </div>
                               
                              </div>
                            </div>
                          </div>
                        </section>
                        <section className="w-screen min-h-screen p-20 flex justify-center items-center">
                                  <div className="w-1/2 ">
                                    <Image
                                      src="/ARF/image5.svg"
                                      alt="HLPIMAGE4"
                                      width={10000000}
                                      height={10000000}
                                      className="h-full"
                                    />
                                  </div>
                                  <div className="w-2/3 h-full flex flex-col justify-center gap-8 shadow-2xl bg-white p-8 -translate-x-8">
                                    <h2 className="text-4xl font-bold text-[#002060]">Our Mission</h2>
                                    <div className='flex gap-2'>To achieve self-reliance in food production by
2030 through research, innovation, and
community support. To improve the agricultural
landscape of Khyber Pakhtunkhwa</div>
                                    <div className="flex flex-col gap-1">
                                      <div className="flex gap-2  items-center">
                                        <div>
                                          <GoDotFill className="text-[#ED7D31]  p-[1px] bg-[#ed7c3192] rounded-full" />
                                        </div>
                                        <p className="text-lg">Property Sales and Leasing</p>
                                      </div>
                                      <div className="flex gap-2  items-center">
                                        <div>
                                          <GoDotFill className="text-[#ED7D31]  p-[1px] bg-[#ed7c3192] rounded-full" />
                                        </div>
                                        <p className="text-lg">Land Acquisition and Development</p>
                                      </div>
                                      <div className="flex gap-2  items-center">
                                        <div>
                                          <GoDotFill className="text-[#ED7D31]  p-[1px] bg-[#ed7c3192] rounded-full" />
                                        </div>
                                        <p className="text-lg">
                                          Property Rights Disputes and Resolution
                                        </p>
                                      </div>
                                      <div className="flex gap-2  items-center">
                                        <div>
                                          <GoDotFill className="text-[#ED7D31]  p-[1px] bg-[#ed7c3192] rounded-full" />
                                        </div>
                                        <p className="text-lg">Housing Solutions</p>
                                      </div>
                                    </div>
                                    
                                  </div>
                                </section>
      </main>
      <Footer/>
    </>
  )
}

export default Page
