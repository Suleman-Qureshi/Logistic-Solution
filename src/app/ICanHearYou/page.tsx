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
        <section className="w-screen h-screen flex">
          <div className="w-1/2 h-full content-center pl-20 max-lg:pl-10 max-md:pl-4 max-sm:w-full">
            <h1 className="text-[10vw] max-lg:text-[7vw] max-md:text-[8vw] max-sm:text-[20vw] max-sm:text-center font-bold text-[#002060]">
              I Can <br className="max-sm:hidden block" /> Hear You
            </h1>
          </div>
          <div className="w-1/2 h-full max-sm:hidden">
            <Image
              src="/hear/image1.svg"
              alt="ICanHearYou"
              width={1000}
              height={1000}
              className="h-full w-auto"
            />
          </div>
        </section>
        <section className="w-screen pb-20 flex max-lg:flex-col relative overflow-auto max-lg:px-10 max-md:px-4">
          <div className="w-full h-full">
            <Image
              src="/hear/image2.svg"
              alt="ICanHearYou"
              width={1000}
              height={1000}
              className="h-full max-lg:w-full max-lg:hidden"
            />
          </div>
          <div className="w-full max-md:left-0 p-4 rounded-2xl bg-[#002060] text-white flex flex-col gap-6 -translate-x-20 max-lg:-translate-x-0">
            <h2 className="text-3xl font-semibold">
              Introducing I Can Hear You – A Subsidiary of Logistics Solutions
            </h2>
            <div className="flex max-sm:flex-col max-sm:items-center max-sm:text-center gap-2">
              <div>
                <div className="w-20 h-20 bg-[#ED7D31] p-4 rounded-tl-xl rounded-br-xl">
                  <Image
                    src="/hear/icon1.svg"
                    alt="ICanHearYou"
                    width={100}
                    height={100}
                    className=""
                  />
                </div>
              </div>
              <p className="text-lg">
                Dedicated to supporting hearing-impaired children and their
                families by connecting them with the best professionals
              </p>
            </div>
            <div className="flex max-sm:flex-col max-sm:items-center max-sm:text-center gap-2">
              <div>
                <div className="w-20 h-20 bg-[#ED7D31] p-4 rounded-tl-xl rounded-br-xl">
                  <Image
                    src="/hear/icon2.svg"
                    alt="ICanHearYou"
                    width={100}
                    height={100}
                    className=""
                  />
                </div>
              </div>
              <p className="text-lg">
                At I Can Hear You, we are dedicated to empowering
                hearing-impaired children and their families by providing expert
                support, resources, and guidance. Through our referral system,
                we connect clients with audiologists, speech therapists, medical
                professionals, and other experts to ensure your loved ones
                receive the best care possible. Our mission is to foster
                acceptance, understanding, and empowerment while making expert
                services accessible and convenient.
              </p>
            </div>
          </div>
        </section>
        <section className="w-screen min-h-screen flex max-lg:flex-col gap-12 p-20 max-lg:p-10 max-md:px-4 max-lg:pl-0 max-sm:pl-0 pl-0 overflow-hidden">
          <div className="w-2/3 max-md:w-full h-full relative content-center">
            <span className="absolute bg-[#002060ae] text-white text-8xl max-sm:text-6xl font-bold -right-20 max-md:right-1/2 max-md:translate-x-1/2 top-1/2 -translate-y-1/2 text-center p-4 py-8 leading-24 max-sm:leading-16">
              Our <br /> Mission
            </span>
            <Image
              src="https://img.freepik.com/free-photo/hearing-aids-case-flat-lay_23-2149705944.jpg?ga=GA1.1.56082603.1736629362&semt=ais_hybrid&w=740"
              alt="ICanHearYou"
              width={100000}
              height={100000}
              className="w-full"
            />
          </div>
          <div className="flex flex-col gap-8 justify-center h-full w-1/3 max-lg:w-full content-center pl-16 max-lg:pl-10 max-sm:px-4 max-sm:pl-4">
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
              <p className="text-lg">
                To empower hearing-impaired children by bridging the gap between
                families and expert care providers.
              </p>
            </div>
            <div className="flex gap-2">
              <div>
                <div className="w-12 h-12 rounded-full bg-[#ED7D31] p-3">
                  <Image
                    src="/hear/icon4.svg"
                    alt="ICanHearYou"
                    width={100}
                    height={100}
                    className=""
                  />
                </div>
              </div>
              <p className="text-lg">
                To create a world where every hearing-impaired child is heard,
                supported, and empowered to thrive. We aim to bridge the gap
                between families and expert care providers, ensuring fast
                recovery and long-term success.
              </p>
            </div>
          </div>
        </section>
        <section className="w-screen min-h-screen flex items-center overflow-hidden">
          <div className="w-1/2 h-screen relative max-sm:hidden">
            <span className="absolute -z-10 bg-[#ED7D31] h-full w-1/2"></span>
            <div className="w-full h-full z-10">
              <Image
                src="/hear/image4.svg"
                alt="ICanHearYou"
                width={1000}
                height={1000}
                className="w-full z-10"
              />
            </div>
          </div>
          <div className="w-1/2 flex flex-col gap-12 px-20 max-lg:px-10 max-md:px-4 max-sm:w-full">
            <h3 className="text-5xl font-bold text-[#002060]">How It Works</h3>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <div>
                  <GoDotFill className="text-[#ED7D31] text-2xl p-[1px] bg-[#ed7c3192] rounded-full" />
                </div>
                <p>
                  {" "}
                  <strong className="text-[#ED7D31]">Contact Us:</strong> <br />
                  Reach out to us via phone, WhatsApp, or email with your
                  request.
                </p>
              </div>
              <div className="flex gap-2">
                <div>
                  <GoDotFill className="text-[#ED7D31] text-2xl p-[1px] bg-[#ed7c3192] rounded-full" />
                </div>
                <p>
                  {" "}
                  <strong className="text-[#ED7D31]">
                    Visit for Evaluation:
                  </strong>{" "}
                  <br />
                  Our team will evaluate your needs and provide tailored
                  recommendations
                </p>
              </div>
              <div className="flex gap-2">
                <div>
                  <GoDotFill className="text-[#ED7D31] text-2xl p-[1px] bg-[#ed7c3192] rounded-full" />
                </div>
                <p>
                  {" "}
                  <strong className="text-[#ED7D31]">Referral:</strong> <br />
                  We connect you with the nearest and most suitable experts in
                  your city.
                </p>
              </div>
              <div className="flex gap-2">
                <div>
                  <GoDotFill className="text-[#ED7D31] text-2xl p-[1px] bg-[#ed7c3192] rounded-full" />
                </div>
                <p>
                  {" "}
                  <strong className="text-[#ED7D31]">Support:</strong> <br />
                  We guide you through the process, ensuring a seamless
                  experience.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-screen min-h-screen flex items-center">
          <div className="w-1/3 h-screen max-md:hidden relative content-center">
            <span className="w-1/2 h-full absolute bg-[#002060] -z-10"></span>
            <div className="w-full h-full py-8 pl-20 flex items-center">
              <Image
                src="/hear/image5.svg"
                alt="ICanHearYou"
                width={1000}
                height={1000}
                className="w-full"
              />
            </div>
          </div>
          <div className="w-2/3 max-md:w-full flex flex-col p-20 max-lg:p-10 max-md:px-4 gap-8">
            <h2 className="text-5xl font-bold text-[#002060]">
              Our Referral Network
            </h2>
            <div className="flex gap-2 items-center">
              <div className="p-3 bg-[#ED7D31] rounded-full w-14 h-14">
                <Image
                  src="/hear/icon5.svg"
                  alt="ICanHearYou"
                  width={100}
                  height={100}
                  className=""
                />
              </div>
              <p className="text-lg font-medium">
                Audiologists, Speech Therapists, Medical Professionals,
                Counselors.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <div>
                  <GoDotFill className="text-[#ED7D31] text-2xl p-[1px] bg-[#ed7c3192] rounded-full" />
                </div>
                <p>
                  {" "}
                  <strong className="text-[#ED7D31]">Audiologists:</strong>{" "}
                  <br />
                  Experts in hearing assessment and rehabilitation.
                </p>
              </div>
              <div className="flex gap-2">
                <div>
                  <GoDotFill className="text-[#ED7D31] text-2xl p-[1px] bg-[#ed7c3192] rounded-full" />
                </div>
                <p>
                  {" "}
                  <strong className="text-[#ED7D31]">
                    Speech Therapists:
                  </strong>{" "}
                  <br />
                  Specialists in communication training and speech development.
                </p>
              </div>
              <div className="flex gap-2">
                <div>
                  <GoDotFill className="text-[#ED7D31] text-2xl p-[1px] bg-[#ed7c3192] rounded-full" />
                </div>
                <p>
                  {" "}
                  <strong className="text-[#ED7D31]">
                    Medical Professionals:
                  </strong>{" "}
                  <br />
                  Doctors and specialists in hearing-related health issues.
                </p>
              </div>
              <div className="flex gap-2">
                <div>
                  <GoDotFill className="text-[#ED7D31] text-2xl p-[1px] bg-[#ed7c3192] rounded-full" />
                </div>
                <p>
                  {" "}
                  <strong className="text-[#ED7D31]">Counselors:</strong> <br />
                  Professionals to support families in overcoming denial and
                  stigma.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className='w-screen h-screen bg-[url("/hear/image6.svg")] bg-no-repeat max-sm:px-4 bg-center bg-cover bg-fixed relative'>
          <div className="absolute bg-[#002060] max-sm:text-center max-sm:items-center text-white w-[30rem] max-sm:w-full p-6 px-10 flex flex-col gap-6 right-0 bottom-20 rounded-l-2xl">
            <h6 className="text-4xl font-bold">
              Why Choose I Can Hear You?
            </h6>
            <Image
              src="/hear/icon6.svg"
              alt="ICanHearYou"
              width={100}
              height={100}
              className="w-20"
            />
            <p className="text-xl font-semibold">
              Expert Network, Compassionate Support, Inclusive Approach.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Page;
