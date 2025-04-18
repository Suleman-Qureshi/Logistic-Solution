import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { GoDotFill } from "react-icons/go";
import Image from "next/image";

function Page() {
  return (
    <>
      <Header />
      <main className="w-screen overflow-hidden">
        <section className='w-screen h-screen bg-[url("/About/image1.svg")] bg-no-repeat bg-center bg-cover bg-fixed content-center text-center text-[10vw] text-white font-bold'>
          About Us
        </section>
        <section className="flex w-screen ">
          <div className="p-20 max-md:p-4 pb-0 pr-4 flex flex-col gap-8 w-full">
            <h5 className="text-5xl font-bold text-[#002060]">Who We Are</h5>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <div>
                  <GoDotFill className="text-[#ED7D31] text-2xl p-[1px] bg-[#ed7c3192] rounded-full translate-y-1" />
                </div>
                <p className="text-lg">At Logistics Solutions, we aim to redefine industries by
                offering a diverse range of services.</p>
              </div>
              <div className="flex gap-2">
                <div>
                  <GoDotFill className="text-[#ED7D31] text-2xl p-[1px] bg-[#ed7c3192] rounded-full translate-y-1" />
                </div>
                <p className="text-lg">We believe in creating value for our clients through
innovation, sustainability, and a commitment to
excellence.</p>
              </div>
              <div className="flex gap-2">
                <div>
                  <GoDotFill className="text-[#ED7D31] text-2xl p-[1px] bg-[#ed7c3192] rounded-full translate-y-1" />
                </div>
                <p className="text-lg">With years of expertise in transportation, warehousing,
and distribution, we offer innovative and customized
logistics solutions that help businesses move forward
efficiently and cost-effectively.</p>
              </div>
              <div className="flex gap-2">
                <div>
                  <GoDotFill className="text-[#ED7D31] text-2xl p-[1px] bg-[#ed7c3192] rounded-full translate-y-1" />
                </div>
                <p className="text-lg">Our team of logistics experts, technology-driven processes,
and commitment to excellence ensure that your goods are
delivered on time, every time. Whether you need freight
forwarding, last-mile delivery, or global supply chain solutions,
we have the infrastructure and expertise to meet your needs.</p>
              </div>
            </div>
          </div>
          <div className="w-full h-full max-lg:hidden">
            <Image src="/About/image2.svg" alt="aboutimg" width={1000} height={1000} className="w-full" /> 
          </div>
        </section>
        <section className="w-screen">
            <div className="w-full px-20 max-lg:px-10 max-md:px-4 flex max-lg:flex-col gap-4 max-lg:mb-4">
                <div className="border-t-[3rem] border-[#ED7D31] p-4 text-7xl font-bold w-80 max-sm:w-full">Our Mission</div>
                <div className="flex flex-col gap-1">
                    <div>
                    <div className="w-14 h-14 p-2 bg-[#002060] rounded-full">
                        <Image src="/About/icon1.svg" alt="aboutimg" width={100} height={100} className="w-full h-full" />
                    </div>
                    </div>
                    <p>Our mission is to transform industries
through innovative solutions that
provide value, convenience, and
enhance customer experiences.“ Our
mission is to revolutionize logistics by
delivering seamless, efficient, and
technology-driven solutions that
empower businesses to grow.</p>
                </div>
                <div className="flex flex-col gap-1">
                    <div>
                    <div className="w-14 h-14 p-2 bg-[#002060] rounded-full">
                        <Image src="/About/icon2.svg" alt="aboutimg" width={100} height={100} className="w-full h-full" />
                    </div>
                    </div>
                    <p>Our goal is to optimize supply chains,
reduce transit times, and enhance
efficiency through innovation, cuttingedge technology, and a customercentric approach. We strive to build
long-term partnerships by ensuring
transparency, flexibility, and excellence
in every shipment</p>
                </div>
            </div>
            <div className="w-full h-80 overflow-hidden">
                <Image src="/About/image3.svg" alt="aboutimg" width={10000} height={10000} className="w-full" />
            </div>
        </section>
        <section className="flex w-screen">
            <div className="p-20 max-lg:p-10 max-md:px-4 pr-10 w-3/5 max-lg:w-full flex flex-col gap-6 justify-center">
                <h5 className="text-6xl font-bold text-[#002060] w-full text-center pb-4">Our Vision</h5>
                <div className="w-full flex flex-col gap-4">
                    <div className="w-full flex gap-2 px-4 py-2 bg-[#002060] text-white">
                        <div>
                            <div className="w-16 h-16 bg-[#ED7D31] rounded-full p-4 content-center">
                                <Image src="/About/icon3.svg" alt="aboutimg" width={100} height={100} className="w-full" />
                            </div>
                        </div>
                        <p className="text-lg">To become the leading provider of
diverse, sustainable solutions that not only
address the needs of today but also
anticipate the demands of tomorrow.</p>
                    </div>
                    <div className="w-full flex gap-2 px-4 py-2">
                        <div>
                            <div className="w-16 h-16 bg-[#002060] rounded-full p-4 content-center">
                                <Image src="/About/icon4.svg" alt="aboutimg" width={100} height={100} className="w-full" />
                            </div>
                        </div>
                        <p className="text-lg">At Logistics Solutions we envision a world where
logistics is seamless, efficient, and innovative. Our
mission is to revolutionize the way businesses
move goods by providing cutting-edge solutions
that enhance speed, accuracy, and reliability. </p>
                    </div>
                    <div className="w-full flex gap-2 px-4 py-2 bg-[#002060] text-white">
                        <div>
                            <div className="w-16 h-16 bg-[#ED7D31] rounded-full p-4 content-center">
                                <Image src="/About/icon5.svg" alt="aboutimg" width={100} height={100} className="w-full" />
                            </div>
                        </div>
                        <p className="text-lg">With a future-focused mindset, we aim to
create smarter, greener, and more connected
logistics networks that adapt to the evolving
needs of global trade. </p>
                    </div>
                </div>
            </div>
            <div className="w-2/5 overflow-hidden max-lg:hidden">
            <Image src="/About/image4.svg" alt="aboutimg" width={10000} height={10000} className="w-full" />
            </div>
        </section>
        <section className="w-screen gap-10 flex max-lg:flex-col px-20 max-lg:px-10 max-md:px-4">
            <div className="w-3/5 max-lg:w-full h-full flex flex-col gap-8 pt-20">
            <h5 className="text-6xl font-bold text-[#002060] w-full text-center pb-4">Core Values</h5>
             <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                <div>
                  <GoDotFill className="text-[#ED7D31] text-2xl p-[1px] bg-[#ed7c3192] rounded-full translate-y-1" />
                </div>
                <p className="text-lg"><b>&ldquo;Innovation, Sustainability, Customer-Centricity, Integrity.&rdquo;</b> <br />
Our core values define who we are and guide every aspect of
our logistics solutions. We are committed to delivering
excellence, fostering innovation, and building lasting
relationships with our customers, partners, and communities.</p>
              </div>
                <div className="flex gap-2">
                <div>
                  <GoDotFill className="text-[#ED7D31] text-2xl p-[1px] bg-[#ed7c3192] rounded-full translate-y-1" />
                </div>
                <p className="text-lg">We prioritize our customers&apos; needs by providing tailored
logistics solutions that enhance efficiency, reduce costs, and
ensure seamless delivery. Your success is our success. We
believe in the power of collaboration—with our clients.
</p>
              </div>
                <div className="flex gap-2">
                <div>
                  <GoDotFill className="text-[#ED7D31] text-2xl p-[1px] bg-[#ed7c3192] rounded-full translate-y-1" />
                </div>
                <p className="text-lg">We are committed to eco-friendly logistics practices that reduce our
carbon footprint, promote green supply chain solutions, and
contribute to a sustainable future. Trust is the foundation of our
business. We uphold the highest standards of honesty, transparency,
and accountability in every shipment, service, and interaction.
</p>
              </div>
             </div>
            </div>
            <div className="w-2/5 max-lg:w-full flex flex-col items-center h-full">
            <Image src="/About/image5.svg" alt="aboutimg" width={10000} height={10000} className="w-full" />
            </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Page;
