import Image from "next/image";

import 'slick-carousel/slick/slick.css';

import 'slick-carousel/slick/slick-theme.css';

import logos from "../../public/logos.jpg"

import login from "../../public/login.jpg"

import images from "../../public/images.jpg"

import image1 from "../../public/image1.jpg"

import image2 from "../../public/image2.jpg"

import image3 from "../../public/image3.jpg"

import pic1 from "../../public/pic1.jpg"

import pic2 from "../../public/pic2.jpg"

import pic3 from "../../public/pic3.jpg"

import pic4 from "../../public/pic4.jpg"

import pic5 from "../../public/pic5.jpg"

import pic6 from "../../public/pic6.jpg"

import Hero from "@/components/Hero";

import ImageSlider from "@/components/Slider/Slider";

export default function Home() {
  return (
  <div className="justify-start">
    
    <Hero />


<div className=" ml-8 ">

<h1 className="text-center text-[#044e83] font-bold text-[34px] mt-20">Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur</h1>

<h2 className="text-center text-[#044e83] font-bold text-[34px]">Developing Billion-Dollar Valued Developers and Solopreneurs</h2>

<p className="mt-10 text-[24px] ">The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing</p>

<p className="text-[24px] ">infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs</p>

<p className="text-[25px] ">trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by</p>

<p className="text-[24px] ">eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur</p>

<p className="text-[24px] ">businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the</p>

<p className="text-[24px] ">ultra-lean business model and work independently and will not need to hire employees or other team members.</p>
</div>
    

      <div className="flex justify-between mt-8 hover">
       <Image src={logos} alt="image" width={500} height={100} className="h-[310px] w-[450px] ml-7 rounded-r-lg rounded-l-lg shadow-2xl shadow-black"/>
       
       <Image src={login} alt="image" width={500} height={100} className="h-[310px] w-[500px] rounded-r-lg rounded-l-lg shadow-2xl shadow-black"/>
      
       <Image src={images} alt="image" width={500} height={100} className="h-[310px] w-[450px] mr-7 rounded-r-lg rounded-l-lg shadow-2xl shadow-black"/>
      </div>
      
       <div className="w-[1474px] border-b-2 border-gray-300 h-[765px] ">
       <ImageSlider />
    
       </div>

      <h1 className="mt-10 ml-7 text-4xl text-[#044e83] font-bold">Core Courses Sequence</h1>
       <div className="flex justify-start mt-8 ">

      <div className="hover:scale-105 duration-200 " >

       <Image src={image1} alt="image" width={500} height={100} className="h-[210px] w-[335px] ml-7 rounded-t-lg " />

       <p className="text-center ml-7 mb-10 box-border px-6 py-5 bg-[#ecebeb] rounded-b-lg text-xl text-stone-800">Programming Fundamentals</p>
       </div>

       <div className="hover:scale-105 duration-200">

       <Image src={image2} alt="image" width={500} height={100} className="h-[210px] w-[335px] ml-10 rounded-t-lg"/>

       <p className="text-center ml-10 mb-10 box-border px-10 py-5 bg-[#ecebeb] rounded-b-lg text-xl text-stone-800">Web2 Using NextJS</p>
       </div>

       <div className="hover:scale-105 duration-200">
       
       <Image src={image3} alt="image" width={500} height={100} className="h-[210px] w-[335px] ml-10 rounded-t-lg "/>

       <p className="text-center ml-10 mb-10 box-border px-10 py-5 bg-[#ecebeb] rounded-b-lg text-xl text-stone-800">Eran as You Learn</p>
      </div>

    </div>
      <h1 className="mt-5 ml-7 text-4xl text-[#044e83] font-bold">Advanced Courses</h1>
      <div className="flex justify-start mt-8 ">

      <div className="hover:scale-105 duration-200">

       <Image src={pic1} alt="image" width={500} height={100} className="h-[210px] w-[330px] ml-7 rounded-t-lg" />

       <p className="text-center ml-7 mb-10 box-border px-10 py-5 bg-[#ecebeb] rounded-b-lg text-xl text-stone-800">Artificial intelligence</p>
       </div>

       <div className="hover:scale-105 duration-200">

       <Image src={pic2} alt="image" width={500} height={100} className="h-[210px] w-[330px] ml-10 rounded-t-lg"/>

       <p className="text-center ml-10 mb-10 box-border px-10 py-5 bg-[#ecebeb] rounded-b-lg text-xl text-stone-800">Web 3 and Metaverse</p>
       </div>

       <div className="hover:scale-105 duration-200">

       <Image src={pic3} alt="image" width={500} height={100} className="h-[210px] w-[330px] ml-10 rounded-t-lg "/>

       <p className="text-center ml-10 mb-10 box-border px-10 py-5 bg-[#ecebeb] rounded-b-lg text-xl text-stone-800">Cloud-Native Computing</p>
      </div>

      <div className="hover:scale-105 duration-200">

       <Image src={pic4} alt="image" width={500} height={100} className="h-[210px] w-[332px] ml-10 rounded-t-lg "/>

       <p className="text-center ml-10  mb-10 box-border  py-5  bg-[#ecebeb] rounded-b-lg text-xl text-stone-800">Ambient Computing and lo T</p>
      </div>
    </div>
    <div className="flex justify-start mb-10">

      <div className="hover:scale-105 duration-200">

       <Image src={pic5} alt="image" width={500} height={100} className=" h-[210px] w-[330px] ml-7 rounded-t-lg" />

       <p className="text-center ml-7 mb-10 box-border px-5 py-5 bg-[#ecebeb] rounded-b-lg text-xl text-stone-800">Genomics and Bioinformatics</p>
       </div >
       <div className="hover:scale-105 duration-200">

       <Image src={pic6} alt="image" width={500} height={100} className=" h-[210px] w-[330px] ml-9 rounded-t-lg "/>

       <p className="text-center ml-8 mb-10 box-border px- py-1 bg-[#ecebeb] rounded-b-lg text-xl text-stone-800 hover:text-center">Network Programmability and <br /> Automation</p>
       </div>
    </div>
 </div>
  );
}

