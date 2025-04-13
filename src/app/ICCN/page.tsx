import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import Footer from "../components/Footer";

function Page() {
  return (
    <>
      <Header />
      <main className="w-screen min-h-screen overflow-hidden">
        <section className="w-screen h-screen py-14 pl-0 flex items-center">
          <Image
            src="/ICCN/image1.svg"
            alt="ICCN Image"
            width={1000000}
            height={1000000}
            className=" h-full w-auto pr-20"
          />
        </section>
        <section className="w-screen min-h-screen flex gap-12 items-center">
          <div className="w-full flex flex-col gap-8 py-20 pl-20 ">
            <h2 className="text-3xl font-bold text-[#002060]">
              Introducing ICCN Your Gateway to Expert Humanitarian, Development,
              and Peace Consultancy
            </h2>
            <div className="flex gap-2 text-black items-start">
              <div>
                <GoDotFill className="text-[#ED7D31] text-2xl p-[1px] bg-[#ed7c3192] rounded-full" />
              </div>
              <p className="text-lg">
                At ICCN&quot; we connect organizations and individuals with
                professional consultants who specialize in humanitarian&quot;
                development&quot; and peace-related fields&#34; We are dedicated to
                driving impactful change in humanitarian assistance&quot; sustainable
                development&quot; and peacebuilding initiatives worldwide&#34;
              </p>
            </div>
            <div className="flex gap-2 text-black items-start">
              <div>
                <GoDotFill className="text-[#ED7D31] text-2xl p-[1px] bg-[#ed7c3192] rounded-full" />
              </div>
              <p className="text-lg">
                With a team of experienced professionals, we provide expert
                consultancy services that empower organizations, governments,
                and communities to navigate complex challenges and create
                lasting solutions. Our consultancy services help shape inclusive
                and sustainable development programs{" "}
              </p>
            </div>
          </div>
          <div className="w-full h-screen overflow-hidden content-center">
            <Image
              src="/ICCN/image2.svg"
              alt="ICCNimage2"
              width={1000000}
              height={100000}
              className="w-full -translate-y-1/4"
            />
          </div>
        </section>
        <section className="flex p-20 items-center w-screen min-h-screen overflow-hidden">
          <div className="p-6 w-3/5 flex flex-col gap-8 bg-[#002060] rounded-lg z-10 text-white">
            <h3 className="text-5xl font-bold">Who We Are</h3>
            <div className="flex gap-4 items-start">
              <Image
                src="/ICCN/icon1.svg"
                alt="ICCNimage4"
                width={30}
                height={35}
                className="translate-y-2"
              />
              <p className="text-lg">
                ICCN is a network designed to bridge the gap between
                development, humanitarian organizations, and expert consultants.
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <Image
                src="/ICCN/icon2.svg"
                alt="ICCNimage4"
                width={30}
                height={35}
                className="translate-y-2"
              />
              <p className="text-lg">
                We are a dedicated team of experts committed to advancing
                humanitarian aid, sustainable development, and peacebuilding
                efforts worldwide. With a deep understanding of global
                challenges, we provide strategic consultancy services that
                empower organizations, governments, and communities to create
                meaningful and lasting impact.
              </p>
            </div>
          </div>
          <div className="w-3/4 h-full overflow-hidden absolute right-0">
            <Image
              src="/ICCN/image3.svg"
              alt="ICCNIMAGE3"
              width={10000}
              height={100000}
              className="z-0"
            />
          </div>
        </section>
        <section className="w-screen min-h-screen relative">
          <div className="w-full h-68 overflow-hidden">
            <Image
              src="/ICCN/image4.svg"
              alt="ICCNimage4"
              width={10000}
              height={100000}
              className="w-full"
            />
          </div>
          <span className="absolute bg-[#002060] w-2/3 text-white text-8xl font-bold items-center justify-center text-center flex gap-8 top-44 py-12 min-w-[500px] rounded-r-2xl">
            <Image
              src="/ICCN/icon3.svg"
              alt="ICCNimage4"
              width={80}
              height={80}
              className=""
            />
            <p>Our Servies</p>
          </span>
          <div className="w-full pt-28 px-20 flex gap-8 ">
            <div className="flex gap-2 text-black items-start w-full">
              <div>
                <GoDotFill className="text-[#ED7D31] text-2xl p-[1px] bg-[#ed7c3192] rounded-full" />
              </div>
              <p className="text-lg">
                ICCN provides expert consultancy in sectors such as humanitarian
                aid, conflict resolution, international development, and policy
                advocacy.{" "}
              </p>
            </div>
            <div className="flex gap-2 text-black items-start w-full">
              <div>
                <GoDotFill className="text-[#ED7D31] text-2xl p-[1px] bg-[#ed7c3192] rounded-full" />
              </div>
              <p className="text-lg">
                We provide specialized consultancy services designed to support
                governments, NGOs, international organizations, and private
                sector partners in delivering impactful humanitarian,
                development, and peacebuilding initiatives.
              </p>
            </div>
          </div>
        </section>
        <section className="w-screen min-h-screen flex gap-8">
          <div className="w-2/3 flex flex-col gap-12 p-20">
            <h2 className="text-slate-900 text-5xl font-bold">How Its Works</h2>
            <div className="flex gap-4">
              <GoDotFill className="text-[#ED7D31] text-2xl p-[1px] bg-[#ed7c3192] rounded-full translate-y-2" />
              <div className="flex flex-col gap-2">
                <h5 className="text-3xl font-semibold">Contact Us</h5>
                <p className="text-lg">
                  Reach out to us with consultancy needs.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <GoDotFill className="text-[#ED7D31] text-2xl p-[1px] bg-[#ed7c3192] rounded-full translate-y-2" />
              <div className="flex flex-col gap-2">
                <h5 className="text-3xl font-semibold">Consultation</h5>
                <p className="text-lg">
                  We connect you with suitable consultants.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <GoDotFill className="text-[#ED7D31] text-2xl p-[1px] bg-[#ed7c3192] rounded-full translate-y-2" />
              <div className="flex flex-col gap-2">
                <h5 className="text-3xl font-semibold">Collaboration</h5>
                <p className="text-lg">
                  Work with the consultant on your project.
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/3 h-screen bg-[#002060] p-[1px] content-center relative">
            <span className="w-20 h-16 bg-[#ED7D31] absolute top-1/2 -translate-y-1/2 rounded-md -left-6"></span>
            <Image
              src="/ICCN/image5.svg"
              alt="ICCNimage5"
              width={10000}
              height={100000}
              className="h-2/3 w-auto"
            />
          </div>
        </section>
        <section className="w-screen min-h-screen flex">
          <div className="w-5/12 h-screen">
            <Image
              src="/ICCN/image6.svg"
              alt="ICCNimage6"
              width={10000}
              height={100000}
              className="w-full"
            />
          </div>
          <div className="w-7/12 bg-[#002060] text-white p-20 flex flex-col gap-12">
            <h2 className="text-5xl font-bold">Why Choose ICCN?</h2>
            <div className="flex flex-col gap-8">
              <div className="flex gap-4 items-center">
                <div className="w-14 h-14 flex justify-center items-center bg-[#ED7D31] rounded-lg">
                  <Image
                    src="/ICCN/icon4.svg"
                    alt="ICCNimage7"
                    width={30}
                    height={30}
                    className=""
                  />
                </div>
                <p className="text-xl">
                  Access to highly qualified professionals.
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-14 h-14 flex justify-center items-center bg-[#ED7D31] rounded-lg">
                  <Image
                    src="/ICCN/icon5.svg"
                    alt="ICCNimage7"
                    width={30}
                    height={30}
                    className=""
                  />
                </div>
                <p className="text-xl">Diverse range of expertise.</p>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-14 h-14 flex justify-center items-center bg-[#ED7D31] rounded-lg">
                  <Image
                    src="/ICCN/icon6.svg"
                    alt="ICCNimage7"
                    width={30}
                    height={30}
                    className=""
                  />
                </div>
                <p className="text-xl">
                  Tailored consultancy services for every project.
                </p>
              </div>
            </div>
            <p className="text-2xl">
              We welcome organizations and individual consultants to the ICCN
              network for collaboration and project opportunities
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Page;
