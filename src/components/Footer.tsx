import React from 'react'

import Image from 'next/image'

import facebook1 from "../../public/facebook1.png"

import you from "../../public/you.png"

import twitter from "../../public/twitter.png"

import insta from "../../public/insta.png"

import tiktok from "../../public/tiktok.png"

import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='flex justify-between bg-[#f4f4f5] h-[350px] '>
        <div className='ml-7 mt-16'>
         <h1 className='font-bold text-xl mb-5'>Core Courses</h1>
           <a href="#">
           <p className='mb-2'>Programming Fundamentals</p>
   
           <p className='mb-2'>Web2 Using NextJS</p>
   
           <p className='mb-2'>Eran as You Learn</p>
           </a>
        </div>
        
        <div className='mt-16 ml-28'>
        <h1 className='font-bold text-xl mb-5'>Advanced Courses</h1>
       <a href="#">
        <p className='mb-2'>Web 3 and Metaverse</p>

        <p className='mb-2'>Cloud-Native Computing</p>

        <p className='mb-2'>Artificial intelligence (AI) and Deep Learning</p>

        <p className='mb-2'>Ambient Computing and lo T</p>

        <p className='mb-2'>Genomics and Bioinformatics</p>

        <p className='mb-2'>Network Programmability and Automation</p>
        </a>
      </div>
      
      <div className='mt-16 mr-52'>
      <div className='flex justify- ml-4'>
        <h1 className='font-bold text-lg'>Social Links</h1>
      </div>
        
      <div className='flex items-center mt-'>
       <a href="#">
        <Image src={facebook1} alt='image' width={100} height={100} className='w-[70px] h-[43px]'/>
        </a>
        <a href="#">
        <Image src={you} alt='image' width={100} height={100} className='mr-3 w-10 h-10 '/>
        </a>
        <a href="#">
        <Image src={twitter} alt='image' width={100} height={100} className='w-10 h-10'/>
        </a>
        <a href="#">
        <Image src={insta} alt='image' width={100} height={100} className='w-16 h-16'/>
        </a>
        <a href="#">
        <Image src={tiktok} alt='image' width={100} height={100} className='w-10 h-10'/>
        </a>
      </div>
       
      <div className='flex text-[#236392]'>
      <a href="#">
      <AiOutlineMail width={400}  height={400} className='ml-4 mt-2 w-8 h-6 text-[]'/>
      </a>
      <a href="#">
       <p className='ml-3 mt-2'><u>education@governersindh.com</u></p>
       </a>
      </div>
      </div>

  
    </div>
  )
}

export default Footer
