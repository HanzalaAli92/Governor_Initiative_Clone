// "use client"

import React from 'react'

import Image from 'next/image';

import Link from 'next/link';

import giaic from '../../public/giaic.png';
/* import { useRouter } from 'next/router';
import { useEffect } from 'react'; */
const Hero = () => {
 /*  let router;

  if (typeof window !== 'undefined') {
    // Only runs when the component is mounted on the client side
    router = useRouter();
  }


  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Only runs when mounted client-side
      const handleClick = () => {
        router.push('/apply');
      };
    }
  }, []); */
  return (
     
      
    <div className="relativ pt-14 bg-cover bg-center h-[750px]"
    style={{ backgroundImage: "url('/house.png')" }}>

         {/* Overlay */}
         <div className="absolute inset-0 bg-white opacity-85 h-[900px]"></div>

              {/* Slider text and black box */}
        <div className="relative z-10 text-[#044e83] ml-8">
          <h1 className="font-bold text-7xl mt-16">Governor Sindh</h1>
          <p className="text-5xl ml-2 mt-1">Kamran Khan Tessori</p>
          <p className="text-sky-400 text-5xl font-bold ml-2 mt-8">
            Certified Cloud
          </p>
          <p className="text-sky-400 text-5xl font-bold ml-2 mt-1">
            Applied Generative AI
          </p>
          <p className="text-sky-400 text-5xl font-bold ml-2 mt-1">
            Engineer (GenEng)
          </p>
          <p className="text-2xl ml-2 mt-6 font-bold">
            Earn up to $5,000 / month
          </p>
          <p className="text-2xl ml-2 mt-6 font-bold">
            Now admissions are open in
          </p>
          <p className="text-2xl ml-2 mt-1 font-bold">Hyderabad</p>

          <div className="flex items-center mt-12">
            <Link href="/apply">
            <button /* onClick={() => router.push('/about')} */ className="text-center text-xl ml-2 font-bold mr-6 box-border rounded-r-lg rounded-l-lg w-52 h-14 bg-[#044e83] text-white">
              Apply Now 
            </button>
            </Link>

            <div>
              <p className="text-3xl ml-24 font-bold">562,143</p>
              <p className="ml-16">Accepted Applications</p>
            </div>
          </div>

          {/* Adjusted Image container */}
          <div className="absolute top-0 right-0 h-[710px] w-[480px] p-0 mt-[-80px]">
            <Image
              src={giaic}
              alt="GIAIC image"
              layout="fill"  // Ensures the image fills the div
              objectFit="fit" // Makes sure the image covers the whole div
              className="p-0 m-0"  // Ensure no padding/margin
            />
          </div>
        </div>
      </div>    
  )
}

export default Hero
