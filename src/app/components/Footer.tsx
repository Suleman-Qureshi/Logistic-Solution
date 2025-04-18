import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { CiMail, CiLocationOn } from "react-icons/ci";
import Image from "next/image";
function Footer() {
  return (
    <footer className="w-screen px-20 max-md:px-10 max-sm:px-4 py-10 flex flex-col items-center text-center gap-8 bg-[#002060] text-white">
      <div className="flex max-sm:flex-col gap-8 justify-center">
        <div className="flex flex-col gap-2 item-center text-center text-white w-40">
          <FaWhatsapp className="w-10 h-10 rounded-full bg-[#ED7D31] p-2 mx-auto" />
          <p>+92 (0) 51 873 64 81</p>
        </div>
        <div className="flex flex-col gap-2 item-center text-white w-40">
          <CiMail className="w-10 h-10 rounded-full bg-[#ED7D31] p-2 mx-auto" />
          <p>info@logsols.com</p>
        </div>
        <div className="flex flex-col gap-2 item-center text-white w-40">
          <CiLocationOn className="w-10 h-10 rounded-full bg-[#ED7D31] p-2 mx-auto" />
          <p>34, East Bani Gala Hills Road, Off Jinnah Road, <br />Bani Gala 46500, Islamabad, Pakistan</p>
        </div>
      </div>
      <Image src="/footerIcon.svg" alt="footerIcon" width={100} height={100} />
      <p className="text-center text-2xl mx-10 max-sm:mx-4 border-b border-[#ED7D31] pb-6 mb-6">
        Let us be your trusted partner in achieving your goals. With Logistics
        Solutions, you’re not just a client you’re a valued partner in progress.
      </p>
      <p className="w-full text-center tracking-wide">
        &copy; Copyright <b className="text-[#ED7D31]">Logistics Solutions</b>
        . All Right Reserved
      </p>
    </footer>
  );
}

export default Footer;
