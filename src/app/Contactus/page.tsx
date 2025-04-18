import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaMapLocationDot,FaLinkedinIn,FaFacebookF,FaXTwitter,FaInstagram  } from "react-icons/fa6";
function Page() {
  return (
    <>
     <Header/>
     <section className='w-screen min-h-screen pt-10 max-lg:pt-10 max-md:pt-10 p-20 max-lg:p-10 max-md:p-4 flex max-lg:flex-col gap-8'>
        <div className='w-2/5 max-lg:w-4/5 max-sm:w-full h-full bg-[#002060] text-white relative flex flex-col gap-8 p-8 rounded-sm overflow-hidden'>
        <span className='w-10 h-10 bg-[#ed7c3186] rounded-full absolute bottom-20 right-8'></span>
        <span className='w-40 h-40 bg-[#ed7c3186] rounded-full absolute -bottom-16 -right-16'></span>
            <div className='flex flex-col gap-2'>
            <h1 className='text-5xl font-bold'>Contact Us</h1>
            <p className='text-2xl font-semibold'>Get In Touch With Us</p>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='flex gap-2 items-center'>
                <FaPhoneAlt className='text-2xl' />
                <p className='text-lg'>+92 (0) 51 873 64 81</p>
                </div>
                <div className='flex gap-2 items-center'>
                <IoMdMail  className='text-2xl' />
                <p className='text-lg'>info@logsols.com</p>
                </div>
                <div className='flex gap-2'>
                <FaMapLocationDot className='text-6xl' />
                <p className='text-lg'>34, East Bani Gala Hills Road, Off Jinnah Road, Bani Gala 46500, Islamabad, Pakistan</p>
                </div>
            </div>
                <div className='flex gap-4 items-center'>
                    <div className='flex justify-center items-center p-2 bg-white rounded-full cursor-pointer hover:bg-[#ED7D31] hover:text-white text-[#002060] duration-150'><FaLinkedinIn className='text-2xl' /></div>
                    <div className='flex justify-center items-center p-2 bg-white rounded-full cursor-pointer hover:bg-[#ED7D31] hover:text-white text-[#002060] duration-150'><FaFacebookF  className='text-2xl' /></div>
                    <div className='flex justify-center items-center p-2 bg-white rounded-full cursor-pointer hover:bg-[#ED7D31] hover:text-white text-[#002060] duration-150'><FaXTwitter  className='text-2xl' /></div>
                    <div className='flex justify-center items-center p-2 bg-white rounded-full cursor-pointer hover:bg-[#ED7D31] hover:text-white text-[#002060] duration-150'><FaInstagram className='text-2xl' /></div>
                </div>
        </div>
        <form className='flex flex-wrap gap-8 w-3/5 max-sm:w-full'>
            <div className='flex flex-col gap-2 w-60 group'>
              <label htmlFor="firstname" className='text-[#002060]'>First Name</label>
              <input type="text" name='firstname' className='border-b-2 border-[#002060] outline-none focus:border-[#ED7D31]' />
            </div>
            <div className='flex flex-col gap-2 w-60 group'>
              <label htmlFor="lastname" className='text-[#002060]'>Last Name</label>
              <input type="text" name='lastname' className='border-b-2 border-[#002060] outline-none focus:border-[#ED7D31]' />
            </div>
            <div className='flex flex-col gap-2 w-60 group'>
              <label htmlFor="email" className='text-[#002060]'>E-mail</label>
              <input type="email" name='email' className='border-b-2 border-[#002060] outline-none focus:border-[#ED7D31]' />
            </div>
            <div className='flex flex-col gap-2 w-60 group'>
              <label htmlFor="number" className='text-[#002060]'>Phone number</label>
              <input type="number" name='email' className='border-b-2 border-[#002060] outline-none focus:border-[#ED7D31]' />
            </div>
            <div className='flex flex-col gap-2 w-full group'>
              <label htmlFor="message" className='text-[#002060]'>Message</label>
              <textarea name="" id="" className='w-full h-32 border border-[#002060] rounded-sm focus:border-[#ED7D31] outline-none p-4'></textarea>
            </div>
            <div className='w-full flex justify-end'>
            <input type="submit" value='Submit' className='text-white bg-[#ED7D31] px-4 py-2 rounded-lg cursor-pointer' />
            </div>
        </form>
        </section> 
     <Footer/>
    </>
  )
}

export default Page
