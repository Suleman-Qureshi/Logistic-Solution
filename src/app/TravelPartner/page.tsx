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
        <section className="w-screen h-screen flex gap-10 overflow-hidden max-md:bg-[url('https://img.freepik.com/free-photo/medium-shot-flight-attendants-with-globe_23-2150197195.jpg?ga=GA1.1.56082603.1736629362&semt=ais_hybrid&w=740')] bg-no-repeat bg-center bg-cover">
          <div className="w-1/3 h-full content-center pl-20 max-md:pl-4 max-md:backdrop-blur-xs max-md:bg-white/30 max-md:w-full max-md:flex max-md:justify-center max-md:items-center max-md:text-center  ">
            <h1 className="text-[#002060] font-bold text-[8vw] max-lg:text-[9vw] max-md:text-[15vw] leading-28 max-sm:leading-20">
              Travel <br /> Partner
            </h1>
          </div>
          <div className="w-2/3 h-full max-md:hidden">
            <Image
              src="/TP/image1.svg"
              alt="Travel Partner"
              width={1920}
              height={1080}
              className="w-full"
            />
          </div>
        </section>
        <section className="w-screen h-auto pb-20 relative max-md:bg-[url('/TP/image2.svg')] bg-center bg-cover bg-no-repeat bg-fixed">
          <div className="w-4/5 max-md:w-full h-full max-md:hidden">
            <Image
              src="/TP/image2.svg"
              alt="ICanHearYou"
              width={1000}
              height={1000}
              className="w-full"
            />
          </div>
          <div className="w-[40vw] max-lg:w-2/3 p-4 rounded-2xl bg-[#002060ab] text-white flex flex-col gap-6 absolute bottom-20 left-[50vw] max-lg:left-[30vw] max-md:w-full max-md:left-0 max-md: top-0 max-md:hidden">
            <h2 className="text-3xl font-semibold">
              Your Trusted Partner for Hassle-Free Tourism Services
            </h2>
            <div className="flex gap-2">
              <div>
                <div className="w-20 h-20 bg-[#ED7D31] p-4 rounded-tl-xl rounded-br-xl">
                  <Image
                    src="/TP/icon1.svg"
                    alt="ICanHearYou"
                    width={100}
                    height={100}
                    className=""
                  />
                </div>
              </div>
              <p className="text-lg">
                At Logistics Solutions, we make travel dreams come true! Whether
                you’re a domestic traveler exploring your own country or an
                international tourist discovering new horizons, we provide
                end-to-end tourism services to ensure your trip is memorable,
                enjoyable, and hassle-free.
              </p>
            </div>
            <div className="flex gap-2">
              <div>
                <div className="w-20 h-20 bg-[#ED7D31] p-4 rounded-tl-xl rounded-br-xl">
                  <Image
                    src="/TP/icon2.svg"
                    alt="ICanHearYou"
                    width={100}
                    height={100}
                    className=""
                  />
                </div>
              </div>
              <p className="text-lg">
                From pre-trip consultation to bookings, transportation,
                sightseeing, and beyond, we’ve got you covered—all accessible
                with just a call or WhatsApp or E-mail message.
              </p>
            </div>
          </div>
          <div className="w-full  p-4 rounded-2xl bg-[#002060ab] text-white flex-col gap-6 hidden max-md:flex">
            <h2 className="text-3xl font-semibold">
              Your Trusted Partner for Hassle-Free Tourism Services
            </h2>
            <div className="flex gap-2">
              <div>
                <div className="w-20 h-20 bg-[#ED7D31] p-4 rounded-tl-xl rounded-br-xl">
                  <Image
                    src="/TP/icon1.svg"
                    alt="ICanHearYou"
                    width={100}
                    height={100}
                    className=""
                  />
                </div>
              </div>
              <p className="text-lg">
                At Logistics Solutions, we make travel dreams come true! Whether
                you’re a domestic traveler exploring your own country or an
                international tourist discovering new horizons, we provide
                end-to-end tourism services to ensure your trip is memorable,
                enjoyable, and hassle-free.
              </p>
            </div>
            <div className="flex gap-2">
              <div>
                <div className="w-20 h-20 bg-[#ED7D31] p-4 rounded-tl-xl rounded-br-xl">
                  <Image
                    src="/TP/icon2.svg"
                    alt="ICanHearYou"
                    width={100}
                    height={100}
                    className=""
                  />
                </div>
              </div>
              <p className="text-lg">
                From pre-trip consultation to bookings, transportation,
                sightseeing, and beyond, we’ve got you covered—all accessible
                with just a call or WhatsApp or E-mail message.
              </p>
            </div>
          </div>
        </section>
        <section className="flex p-20 max-lg:p-10 max-md:p-4 items-center w-screen min-h-screen overflow-hidden">
          <div className="p-6 w-3/5 max-md:w-full flex flex-col gap-8 bg-[#002060] rounded-lg z-10 text-white">
            <h3 className="text-5xl font-bold">Why Choose Us?</h3>
            <div className="flex flex-col gap-4">
              <div className="flex gap-2">
                <div>
                  <GoDotFill className="text-[#ED7D31] text-2xl p-[1px] bg-[#ed7c3192] rounded-full" />
                </div>
                <p>
                  <b className="text-[#ED7D31]">
                    Comprehensive Tourism Solutions:
                  </b>{" "}
                  We handle every aspect of your trip, from start to finish.
                </p>
              </div>
              <div className="flex gap-2">
                <div>
                  <GoDotFill className="text-[#ED7D31] text-2xl p-[1px] bg-[#ed7c3192] rounded-full" />
                </div>
                <p>
                  <b className="text-[#ED7D31]">Tailored Experiences:</b>{" "}
                  Customized itineraries to suit your preferences and budget.
                </p>
              </div>
              <div className="flex gap-2">
                <div>
                  <GoDotFill className="text-[#ED7D31] text-2xl p-[1px] bg-[#ed7c3192] rounded-full" />
                </div>
                <p>
                  <b className="text-[#ED7D31]">Hassle-Free Booking: </b>Just a
                  call or WhatsApp or E-mail message away!
                </p>
              </div>
              <div className="flex gap-2">
                <div>
                  <GoDotFill className="text-[#ED7D31] text-2xl p-[1px] bg-[#ed7c3192] rounded-full" />
                </div>
                <p>
                  <b className="text-[#ED7D31]">Value for Money: </b>We ensure
                  quality services at competitive prices.
                </p>
              </div>
              <div className="flex gap-2">
                <div>
                  <GoDotFill className="text-[#ED7D31] text-2xl p-[1px] bg-[#ed7c3192] rounded-full" />
                </div>
                <p>
                  <b className="text-[#ED7D31]">Safety and Comfort: </b> Your
                  health, safety, and mental well-being are our top priorities.
                </p>
              </div>
            </div>
          </div>
          <div className="w-3/4 h-full overflow-hidden absolute right-0 max-md:hidden">
            <Image
              src="/TP/image3.svg"
              alt="ICCNIMAGE3"
              width={10000}
              height={100000}
              className="z-0"
            />
          </div>
        </section>
        <section className="w-screen min-h-screen flex max-md:flex-col max-lg:gap-6 gap-12 p-20 max-lg:p-10 max-md:p-4 max-lg:pl-0 max-md:pl-0 pl-0 overflow-hidden">
          <div className="w-2/3 max-md:w-full h-full relative content-center">
            <span className="absolute bg-[#002060ae] text-white text-8xl font-bold -right-20 top-1/2 -translate-y-1/2 text-center p-4 py-8 leading-24 max-md:hidden">
              Our <br /> Mission
            </span>
            <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-[#002060ae] text-white text-8xl font-bold justify-center items-center text-center p-4 py-8 leading-24 hidden max-md:flex">
              Our <br /> Mission
            </span>
            <Image
              src="/TP/image4.svg"
              alt="ICanHearYou"
              width={100000}
              height={100000}
              className="w-full"
            />
          </div>
          <div className="flex flex-col gap-8 justify-center h-full w-1/3 max-md:w-full content-center pl-10">
            <div className="flex gap-2">
              <div>
                <div className="w-12 h-12 rounded-full bg-[#ED7D31] p-3">
                  <Image
                    src="/hear/icon3.svg"
                    alt="ICanHearYou"
                    width={100}
                    height={100}
                    className=""
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h5 className="text-2xl font-semibold text-[#002060]">
                  Pre-Trip Consultation and Planning{" "}
                </h5>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-4">
                    <div>
                      <GoDotFill className="text-[#ED7D31] text-base p-[1px] bg-[#ed7c3192] rounded-full translate-y-1" />
                    </div>
                    <p> Personalized itinerary planning</p>
                  </div>
                  <div className="flex gap-4">
                    <div>
                      <GoDotFill className="text-[#ED7D31] text-base p-[1px] bg-[#ed7c3192] rounded-full translate-y-1" />
                    </div>
                    <p>Destination recommendations and travel tips</p>
                  </div>
                  <div className="flex gap-4">
                    <div>
                      <GoDotFill className="text-[#ED7D31] text-base p-[1px] bg-[#ed7c3192] rounded-full translate-y-1" />
                    </div>
                    <p>Budget-friendly travel options</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <div>
                <div className="w-12 h-12 rounded-full bg-[#ED7D31] p-3">
                  <Image
                    src="/TP/icon4.svg"
                    alt="ICanHearYou"
                    width={100}
                    height={100}
                    className=""
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h5 className="text-2xl font-semibold text-[#002060]">
                  Budget and Comfort
                </h5>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-4">
                    <div>
                      <GoDotFill className="text-[#ED7D31] text-base p-[1px] bg-[#ed7c3192] rounded-full translate-y-1" />
                    </div>
                    <p>Respect for your budget with no hidden costs</p>
                  </div>
                  <div className="flex gap-4">
                    <div>
                      <GoDotFill className="text-[#ED7D31] text-base p-[1px] bg-[#ed7c3192] rounded-full translate-y-1" />
                    </div>
                    <p>Comfortable and stress-free travel arrangementss</p>
                  </div>
                  <div className="flex gap-4">
                    <div>
                      <GoDotFill className="text-[#ED7D31] text-base p-[1px] bg-[#ed7c3192] rounded-full translate-y-1" />
                    </div>
                    <p>24/7 customer support throughout your trip</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-screen min-h-screen p-20 max-lg:p-10 max-md:p-4 flex justify-center items-center">
          <div className="w-1/2 max-md:hidden">
            <Image
              src="/TP/image5.svg"
              alt="HLPIMAGE4"
              width={10000000}
              height={10000000}
              className="h-full"
            />
          </div>
          <div className="w-2/3 max-md:w-full max-md:-translate-x-0 h-full flex flex-col justify-center gap-8 shadow-2xl bg-white p-8 -translate-x-8">
            <h2 className="text-4xl font-bold text-[#002060]">How It Works</h2>
            <div className="flex flex-col gap-1">
              <p className="text-lg">
                <b className="text-[#ED7d31]">Contact Us:</b> Call or WhatsApp or E-mail
                us with your travel plans.
              </p>
              <p className="text-lg">
                <b className="text-[#ED7d31]">We Plan and Book:</b> Our team
                creates a customized itinerary and handles all bookings.
              </p>
              <p className="text-lg">
                <b className="text-[#ED7d31]">Enjoy Your Trip:</b> We ensure a
                seamless, enjoyable, and memorable experience.
              </p>
            </div>
            <h2 className="text-4xl font-bold text-[#002060]">How It Works</h2>
            <div className="flex gap-2">
              <div>
                <GoDotFill className="text-[#ED7D31] text-lg  p-[1px] bg-[#ed7c3192] rounded-full translate-y-1" />
              </div>
              <p className="text-lg">
                We’re committed to providing exceptional tourism services that
                make your trip unforgettable. From the moment you plan your
                visit until you return home, we’re here to ensure your journey
                is comfortable, safe, and within your budget.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Page;
