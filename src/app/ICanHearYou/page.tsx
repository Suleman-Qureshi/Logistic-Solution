import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'
import { GoDotFill } from 'react-icons/go'

function Page() {
  return (
    <>
     <Header/> 
     <main className='w-screen overflow-hidden'>
        <section className='w-screen h-screen flex'>
            <div className='w-1/2 h-full content-center pl-20'>
            <h1 className='text-[10vw] font-bold text-[#002060]'>I Can <br /> Hear You</h1>
            </div>
            <div className='w-1/2 h-full'>
            <Image src='/hear/image1.svg' alt='ICanHearYou' width={1000} height={1000} className='w-full' />
            </div>
        </section>
        <section className='w-screen pb-20 relative'>
            <div className='w-4/5 h-full'>
            <Image src='/hear/image2.svg' alt='ICanHearYou' width={1000} height={1000} className='w-full' />
            </div>
            <div className='w-[40vw] p-4 rounded-2xl bg-[#002060] text-white flex flex-col gap-6 absolute bottom-20 left-[50vw]'>
                <h2 className='text-3xl font-semibold'>Introducing I Can Hear You – A Subsidiary of Logistics Solutions</h2>
                <div className='flex gap-2'>
                    <div>
                    <div className='w-20 h-20 bg-[#ED7D31] p-4 rounded-tl-xl rounded-br-xl'>
                        <Image src='/hear/icon1.svg' alt='ICanHearYou' width={100} height={100} className='' />
                    </div>
                    </div>
                    <p className='text-lg'>Dedicated to supporting hearing-impaired children and their families by connecting them with the best professionals</p>
                </div>
                <div className='flex gap-2'>
                    <div>
                    <div className='w-20 h-20 bg-[#ED7D31] p-4 rounded-tl-xl rounded-br-xl'>
                        <Image src='/hear/icon2.svg' alt='ICanHearYou' width={100} height={100} className='' />
                    </div>
                    </div>
                    <p className='text-lg'>At I Can Hear You, a subsidiary of Logistics Solutions, we are dedicated to empowering hearing-impaired children and their families by providing expert support, resources, and guidance. Through our referral system, we connect clients with audiologists, speech therapists, medical professionals, and other experts to ensure your loved ones receive the best care possible. Our mission is to foster acceptance, understanding, and empowerment while making expert services accessible and convenient.</p>
                </div>
            </div>
        </section>
        <section className='w-screen min-h-screen flex gap-12 p-20 pl-0 overflow-hidden'>
         <div className='w-2/3 h-full relative content-center'>
         <span className='absolute bg-[#002060ae] text-white text-8xl font-bold -right-20 top-1/2 -translate-y-1/2 text-center p-4 py-8 leading-24'>Our <br /> Mission</span>
         <Image src='/hear/image3.svg' alt='ICanHearYou' width={100000} height={100000} className='w-full' />
         </div>
         <div className='flex flex-col gap-8 justify-center h-full w-1/3 content-center pl-16'>
            <div className='flex gap-2'>
                <div>
                <div className='w-12 h-12 rounded-full bg-[#ED7D31] p-3'>
                    <Image src='/hear/icon3.svg' alt='ICanHearYou' width={100} height={100} className='' />
                </div>
                </div>
                <p className='text-lg'>To empower hearing-impaired
children by bridging the gap
between families and expert
care providers.</p>
            </div>
            <div className='flex gap-2'>
                <div>
                <div className='w-12 h-12 rounded-full bg-[#ED7D31] p-3'>
                    <Image src='/hear/icon4.svg' alt='ICanHearYou' width={100} height={100} className='' />
                </div>
                </div>
                <p className='text-lg'>To create a world where every
hearing-impaired child is heard,
supported, and empowered to
thrive. We aim to bridge the gap
between families and expert
care providers, ensuring fast
recovery and long-term success.</p>
            </div>
         </div>
        </section>
        <section className='w-screen min-h-screen flex items-center overflow-hidden'>
            <div className='w-1/2 h-screen relative'>
            <span className='absolute -z-10 bg-[#ED7D31] h-full w-1/2'></span>
            <div className='w-full h-full z-10'>
                <Image src='/hear/image4.svg' alt='ICanHearYou' width={1000} height={1000} className='w-full z-10' />
            </div>
            </div>
            <div className='w-1/2 flex flex-col gap-12 px-20'>
            <h3 className='text-5xl font-bold text-[#002060]'>How It Works</h3>
            <div className='flex flex-col gap-2'>
                <div className="flex gap-2">
                                  <div>
                                    <GoDotFill className="text-[#ED7D31] text-2xl p-[1px] bg-[#ed7c3192] rounded-full" />
                                  </div>
                                  <p>
                                    {" "}
                                    <strong className="text-[#ED7D31]">
                                    Contact Us:
                                    </strong>{" "} <br />
                                    Reach out to us via phone,
WhatsApp, or email with your request.
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
                                    </strong>{" "} <br />
                                    Our team will evaluate
your needs and provide tailored
recommendations
                                  </p>
                                </div>
                <div className="flex gap-2">
                                  <div>
                                    <GoDotFill className="text-[#ED7D31] text-2xl p-[1px] bg-[#ed7c3192] rounded-full" />
                                  </div>
                                  <p>
                                    {" "}
                                    <strong className="text-[#ED7D31]">
                                    Referral:
                                    </strong>{" "} <br />
                                    We connect you with the nearest
                                    and most suitable experts in your city.
                                  </p>
                                </div>
                <div className="flex gap-2">
                                  <div>
                                    <GoDotFill className="text-[#ED7D31] text-2xl p-[1px] bg-[#ed7c3192] rounded-full" />
                                  </div>
                                  <p>
                                    {" "}
                                    <strong className="text-[#ED7D31]">
                                    Support: 
                                    </strong>{" "} <br />
                                    We guide you through the process,
                                    ensuring a seamless experience.
                                  </p>
                                </div>
            </div>
            </div>
        </section>
        <section className='w-screen h-screen flex items-center'>
           <div className='w-1/3 h-screen relative content-center'>
           <span className='w-1/2 h-full absolute bg-[#002060] -z-10'></span>
           <div className='w-full h-full py-8 pl-20 flex items-center'>
            <Image src='/hear/image5.svg' alt='ICanHearYou' width={1000} height={1000} className='w-full' />
           </div>
           </div>
           <div className='w-2/3 flex flex-col p-20 gap-8'>
           <h2 className='text-5xl font-bold text-[#002060]'>Our Referral Network</h2>
           <div className='flex gap-2 items-center'>
            <div className='p-3 bg-[#ED7D31] rounded-full w-14 h-14'>
<Image src='/hear/icon5.svg' alt='ICanHearYou' width={100} height={100} className='' />
            </div>
            <p className='text-lg font-medium'>Audiologists, Speech Therapists, Medical Professionals,
            Counselors.</p>
           </div>
           <div className='flex flex-col gap-2'>
           <div className="flex gap-2">
                                  <div>
                                    <GoDotFill className="text-[#ED7D31] text-2xl p-[1px] bg-[#ed7c3192] rounded-full" />
                                  </div>
                                  <p>
                                    {" "}
                                    <strong className="text-[#ED7D31]">
                                    Audiologists: 
                                    </strong>{" "} <br />
                                    Experts in hearing assessment and
                                    rehabilitation.
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
                                    </strong>{" "} <br />
                                    Specialists in communication training
and speech development.
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
                                    </strong>{" "} <br />
                                    Doctors and specialists in
                                    hearing-related health issues.
                                  </p>
                                </div>
           <div className="flex gap-2">
                                  <div>
                                    <GoDotFill className="text-[#ED7D31] text-2xl p-[1px] bg-[#ed7c3192] rounded-full" />
                                  </div>
                                  <p>
                                    {" "}
                                    <strong className="text-[#ED7D31]">
                                    Counselors:
                                    </strong>{" "} <br />
                                    Professionals to support families in
overcoming denial and stigma.
                                  </p>
                                </div>
           </div>
           </div>
        </section>
        <section className='w-screen h-screen bg-[url("/hear/image6.svg")] bg-no-repeat bg-center bg-cover bg-fixed relative'>
        <div className='absolute bg-[#002060] text-white w-[30rem] p-6 px-10 flex flex-col gap-6 right-0 bottom-20 rounded-l-2xl'>
            <h6 className='text-4xl font-bold'>Why Choose &lsquo;I Can Hear You?</h6>
            <Image src='/hear/icon6.svg' alt='ICanHearYou' width={100} height={100} className='w-20' />
            <p className='text-xl font-semibold'>Expert Network, Compassionate Support,
            Inclusive Approach.</p>
        </div>
        </section>
     </main>
     <Footer/>
    </>
  )
}

export default Page
