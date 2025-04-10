import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";

function Page() {
  return (
    <>
      <Header />
      <main className="w-screen overflow-x-hidden">
        <section className="w-screen h-screen pt-14 pb-10 px-20 flex justify-center items-center">
          <div className="h-full w-5/12 overflow-hidden">
            <Image
              src="/HLP/image1.svg"
              alt="HLP_image1"
              width={10000000}
              height={10000000}
              className="w-full"
            />
          </div>
          <div className="w-7/12 bg-[#002060] py-16 rounded-tl-3xl rounded-br-3xl flex justify-center items-center text-center text-white text-5xl font-bold">
            HLP Services - Housing, Land, and Property Rights
          </div>
        </section>
        <section className="w-screen min-h-screen flex">
          <div className="h-screen overflow-hidden w-full">
            <Image
              src="/HLP/image2.svg"
              alt="HLP_image2"
              width={10000000}
              height={10000000}
              className="h-full w-auto"
            />
          </div>
          <div className="w-full flex flex-col gap-8 py-10 pr-20">
            <h2 className="text-3xl font-bold text-[#002060]">
              Introducing HLP Services – Your Trusted Partner in Housing, Land,
              and Property Rights Management
            </h2>
            <div className="flex flex-col gap-6">
              <div className="flex gap-2">
                <div className="w-14 h-12 bg-[#ED7D31] rounded-full flex justify-center items-center">
                  <Image
                    src="/HLP/icon1.svg"
                    alt="HLP_image3"
                    width={20}
                    height={20}
                    className=""
                  />
                </div>
                <p className="text-lg w-full">
                  HLP Services provides comprehensive housing, land, and
                  property rights solutions, ensuring clients receive
                  professional assistance for all real estate-related needs.
                </p>
              </div>
              <div className="flex gap-2">
                <div className="w-14 h-12 bg-[#ED7D31] rounded-full flex justify-center items-center">
                  <Image
                    src="/HLP/icon2.svg"
                    alt="HLP_image3"
                    width={20}
                    height={20}
                    className=""
                  />
                </div>
                <p className="text-lg w-full">
                  A subsidiary of Logistics Solutions, HLP Services is a
                  specialized advisory firm dedicated to providing comprehensive
                  technical and legal support in Housing, Land, and Property
                  (HLP) Rights Management and Administration.
                </p>
              </div>
              <div className="flex gap-2">
                <div className="w-14 h-12 bg-[#ED7D31] rounded-full flex justify-center items-center">
                  <Image
                    src="/HLP/icon3.svg"
                    alt="HLP_image3"
                    width={20}
                    height={20}
                    className=""
                  />
                </div>
                <p className="text-lg w-full">
                  We offer expert guidance to individuals, governmental
                  agencies, and non-governmental organizations, ensuring that
                  your HLP-related matters are handled with precision,
                  transparency, and professionalism.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="flex p-20 items-center w-screen min-h-screen overflow-hidden">
          <div className="p-6 w-3/5 flex flex-col gap-8 bg-[#002060] rounded-lg z-10 text-white">
            <h3 className="text-5xl font-bold">Our Mission</h3>
            <div className="flex gap-4 items-start">
              <Image
                src="/HLP/icon4.svg"
                alt="HLPICON4"
                width={40}
                height={55}
                className="translate-y-2"
              />
              <p className="text-lg">
                Our mission is to provide reliable services in housing, land,
                and property rights management to ensure secure and smooth
                transactions for our clients.
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <Image
                src="/HLP/icon5.svg"
                alt="HLPICON5"
                width={40}
                height={55}
                className="translate-y-2"
              />
              <p className="text-lg">
                To empower clients with technical expertise, legal clarity, and
                administrative support in managing their housing, land, and
                property rights, while facilitating seamless interactions with
                relevant authorities and stakeholders.
              </p>
            </div>
          </div>
          <div className="w-3/4 h-full overflow-hidden absolute right-0">
            <Image
              src="/HLP/image3.svg"
              alt="HLPIMAGE3"
              width={10000}
              height={100000}
              className="z-0"
            />
          </div>
        </section>
        <section className="w-screen min-h-screen p-20 flex justify-center items-center">
          <div className="w-1/3 ">
            <Image
              src="/HLP/image4.svg"
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
            <div className="flex flex-col gap-3">
              <div>
                <b className="text-[#ED7D31]">Technical Advice:</b>{" "}
                <p>
                  {" "}
                  Expert guidance on land measurements, ampping, and topographic
                  surveys.
                </p>
              </div>
              <div>
                <b className="text-[#ED7D31]">Legal Support:</b>
                <p>
                  {" "}
                  Assistance in understanding and navigating housing, land, and
                  property laws.
                </p>
              </div>
              <div>
                <b className="text-[#ED7D31]">Dispute Resolution:</b>
                <p>
                  Mediation and advisory services for resolving HLP disputes
                  among parties.
                </p>
              </div>
            </div>
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
          <span className="absolute bg-[#002060] w-2/3 text-white text-5xl font-bold items-center justify-center text-center flex gap-8 top-1/2 -translate-y-1/2 py-12 min-w-[500px] rounded-r-2xl">
            <Image
              src="/HLP/icon6.svg"
              alt="HLPimage4"
              width={80}
              height={80}
              className=""
            />
            <p>What We Do Not Do</p>
          </span>
          <div className="w-full pt-28 px-20 flex gap-8 ">
            <div className="flex gap-2 text-black items-start w-full">
              <div>
                <GoDotFill className="text-[#ED7D31] text-2xl p-[1px] bg-[#ed7c3192] rounded-full" />
              </div>
              <p className="text-lg">
                We do not engage in illegal activities or any services that fall
                outside the scope of property and land management.
              </p>
            </div>
            <div className="flex gap-2 text-black items-start w-full">
              <div className="text-lg flex flex-col gap-2">
                <div className="flex gap-2">
                  <div>
                    <GoDotFill className="text-[#ED7D31] text-2xl p-[1px] bg-[#ed7c3192] rounded-full" />
                  </div>
                  <p>
                    {" "}
                    <strong className="text-[#ED7D31]">
                      We are not a property or estate agency.
                    </strong>{" "}
                    We do not buys, sell, or lease properties
                  </p>
                </div>
                <div className="flex gap-2">
                  <div>
                    <GoDotFill className="text-[#ED7D31] text-2xl p-[1px] bg-[#ed7c3192] rounded-full" />
                  </div>
                  <p>
                    <strong className="text-[#ED7D31]">
                      We are not act as legal representatives.
                    </strong>{" "}
                    Instead, we connect clients with qualified legal
                    professionals.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-screen relative pb-20 flex">
          <div className="w-1/2 h-full flex flex-col gap-8 pl-20">
            <h2 className="text-6xl font-bold text-[#002060]">
              Why Choose HLP Services?
            </h2>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <div>
                  <GoDotFill className="text-[#ED7D31] text-xl p-[1px] bg-[#ed7c3192] rounded-full" />
                </div>
                <p className="text-lg">
                  Experienced professionals in the real estate sector.
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <div>
                  <GoDotFill className="text-[#ED7D31] text-xl p-[1px] bg-[#ed7c3192] rounded-full" />
                </div>
                <p className="text-lg">
                Client-focused approach.
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <div>
                  <GoDotFill className="text-[#ED7D31] text-xl p-[1px] bg-[#ed7c3192] rounded-full" />
                </div>
                <p className="text-lg">
                Commitment to transparency and trust.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 text-lg leading-none">
              <div>
                <strong className="text-[#ED7D31]">Client-Centric Approach:</strong>
                <p>Tailored solutions to 
                meet your specific needs.</p>
              </div>
              <div>
                <strong className="text-[#ED7D31]">Expertise:</strong>
                <p>Tailored solutions to
                meet your specific needs</p>
              </div>
              <div>
                <strong className="text-[#ED7D31]">Transparency:</strong>
                <p>Clear and honest advice to help
                you make informed decisions.</p>
              </div>
              <div>
                <strong className="text-[#ED7D31]">Efficiency:</strong>
                <p>Streamlined processes to save you
                time and effort.</p>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-[547.3px] rounded-l-full flex flex-col justify-center pl-16  bg-[#002060]">
            <Image
              src="/HLP/image5.svg"
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
