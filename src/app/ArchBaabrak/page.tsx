import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";

function Page() {
  return (
    <>
      <Header />
      <main className="w-screen min-h-screen overflow-hidden">
        <section className="relative w-screen h-screen bg-[#002060] flex justify-center items-center">
          <span className="absolute h-60 w-screen bg-[#ED7D31] z-0"></span>
          <div className="bg-[#002060] text-[#ED7D31] border-x-2 border-[#ED7D31] h-80 -skew-2 z-10 px-4 content-center text-center text-5xl font-bold">
            <h1 className="skew-2">
              ArchBaabrak - <br /> Architecture Excellence
            </h1>
          </div>
        </section>
        <section className="w-screen min-h-screen p-20">
          <div className="w-full h-full rounded-xl bg-[#002060] text-white flex p-8 gap-8">
            <div className="w-2/3 h-full flex flex-col gap-12 pr-20">
              <h2 className="text-4xl font-bold">
                Introducing ArchBaabrak – Your Trusted Partner in Architectural
                Excellence
              </h2>
              <div className="flex gap-2 ">
                <div>
                  <GoDotFill className="text-[#ED7D31]  p-[1px] bg-[#ed7c3192] rounded-full translate-y-2" />
                </div>
                <p className="text-lg">
                  ArchBaabrak offers innovative, sustainable, and client-focused
                  design solutions for all types of construction projects.
                </p>
              </div>
              <div className="flex gap-2 ">
                <div>
                  <GoDotFill className="text-[#ED7D31]  p-[1px] bg-[#ed7c3192] rounded-full translate-y-2" />
                </div>
                <p className="text-lg">
                  A subsidiary of Logistics Solutions, ArchBaabrak is a premier
                  architectural firm dedicated to providing innovative,
                  sustainable, and client-centric design solutions for
                  construction and development projects.
                </p>
              </div>
            </div>
            <div className="w-1/3 h-full">
              <Image
                src="/Arch/image1.svg"
                alt="image1"
                width={100000}
                height={10000}
                className="w-full"
              />
            </div>
          </div>
        </section>
        <section className="w-screen h-screen flex overflow-hidden">
            <div className="w-full h-full">
                <Image src="/Arch/image2.svg" alt="image2" width={100000} height={10000} className="w-full -translate-y-12" />
            </div>
            <div className="w-full h-full bg-[#002060] text-white flex flex-col justify-center gap-8 p-8">
                <h2 className="text-6xl font-bold">Our Mission</h2>
                <div className="flex gap-4">
                    <div>
                    <Image src="/Arch/icon1.svg" alt="icon1" width={120} height={120} className=" bg-[#ED7D31] p-2 py-3 rounded-lg" />
                    </div>
                    <p className="text-lg">To provide expert architectural advice, design,
and implementation services that meet the
highest standards.
</p>
                </div>
                <div className="flex gap-4">
                    <div className="w-auto">
                    <Image src="/Arch/icon2.svg" alt="icon2" width={280} height={200} className=" bg-[#ED7D31] p-2 py-3 rounded-lg " />
                    </div>
                    <p className="text-lg">To transform visions into reality by offering expert
architectural advice, design, and implementation
services that meet the highest standards of quality,
sustainability, and client satisfaction—all at reasonable
consultation fees and service charges.
</p>
                </div>
                <div className="flex gap-4"></div>
            </div>
        </section>
        <section className="w-screen min-h-screen p-20 flex justify-center items-center">
                  <div className="w-1/3 ">
                    <Image
                      src="/Arch/image3.svg"
                      alt="HLPIMAGE4"
                      width={10000000}
                      height={10000000}
                      className="h-full"
                    />
                  </div>
                  <div className="w-2/3 h-full flex flex-col justify-center gap-8 bg-[#002060] p-8 -translate-x-8 text-white">
                    <h2 className="text-3xl font-bold">Our Services</h2>
                    <div className="flex flex-col gap-1">
                      <div className="flex gap-2  items-center">
                        <div>
                          <GoDotFill className="text-[#ED7D31]  p-[1px] bg-[#ed7c3192] rounded-full" />
                        </div>
                        <p className="text-lg">Architectural Design and Planning</p>
                      </div>
                      <div className="flex gap-2  items-center">
                        <div>
                          <GoDotFill className="text-[#ED7D31]  p-[1px] bg-[#ed7c3192] rounded-full" />
                        </div>
                        <p className="text-lg">Horticulture and Landscape Design</p>
                      </div>
                      <div className="flex gap-2  items-center">
                        <div>
                          <GoDotFill className="text-[#ED7D31]  p-[1px] bg-[#ed7c3192] rounded-full" />
                        </div>
                        <p className="text-lg">
                        Urban Development
                        </p>
                      </div>
                      <div className="flex gap-2  items-center">
                        <div>
                          <GoDotFill className="text-[#ED7D31]  p-[1px] bg-[#ed7c3192] rounded-full" />
                        </div>
                        <p className="text-lg">Infrastructure Development</p>
                      </div>
                      <div className="flex gap-2  items-center">
                        <div>
                          <GoDotFill className="text-[#ED7D31]  p-[1px] bg-[#ed7c3192] rounded-full" />
                        </div>
                        <p className="text-lg">Housing Solutions</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex gap-2  items-center">
                        <div>
                          <GoDotFill className="text-[#ED7D31]  p-[1px] bg-[#ed7c3192] rounded-full" />
                        </div>
                        <p className="text-lg">Customized designs for residential, commercial, and
                        institutional projects.</p>
                      </div>
                      <div className="flex gap-2  items-center">
                        <div>
                          <GoDotFill className="text-[#ED7D31]  p-[1px] bg-[#ed7c3192] rounded-full" />
                        </div>
                        <p className="text-lg">Master planning for urban and rural development.</p>
                      </div>
                      <div className="flex gap-2  items-center">
                        <div>
                          <GoDotFill className="text-[#ED7D31]  p-[1px] bg-[#ed7c3192] rounded-full" />
                        </div>
                        <p className="text-lg">
                        Sustainable and eco-friendly architectural solutions.
                        </p>
                      </div>
                    </div>
                    
                  </div>
                </section>
                 <section className="w-screen relative pb-20 flex">
                          <div className="w-1/2 h-full flex flex-col gap-4 pl-20">
                            <h2 className="text-6xl font-bold text-[#002060]">
                            Why Choose
                            ArchBaabrak?
                            </h2>
                            <div className="flex flex-col gap-2">
                              <div className="flex gap-2 items-center">
                                <div>
                                  <GoDotFill className="text-[#ED7D31] text-xl p-[1px] bg-[#ed7c3192] rounded-full" />
                                </div>
                                <p className="text-lg">
                                Expert leadership and local expertise.
                                </p>
                              </div>
                              <div className="flex gap-2 items-center">
                                <div>
                                  <GoDotFill className="text-[#ED7D31] text-xl p-[1px] bg-[#ed7c3192] rounded-full" />
                                </div>
                                <p className="text-lg">
                                High-quality design solutions.
                                </p>
                              </div>
                              <div className="flex gap-2 items-center">
                                <div>
                                  <GoDotFill className="text-[#ED7D31] text-xl p-[1px] bg-[#ed7c3192] rounded-full" />
                                </div>
                                <p className="text-lg">
                                Affordable and transparent service fees.
                                </p>
                              </div>
                            </div>
                            <div className="flex flex-col gap-4 text-lg leading-none">
                              <div>
                                <strong className="text-[#ED7D31]">Expert Leadership:</strong>
                                <p>Led by foreign-qualified architects
                                with global expertise.</p>
                              </div>
                              <div>
                                <strong className="text-[#ED7D31]">Local Expertise:</strong>
                                <p>A dedicated team of local architects
with in-depth knowledge of regional needs and
regulations.</p>
                              </div>
                              <div>
                                <strong className="text-[#ED7D31]">Quality Assurance:</strong>
                                <p>Commitment to delivering highquality designs and solutions.</p>
                              </div>
                              <div>
                                <strong className="text-[#ED7D31]">Client-Centric Approach:</strong>
                                <p>Tailored services to meet your
                                unique requirements.</p>
                              </div>
                              <div>
                                <strong className="text-[#ED7D31]">Affordable Fees:</strong>
                                <p>Transparent and reasonable
                                consultation and service charges.</p>
                              </div>
                            </div>
                          </div>
                          <div className="w-1/2 h-[547.3px] rounded-l-full flex flex-col justify-center pl-16  bg-[#002060]">
                            <Image
                              src="/Arch/image4.svg"
                              alt="How it works"
                              width={1000}
                              height={1000}
                              className="w-96 h-96 rounded-full"
                            />
                          </div>
                        </section>
      </main>
      <Footer />
    </>
  );
}

export default Page;
