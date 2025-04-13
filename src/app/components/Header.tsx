"use client"
import Link from 'next/link'
import React,{useState} from 'react'
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
 
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
    const [showStatusBar, setShowStatusBar] = useState<Checked>(true)
  return (
    <nav className='fixed flex w-screen py-2 px-20 max-md:px-10 max-sm:px-2 gap-8 justify-between items-center shadow-sm bg-[#002060] text-white z-50'>
      <Link href='/' className=''>
      <Image src='/logo.svg' alt='logo' width={50} height={80} className='cursor-pointer' />
      </Link>
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
          <Link href='/' className='hover:text-[#002060]'>One stop solution for door to door services</Link>
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
          <Link href='/' className='hover:text-[#002060]'>Travel partner
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
      <div className='w-full  flex justify-end items-center gap-4'>
        <Link href='/Contactus' className='bg-transparent border border-white rounded-md px-3 py-1 text-sm hover:bg-white hover:text-[#002060] duration-150 cursor-pointer'>Contact Us</Link>
      </div>
    </nav>
  )
}

export default Header
