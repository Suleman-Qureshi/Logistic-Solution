import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'

function Page() {
  return (
    <>
     <Header/> 
     <main className='w-screen overflow-hidden'>
        {/* Hero Section */}
        <section className='bg-[#002060] w-screen h-screen overflow-hidden relative max-md:bg-[url("https://img.freepik.com/free-photo/close-up-apples-being-processed_23-2150713380.jpg?ga=GA1.1.56082603.1736629362&semt=ais_hybrid&w=740")] bg-no-repeat bg-center bg-cover max-md:flex max-md:justify-center max-md:items-center bg-fixed'>
          <div>
            <Image
              src="/JM/image1.svg"
              alt="Juice Image"
              className="h-auto w-full -translate-y-24 max-md:hidden"
              width={10000000}
              height={1000000}
              
              />
          </div>
          <div className='absolute right-20 bottom-20 max-md:hidden'>
          <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl z-10">
              Juice Manufacturing
            </h1>
          </div>
          <div className='hidden max-md:flex w-screen h-screen bg-black/50  justify-center items-center text-center'>
          <h1 className="text-white font-bold text-[13vw] z-10">
              Juice Manufacturing
            </h1>
          </div>
        </section>
        {/* Info Section */}
        <section className="min-h-screen grid grid-cols-1 md:grid-cols-2">
          <div className="p-6 md:p-20">
            <h1 className="text-[#002060] text-3xl md:text-5xl font-bold">
              Fresh, Hygienic, and Delicious Juices
            </h1>
            <ul className="space-y-4 mt-4">
              <li>
                At Logistics Solutions, we produce fresh, high-quality bottled
                juices using state-of-the-art technology to ensure the highest
                standards of health and safety.
              </li>
              <li>
                At Logistics Solutions, we’re not just about logistics—we’re
                also passionate about health and freshness! Our state-of-the-art
                juice manufacturing and bottling unit produces fresh,
                high-quality bottled juices for local markets, using the latest
                hygienic technology to ensure the highest standards of health
                and safety. Whether you’re a retailer, distributor, or
                individual customer, we’ve got your juice needs covered. Just a
                call or WhatsApp or E-mail message away, we’re ready to deliver freshness
                to your doorstep!
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/JM/image2.svg"
              alt="Juice Image"
              className="h-auto w-full max-w-md md:max-w-full"
              width={100}
              height={100}
            />
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="min-h-screen grid grid-cols-1 md:grid-cols-2">
          <div className="p-6 md:p-20">
            <h1 className="text-[#002060] text-3xl md:text-5xl font-bold">
              Why Choose Our Juices?
            </h1>
            <ul className="space-y-4 mt-4">
              <li>
                • Freshness Guaranteed <br />• Hygienic Production <br />•
                Nutrient-Rich <br />• Eco-Friendly Packaging <br />• Easy
                Ordering
              </li>
              <li>
                • Freshness Guaranteed: Made from the fresh finest, locally sourced
                fruits. <br />
                • Hygienic Production: Manufactured using the latest technology
                to maintain high health and safety standards. <br />
                • Nutrient-Rich: Preserves the natural vitamins and flavors of
                fruits. <br />
                • Eco-Friendly Packaging: Environmentally conscious bottling
                solutions. <br />• Easy Ordering: Just call or WhatsApp or E-mail to place
                your order!
              </li>
            </ul>
          </div>
          <div className="flex justify-start items-center bg-[#002060]">
            <Image
              src="/JM/image3.svg"
              alt="Juice Image"
              className="w-[70%] h-[70%] md:w-[75%] md:h-[75%]"
              width={350}
              height={350}
            />
          </div>
        </section>

        {/* Manufacturing Process Section */}
        <section className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-[55%_45%] bg-[linear-gradient(to_bottom,_white_50%,_#002060_50%)]">
          <div className="w-full h-full p-6 sm:p-10 md:p-20">
            <h1 className="text-[#002060] text-3xl sm:text-4xl md:text-5xl font-bold">
              Our Juice <br /> Manufacturing Process
            </h1>

            <ul className="flex flex-col gap-10 mt-6 w-full">
              <li className="flex flex-col sm:flex-row gap-4 w-full">
                <div className="bg-[#E66826] rounded-3xl w-20 h-20 p-4 flex justify-center items-center mx-auto sm:mx-0">
                  <Image
                    src="/JM/icon1.svg"
                    width={50}
                    height={50}
                    alt="Sourcing Icon"
                  />
                </div>
                <ul className="text-lg list-disc pl-5 w-full">
                  <li>
                    <span className="font-bold">Sourcing:</span> Fresh,
                    high-quality fruits.
                  </li>
                  <li>
                    <span className="font-bold">Processing:</span> Advanced
                    hygienic technology.
                  </li>
                  <li>
                    <span className="font-bold">Quality Control:</span>{" "}
                    Stringent testing.
                  </li>
                  <li>
                    <span className="font-bold">Packaging:</span> Eco-friendly
                    bottles.
                  </li>
                  <li>
                    <span className="font-bold">Delivery:</span> Fast and
                    reliable.
                  </li>
                </ul>
              </li>

              <li className="flex flex-col sm:flex-row gap-4 w-full">
                <div className="bg-[#E66826] rounded-3xl w-20 h-20 p-4 flex justify-center items-center mx-auto sm:mx-0">
                  <Image
                    src="/JM/icon2.svg"
                    width={50}
                    height={50}
                    alt="Processing Icon"
                  />
                </div>
                <ul className="text-white text-lg list-disc pl-5 space-y-2 bg-[#002060] p-4 rounded-xl w-full">
                  <li>
                    <span className="font-bold">Sourcing:</span> Fresh, local
                    fruits.
                  </li>
                  <li>
                    <span className="font-bold">Processing:</span> Hygienic
                    extraction & bottling.
                  </li>
                  <li>
                    <span className="font-bold">Quality Control:</span> Strict
                    safety standards.
                  </li>
                  <li>
                    <span className="font-bold">Packaging:</span> Eco-friendly
                    bottles.
                  </li>
                  <li>
                    <span className="font-bold">Delivery:</span> Fast & reliable
                    delivery.
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="flex justify-center items-center p-6 sm:p-10">
            <Image
              src="/JM/image4.svg"
              alt="Juice Manufacturing Process"
              width={500}
              height={400}
              className="w-full h-auto max-w-md lg:max-w-full"
            />
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex justify-center items-center">
            <Image
              src="/JM/image5.svg"
              alt="Juice Varieties Image"
              width={100}
              height={100}
              className="h-full w-full"
            />
          </div>
          <div className="bg-[#002060] p-6 flex flex-col justify-center items-start">
            <h1 className="text-white text-4xl sm:text-5xl font-bold mb-4">
              Our Juice Varieties
            </h1>
            <div className="flex gap-4">
              <div className="bg-[#E66826] rounded-3xl w-20 h-20 p-4 flex justify-center items-center mb-6">
                <Image
                  src="/JM/icon3.svg"
                  width={50}
                  height={50}
                  alt="Processing Icon"
                />
              </div>
              <ul className="text-white text-lg list-disc pl-5 space-y-2">
                <li>Orange Juice</li>
                <li>Apple Juice</li>
                <li>Mango Juice</li>
                <li>Mixed Fruit Juice</li>
                <li>Seasonal Specials (e.g., Guava, Pineapple, Pomegranate)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="z-0 h-[80vh] sm:h-[100vh] bg-[url('/JM/image5.svg')] bg-cover bg-no-repeat flex items-end overflow-hidden">
          <div className="w-full h-[75vh] sm:h-[80vh] relative overflow-visible flex justify-end items-center">
            {/* Blue div with clip-path */}
            <div className="w-full h-[75vh] sm:h-[80vh] bg-[#002060] [clip-path:polygon(0_100%,100%_0,100%_100%,0_100%)] absolute ">
              {/* Blue content */}
            </div>

            {/* Orange div */}
            <div className="bg-[#E66826] absolute right-0 top-1/2 transform -translate-y-1/2 z-10 rounded-l-2xl p-6 sm:p-10 md:p-16 lg:p-20 w-[80%] sm:w-auto">
              <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl sm:text-left">
                How to Order
              </h1>
              <Image
                src="/JM/icon4.svg"
                alt="icon"
                width={50}
                height={50}
                className="mx-auto sm:mx-0"
              />
              <ul className="text-white text-lg list-disc pl-5 space-y-2">
                <li>
                  <span className="font-bold">Contact Us:</span> Call,
                  WhatsApp or E-mail.
                </li>
                <li>Place Your Order.</li>
                <li>Delivery to your doorstep.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
     <Footer/>
    </>
  )
}
export default Page
