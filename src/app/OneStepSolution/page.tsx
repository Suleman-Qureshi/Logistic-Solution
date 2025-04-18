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
        <section className="w-screen h-screen flex max-md:flex-col max-md:items-center overflow-hidden">
          <div className="w-full h-full content-center pl-20 max-lg:pl-10 max-md:pl-4">
            <h1 className="text-[5vw] text-[#002060] font-bold max-md:text-center max-sm:text-[8vw]">
              Your One Stop Solution for Door-to-Door Services
            </h1>
          </div>
          <div className="w-full h-full max-md:w-1/2 max-sm:w-2/3 pt-10">
            <Image
              src="/OSS/lazyturtlelogo.svg"
              alt="OneStepSolution"
              width={10000}
              height={10000}
              className="w-full"
            />
          </div>
        </section>
        <section className="w-screen flex max-md:flex-col-reverse items-center gap-10 max-lg:gap-4">
          <div className="w-full flex flex-col justify-center gap-8 pl-20 max-lg:pl-10 max-md:pl-4">
            <h2 className="text-5xl max-sm:text-3xl font-bold text-[#002060]">
              Your One Stop Solution for Door-to-Door Services in Banigala
            </h2>
            <div className="flex items-center gap-2 border-b border-slate-300">
              <div className="p-2 rounded-full bg-white w-40 content-center border border-[#ED7D31]">
                <Image
                  src="/OSS/icon1.svg"
                  alt="OneStepSolution"
                  width={10000}
                  height={10000}
                  className="w-full"
                />
              </div>
              <p>
                At Logistics Solutions, we bring convenience to your doorstep!
                Whether you need food delivered, groceries stocked, home
                maintenance handled, or your car serviced, we’ve got you
                covered.{" "}
              </p>
            </div>
            <div className="flex items-center gap-2 border-b border-slate-300">
              <div className="p-3 rounded-full bg-white w-28 content-center border border-[#ED7D31]">
                <Image
                  src="/OSS/icon2.svg"
                  alt="OneStepSolution"
                  width={10000}
                  height={10000}
                  className="w-full"
                />
              </div>
              <p>
                Our mission is to make life easier for residents of Banigala by
                providing a wide range of services—big or small—right at your
                fingertips.
              </p>
            </div>
          </div>
          <div className="w-full pr-20 pl-10">
            <Image
              src="/OSS/image2.svg"
              alt="OneStepSolution"
              width={10000}
              height={10000}
              className="w-full"
            />
          </div>
        </section>
        <section className="w-screen min-h-screen relative overflow-hidden flex pr-20 max-lg:pr-10 max-md:pl-4 max-md:pr-4 max-lg:gap-6 py-20 gap-12 max-lg:items-center">
          <div className="w-full max-lg:hidden">
            <Image
              src="/OSS/image3.svg"
              width={500}
              height={500}
              alt="about img"
              className="w-auto"
            />
          </div>
          <div className=" w-full  flex flex-col max-sm:items-center gap-8 max-lg:px-10 max-md:px-4">
            <div className="flex flex-col gap-2 ">
              <h2 className="text-7xl max-md:text-5xl max-sm:text-3xl font-bold text-[#002060]">
                Why Choose Us?
              </h2>
              <p className="text-gray-500 text-lg">
                To deliver exceptional, innovative, and reliable services that
                empower our client and contribute to their success
              </p>
            </div>
            <div className="flex max-sm:flex-col gap-8">
              <div className="flex flex-col gap-2 p-4 text-white justify-center w-80  bg-[#ED7D31] rounded-2xl py-6">
                <Image
                  src="/cardIcon1.svg"
                  width={50}
                  height={50}
                  alt="icon1"
                />
                <h5 className="text-2xl font-medium text-white ml-1">
                  Door-to-Door Convenience:
                </h5>
                <p className="text-lg font-light ml-1 leading-snug">
                  No more hassle! We come to you, saving you time and effort.
                </p>
              </div>
              <div className="flex flex-col gap-2 p-4 text-white justify-center w-80  bg-[#ED7D31] rounded-2xl py-6">
                <Image
                  src="/cardIcon2.svg"
                  width={50}
                  height={50}
                  alt="icon1"
                />
                <h5 className="text-2xl font-medium text-white ml-1">
                  Wide Range of Services:
                </h5>
                <p className="text-lg font-light ml-1 leading-snug">
                  From food and grocery delivery to home repairs, car
                  maintenance, and more, we handle it all.
                </p>
              </div>
            </div>
            <div className="flex max-sm:flex-col gap-8">
              <div className="flex flex-col gap-2 p-4 text-white justify-center w-80  bg-[#ED7D31] rounded-2xl py-6">
                <Image
                  src="/CardIcon3.svg"
                  width={50}
                  height={50}
                  alt="icon1"
                />
                <h5 className="text-2xl font-medium text-white ml-1">
                  Easy Booking:
                </h5>
                <p className="text-lg font-light ml-1 leading-snug">
                  Just a call or WhatsApp or E-mail message away! Quick, simple, and
                  hassle-free.
                </p>
              </div>
              <div className="flex flex-col gap-2 p-4 text-white justify-center w-80  bg-[#ED7D31] rounded-2xl py-6">
                <Image
                  src="/CardIcon4.svg"
                  width={50}
                  height={50}
                  alt="icon1"
                />
                <h5 className="text-2xl font-medium text-white ml-1">
                  Pay After Satisfaction:{" "}
                </h5>
                <p className="text-lg font-light ml-1 leading-snug">
                  We believe in quality service. Pay only after you’re fully
                  satisfied with the job done.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col px-20 max-lg:px-10 max-md:px-4 w-screen gap-8">
          <h2 className="text-4xl text-[#002060] font-bold">
            Our Services Include (but are not limited to)
          </h2>
          <div className='w-full h-72 rounded-3xl bg-[url("/OSS/image4.svg")] bg-no-repeat bg-center bg-cover bg-fixed'></div>
          <div className="flex max-md:flex-col max-md:items-center gap-8 justify-between">
            <div className="flex w-1/3 max-md:w-1/2 max-sm:w-full flex-col p-1 gap-4 rounded-xl border border-slate-300">
              <h5 className="text-xl font-semibold">Food and Beverages</h5>
              <div className="flex flex-col gap-1">
                <div className="flex  gap-4 items-center">
                  <div>
                    <GoDotFill className="" />
                  </div>
                  <p>Grocery stores</p>
                </div>
                <div className="flex gap-4 items-center">
                  <div>
                    <GoDotFill className="" />
                  </div>
                  <p>Fresh produce vendors (fruits, vegetables)</p>
                </div>
                <div className="flex gap-4 items-center">
                  <div>
                    <GoDotFill className="" />
                  </div>
                  <p>Butchers and meat shops</p>
                </div>
                <div className="flex gap-4 items-center">
                  <div>
                    <GoDotFill className="" />
                  </div>
                  <p>Fish and seafood shops</p>
                </div>
                <div className="flex gap-4 items-center">
                  <div>
                    <GoDotFill className="" />
                  </div>
                  <p>Bakeries and confectioneries</p>
                </div>
                <div className="flex gap-4 items-center">
                  <div>
                    <GoDotFill className="" />
                  </div>
                  <p>Dairy and cheese shops</p>
                </div>
                <div className="flex gap-4 items-center">
                  <div>
                    <GoDotFill className="" />
                  </div>
                  <p>Spice and dry food stores</p>
                </div>
                <div className="flex gap-4 items-center">
                  <div>
                    <GoDotFill className="" />
                  </div>
                  <p>Tea and coffee shops
                  </p>
                </div>
                <div className="flex gap-4 items-center">
                  <div>
                    <GoDotFill className="" />
                  </div>
                  <p>Juice bars and smoothie stalls
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-1/3 max-md:w-1/2 max-sm:w-full flex-col p-1 gap-4 rounded-xl border border-slate-300">
              <h5 className="text-xl font-semibold">Agricultural and Rural Services</h5>
              <div className="flex flex-col gap-1">
                <div className="flex gap-4 items-center">
                  <div>
                    <GoDotFill className="" />
                  </div>
                  <p>Seed and fertilizer suppliers
                  </p>
                </div>
                <div className="flex gap-4 items-center">
                  <div>
                    <GoDotFill className="" />
                  </div>
                  <p>Farm equipment and tools</p>
                </div>
                <div className="flex gap-4 items-center">
                  <div>
                    <GoDotFill className="" />
                  </div>
                  <p>Veterinary services and animal care</p>
                </div>
                <div className="flex gap-4 items-center">
                  <div>
                    <GoDotFill className="" />
                  </div>
                  <p>Agricultural consultancy</p>
                </div>
                <div className="flex gap-4 items-center">
                  <div>
                    <GoDotFill className="" />
                  </div>
                  <p>Farmers cooperatives
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-1/3 max-md:w-1/2 max-sm:w-full flex-col p-1 gap-4 rounded-xl border border-slate-300">
              <h5 className="text-xl font-semibold">Emergency and Safety Services
              </h5>
              <div className="flex flex-col gap-1">
                <div className="flex gap-4 items-center">
                  <div>
                    <GoDotFill className="" />
                  </div>
                  <p>First aid and emergency supply stores
                  </p>
                </div>
                <div className="flex gap-4 items-center">
                  <div>
                    <GoDotFill className="" />
                  </div>
                  <p>Fire safety equipment suppliers</p>
                </div>
                <div className="flex gap-4 items-center">
                  <div>
                    <GoDotFill className="" />
                  </div>
                  <p>Emergency plumbing and electricians
                  </p>
                </div>
                <div className="flex gap-4 items-center">
                  <div>
                    <GoDotFill className="" />
                  </div>
                  <p>Disaster recovery services</p>
                </div>
                <div className="flex gap-4 items-center">
                  <div>
                    <GoDotFill className="" />
                  </div>
                  <p>Security guard services
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Page;
