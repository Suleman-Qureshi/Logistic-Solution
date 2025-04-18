"use client"
import Link from 'next/link'
import React,{useState} from 'react'
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from 'next/image'
type Checked = DropdownMenuCheckboxItemProps["checked"]
 

function Header() {
  const [activeNav,setActiveNav]=useState(false)
    const [showStatusBar, setShowStatusBar] = useState<Checked>(true)
  return (
    <>
    <nav className='fixed flex w-screen py-2 px-20 max-md:px-10 max-sm:px-2 gap-8 justify-between items-center shadow-sm bg-[#002060] text-white z-50'>
      <Link href='/' className=''>
      <Image src='/logo.svg' alt='logo' width={50} height={80} className='cursor-pointer' />
      </Link>
      <span onClick={()=>{setActiveNav(!activeNav)}}>
      <FaBars className='text-white w-10 h-8 hidden max-lg:block cursor-pointer' />
      </span>
      <div className='w-full flex  items-center gap-8 font-light max-lg:hidden'>
      <Link href='/' className=''>Home</Link>
      <Link href='/AboutUs' className=''>About Us</Link>
      <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className='bg-transparent border-none hover:bg-transparent hover:text-white cursor-pointer font-light'>Our Services</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel className='text-[#002060]'>Our Services</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          <Link href='/GeneralOrderSupply' className='hover:text-[#002060]'>General order supplies/indenting</Link>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          <Link href='/EventManagment' className='hover:text-[#002060]'>Event Management</Link>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          <Link href='/FleetManagement' className='hover:text-[#002060]'>Fleet Management</Link>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          <Link href='/OneStepSolution' className='hover:text-[#002060]'>One stop solution for door to door services</Link>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          <Link href='/ICanHearYou' className='hover:text-[#002060]'>I Can Hear You
          </Link>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          <Link href='/TravelPartner' className='hover:text-[#002060]'>Travel partner
          </Link>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          <Link href='/ICCN' className='hover:text-[#002060]'>ICCN – (Impact Connect Consultants Network)</Link>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          <Link href='/AgricultureResearchFarm' className='hover:text-[#002060]'>Nasimabad Agriculture research farms
          </Link>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          <Link href='/HLP' className='hover:text-[#002060]'>HLP Services - Housing, Land, and Property Rights </Link>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          <Link href='/ArchBaabrak' className='hover:text-[#002060]'>ArchBaabrak Consultants
          </Link>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          <Link href='/PakMech' className='hover:text-[#002060]'>PAKMECH

          </Link>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          <Link href='/FruityFizz' className='hover:text-[#002060]'>FriutyFizz (Juice Manufacturing)
          </Link>
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
      <Link href='/Gallery' className=''>Gallery</Link>
      </div>
      <div className='w-full  flex justify-end items-center gap-4 max-lg:hidden'>
        <Link href='/Contactus' className='bg-transparent border border-white rounded-md px-3 py-1 text-sm hover:bg-white hover:text-[#002060] duration-150 cursor-pointer'>Contact Us</Link>
      </div>
    </nav>
    {/* mobile nav */}
    <nav className={`w-1/3 max-sm:w-1/2 lg:hidden h-screen fixed right-0 top-0 z-50 bg-[#002060] text-white ${activeNav?"translate-x-0":"translate-x-full"} duration-100 items-start justify-start flex flex-col `}>
    <span className='absolute top-4 right-4' onClick={()=>{setActiveNav(!activeNav)}}>
      <ImCross  className='text-white w-8 h-8 hidden max-lg:block cursor-pointer' />
      </span>

      <div className='w-full flex flex-col items-start gap-8 text-lg h-full justify-center px-4'>
      <Link href='/' className=''>Home</Link>
      <Link href='/AboutUs' className=''>About Us</Link>
      <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className='bg-transparent border-none hover:bg-transparent outline-0 p-0 hover:text-white cursor-pointer text-lg'>Our Services</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 -translate-x-2/3 translate-y-1/2">
        <DropdownMenuLabel className='text-[#002060]'>Our Services</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          <Link href='/GeneralOrderSupply' className='hover:text-[#002060]'>General order supplies/indenting</Link>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          <Link href='/EventManagment' className='hover:text-[#002060]'>Event Management</Link>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          <Link href='/FleetManagement' className='hover:text-[#002060]'>Fleet Management</Link>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          <Link href='/OneStepSolution' className='hover:text-[#002060]'>One stop solution for door to door services</Link>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          <Link href='/ICanHearYou' className='hover:text-[#002060]'>I Can Hear You
          </Link>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          <Link href='/TravelPartner' className='hover:text-[#002060]'>Travel partner
          </Link>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          <Link href='/ICCN' className='hover:text-[#002060]'>ICCN – (Impact Connect Consultants Network)</Link>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          <Link href='/AgricultureResearchFarm' className='hover:text-[#002060]'>Nasimabad Agriculture research farms
          </Link>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          <Link href='/HLP' className='hover:text-[#002060]'>HLP Services - Housing, Land, and Property Rights </Link>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          <Link href='/ArchBaabrak' className='hover:text-[#002060]'>ArchBaabrak Consultants
          </Link>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          <Link href='/PakMech' className='hover:text-[#002060]'>PAKMECH

          </Link>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          <Link href='/FruityFizz' className='hover:text-[#002060]'>FriutyFizz (Juice Manufacturing)
          </Link>
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
      <Link href='/Gallery' className=''>Gallery</Link>
      <div className=''>
        <Link href='/Contactus' className='bg-transparent border border-white rounded-md px-3 py-1 text-lg hover:bg-white hover:text-[#002060] duration-150 cursor-pointer'>Contact Us</Link>
      </div>
      </div>
    </nav>
    </>
  )
}

export default Header
