 "use client"

import Link from 'next/link';

import Image from 'next/image';

import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

import logo from '../../public/logo.png';

const Navbar = () => {
  
  return (
    <div className='mb-20'>
      
        {/* Navbar container */}
        <div className="fixed top-0 z-50 w-full bg-[#044e83] text-white h-20 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center mt-16 ml-10">
            <Image src={logo} alt="logo" width={90} height={90} />
          </div>

          {/* Title */}
          <div className="text-2xl font-bold text-[#b9d8f3]">
            <h1>Tuition Free Education Program on Latest Technologies</h1>
          </div>

          {/* Navbar links */}
          <div className="flex gap-9 items-center relative pr-10">
            <ul className="flex gap-9 items-center">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/apply">Apply</Link>
              </li>
              <li>
                <Link href="/jobs">Jobs</Link>
              </li>
              <li>
                <Link href="/result">Result</Link>
              </li>
              <li>
              <Dropdown  className='rounded-none ml-[-40px] w-[400px] h-[500px] py-10 '>
      <DropdownTrigger className=''>
        <Button disableAnimation
          className='bg-transparent text-white '
        >
          Courses <svg className=" my-1 content-center" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path></svg>
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Example with disabled actions" className="">
      
        <DropdownItem ><h1 className='text-xl font-bold'>Core Courses</h1></DropdownItem>

        <DropdownItem ><p className='text-lg hover:text-[#6cacfa]'>Programming Fundamentals</p></DropdownItem>

        <DropdownItem ><p className='text-lg hover:text-[#6cacfa]'>Web2 Using NextJS</p></DropdownItem>

        <DropdownItem ><p className='text-lg hover:text-[#6cacfa]'>Eran as You Learn</p></DropdownItem>
        
        <DropdownItem ><hr /></DropdownItem>

        <DropdownItem ><h1 className='text-xl font-bold'>Advanced Courses</h1></DropdownItem>

        <DropdownItem ><p className='text-lg hover:text-[#6cacfa]'>Web 3 and Metaverse</p></DropdownItem>

        <DropdownItem ><p className='text-lg hover:text-[#6cacfa]'>Cloud-Native Computing</p></DropdownItem>

        <DropdownItem ><p className='text-lg hover:text-[#6cacfa]'>Artificial intelligence (AI) and Deep Learning</p></DropdownItem>

        <DropdownItem ><p className='text-lg hover:text-[#6cacfa]'>Ambient Computing and lo T</p></DropdownItem>

        <DropdownItem ><p className='text-lg hover:text-[#6cacfa]'>Genomics and Bioinformatics</p></DropdownItem>

        <DropdownItem ><p className='text-lg hover:text-[#6cacfa]'>Network Programmability and Automation</p></DropdownItem>
        </DropdownMenu>
        </Dropdown>
        </li>
        </ul>
        </div>
      </div>
    </div>   
  );
};

export default Navbar;
