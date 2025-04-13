import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";

function Page() {
  return (
    <>
      <Header />
      <main className="w-screen overflow-hidden">
        <section className="w-screen h-screen bg-[#002060] flex items-center text-white">
          <div className="w-3/5 h-full flex flex-col gap-6 justify-center pl-20 pb-10 pr-10 pt-9">
            <h1 className="text-5xl font-bold">
              Your One Stop Solution for Vehicle Rentals and Fleet Management
              Services
            </h1>
            <p className="text-xl font-semibold text-[#ED7D31]">
              At Logistics Solutions, we provide flexible, reliable, and
              hassle-free vehicle rental and fleet management services tailored
              to your needs.{" "}
            </p>
            <div className="flex gap-2">
              <div>
                <Image
                  src="/FM/icon1.svg"
                  alt="FleetManagement"
                  width={1000}
                  height={1000}
                  className="w-12"
                />
              </div>
              <p>
                Whether you need a vehicle for personal use, office operations,
                or any other purpose, we’ve got you covered.
              </p>
            </div>
            <div className="flex gap-2">
              <div>
                <Image
                  src="/FM/icon2.svg"
                  alt="FleetManagement"
                  width={1000}
                  height={1000}
                  className="w-20"
                />
              </div>
              <p>
                With options for daily, monthly, yearly, or long-term rentals,
                and a wide range of fleet management services, we make mobility
                simple and convenient—all accessible with just a call or
                WhatsApp message.
              </p>
            </div>
          </div>
          <div className="w-2/5 h-full content-center">
            <Image
              src="/FM/image1.svg"
              alt="FleetManagement"
              width={1000}
              height={1000}
              className="w-full"
            />
          </div>
        </section>
        <section className="flex items-center w-screen py-20">
          <div className="w-full h-full flex flex-col gap-6 pl-20">
            <h2 className="text-5xl font-bold text-[#002060]">
              Why Choose Us?
            </h2>
            <div className="flex gap-4">
              <div className="flex flex-col gap-2">
                <div>
                  <Image
                    src="/FM/icon3.svg"
                    alt="FleetManagement"
                    width={1000}
                    height={1000}
                    className="w-6"
                  />
                </div>
                <h4 className="text-2xl font-bold mb-2">
                  Flexible rental Plans
                </h4>
                <p>
                  Choose from daily, monthly, yearly, or long-term rentals to
                  suit your needs.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <Image
                    src="/FM/icon4.svg"
                    alt="FleetManagement"
                    width={1000}
                    height={1000}
                    className="w-8"
                  />
                </div>
                <h4 className="text-2xl font-bold mb-2">
                  Wide Range of Vehicles
                </h4>
                <p>
                  From sedans and SUVs to vans and trucks, we have the perfect
                  vehicle for every purpose.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col gap-2">
                <div>
                  <Image
                    src="/FM/icon5.svg"
                    alt="FleetManagement"
                    width={1000}
                    height={1000}
                    className="w-6"
                  />
                </div>
                <h4 className="text-2xl font-bold mb-2">
                  Door-to-Door Convenience
                </h4>
                <p>
                  We deliver vehicles to your location, saving you time and
                  effort.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <Image
                    src="/FM/icon6.svg"
                    alt="FleetManagement"
                    width={1000}
                    height={1000}
                    className="w-8"
                  />
                </div>
                <h4 className="text-2xl font-bold mb-2">
                  Pay After Satisfaction
                </h4>
                <p>
                  We believe in quality service. Pay only after you’re fully
                  satisfied with the vehicle and service.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-full content-center px-20">
            <Image
              src="/FM/image2.svg"
              alt="FleetManagement"
              width={1000}
              height={1000}
              className="w-full"
            />
          </div>
        </section>
        <section className="w-screen px-20 py-8 flex flex-col gap-2">
          <h2 className="text-5xl font-bold text-[#002060]">
            Our Vehicle Rental Services Include
          </h2>
          <div className="flex w-full items-center gap-10">
            <div className="w-2/5 h-full flex flex-col gap-8 justify-center">
              <div className="flex flex-col gap-4">
                <h5 className="text-2xl font-semibold text-[#ED7D31]">
                  For Personal Use
                </h5>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2 ">
                    <div>
                      <GoDotFill className="translate-y-1" />
                    </div>
                    <p>
                      Daily rentals for errands, trips, or special occasions
                    </p>
                  </div>
                  <div className="flex gap-2 ">
                    <div>
                      <GoDotFill className="translate-y-1" />
                    </div>
                    <p>
                      Monthly rentals for extended travel or temporary needs
                    </p>
                  </div>
                  <div className="flex gap-2 ">
                    <div>
                      <GoDotFill className="translate-y-1" />
                    </div>
                    <p>Long-term rentals for personal convenience</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h5 className="text-2xl font-semibold text-[#ED7D31]">
                  For Office Use
                </h5>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2 ">
                    <div>
                      <GoDotFill className="translate-y-1" />
                    </div>
                    <p>
                      Corporate vehicle rentals for employees and executives
                    </p>
                  </div>
                  <div className="flex gap-2 ">
                    <div>
                      <GoDotFill className="translate-y-1" />
                    </div>
                    <p>Fleet solutions for logistics and transportation</p>
                  </div>
                  <div className="flex gap-2 ">
                    <div>
                      <GoDotFill className="translate-y-1" />
                    </div>
                    <p>Customized rental plans for business needs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-3/5 h-full flex flex-col gap-4">
            <div className="w-full flex flex-col gap-2">
                <div className="w-full p-4 bg-[#ED7D31] text-white text-3xl font-semibold rounded-bl-3xl rounded-tr-3xl">For Other Purposes</div>
            <div className="w-full p-6 border border-[#ED7D31] rounded-b-lg flex flex-col gap-2">
            <div className="flex gap-2 ">
                    <div>
                      <GoDotFill className="translate-y-1" />
                    </div>
                    <p>Event transportation (weddings, parties, tours)</p>
                  </div>
            <div className="flex gap-2 ">
                    <div>
                      <GoDotFill className="translate-y-1" />
                    </div>
                    <p>Logistics and delivery services</p>
                  </div>
            <div className="flex gap-2 ">
                    <div>
                      <GoDotFill className="translate-y-1" />
                    </div>
                    <p>Specialized vehicles for construction, tourism, and more</p>
                  </div>
            </div>
            </div>
            <div className="w-full flex flex-col gap-2">
                <div className="w-full p-4 bg-[#002060] text-white text-3xl font-semibold rounded-bl-3xl rounded-tr-3xl">For Other Purposes</div>
            <div className="w-full p-6 border border-[#002060] rounded-b-lg flex flex-col gap-2">
            <div className="flex gap-2 ">
                    <div>
                      <GoDotFill className="translate-y-1" />
                    </div>
                    <p>Routine maintenance and servicing</p>
                  </div>
            <div className="flex gap-2 ">
                    <div>
                      <GoDotFill className="translate-y-1" />
                    </div>
                    <p>GPS tracking and route optimization</p>
                  </div>
            <div className="flex gap-2 ">
                    <div>
                      <GoDotFill className="translate-y-1" />
                    </div>
                    <p>Driver management and training
                    </p>
                  </div>
            <div className="flex gap-2 ">
                    <div>
                      <GoDotFill className="translate-y-1" />
                    </div>
                    <p>Fuel management and cost optimization
                    </p>
                  </div>
            <div className="flex gap-2 ">
                    <div>
                      <GoDotFill className="translate-y-1" />
                    </div>
                    <p>Accident management and insurance support
                    </p>
                  </div>
            </div>
            </div>
            </div>
          </div>
        </section>
        <section className="w-screen relative flex flex-col gap-8 justify-center pt-20 overflow-hidden">
            <span className="w-1/2 pl-10 pr-20 content-center absolute right-0">
            <Image src='/FM/image3.svg' alt='FleetManagement' width={1000} height={1000} className='w-full' />
            </span>
            <div className="w-full  px-20">
            <div className="w-1/2 flex flex-col gap-8 justify-center">
                <h2 className="text-5xl font-bold text-[#002060]">How It Works</h2>
                <div className="flex gap-4">
                    <div>
                      <div className="w-12 h-12 rounded-lg p-2 bg-[#ED7D31] translate-y-1 content-center">
                        <Image
                          src="/FM/icon7.svg"
                          alt="FleetManagement"
                          width={1000}
                          height={1000}
                          className="w-full "
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h6 className="text-2xl font-semibold">Contact Us</h6>
                        <p className="text-lg">Call or WhtasApp is with your rental or service request.</p>
                    </div>
                </div>
            </div>
            </div>
            <div className="w-full bg-[#002060] pb-20 px-20 text-white">
            <div className="w-1/2 flex flex-col gap-8">
                <div className="flex gap-4">
                    <div>
                      <div className="w-12 h-12 rounded-lg p-2 bg-[#ED7D31] translate-y-1 content-center">
                        <Image
                          src="/FM/icon8.svg"
                          alt="FleetManagement"
                          width={1000}
                          height={1000}
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h6 className="text-2xl font-semibold">We Deliver</h6>
                        <p className="text-lg">We bring the vehicle to your doorstep,
                        ready for use.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div>
                      <div className="w-12 h-12 rounded-lg p-2 bg-[#ED7D31] translate-y-1 content-center">
                        <Image
                          src="/FM/icon9.svg"
                          alt="FleetManagement"
                          width={1000}
                          height={1000}
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h6 className="text-2xl font-semibold">Pay on Delivery
                        </h6>
                        <p className="text-lg">Only pay once you’re 100% satisfied
                        with the vehicle and service.</p>
                    </div>
                </div>
            </div>
            </div>
        </section>
        <section className='w-screen h-screen flex flex-col justify-center items-center text-center gap-8 bg-[url("/FM/image4.svg")] bg-no-repeat bg-center bg-cover bg-fixed'>
                        <h2 className='text-7xl font-bold text-[#ED7D31]'>Our Promise</h2>
                        <p className='text-2xl font-semibold text-white'>We’re committed to providing reliable, efficient, and high-quality <br />
vehicle rental and fleet management services tailored to your needs. <br />
Your satisfaction is our priority!</p>
                        </section>
      </main>
      <Footer />
    </>
  );
}

export default Page;
