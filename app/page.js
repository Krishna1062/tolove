
import Image from "next/image";
import LoadingBarComponent from "@/components/LoadingBarComponent";
export default function Home() {
  let progress = 100;
  return (
    <>
<LoadingBarComponent progress={progress} />
      <div style={{ background: `rgba(0,0,0,0.8) url(${'/bg.jpg'})`, backgroundSize: `cover`, backgroundRepeat: `no-repeat`, backgroundAttachment:`fixed`, backgroundBlendMode:`darken`}} className="min-h-[85vh]">
      <div className="w-[80%] m-auto py-12">
      <div className="home-1 text-center flex lg:text-left lg:justify-center items-center lg:space-x-3 py-24">
        <div className="lg:w-[55%]">
          <h2 className="text-3xl font-semibold mb-3 text-white md:text-4xl">Welcome To <span className="text-red-600">NerdCrafties</span></h2>
          <p className="text-white">
            NerdCrafties is a live online courses learning platform. We came up with the specialized premium courses at the best price ranges including certificate of completion. We provide best industry expert faculty to our courseholders. Its very difficult nowadays to make career without having productivity software and tools knowledge. Enrol today in our job ready skillset programs and become a smart and pro user with the indemand software tools.
          </p>
          <div className="flex space-x-4 justify-center my-3 lg:justify-start">
            <a href="courses.html"><button className="btn w-20 text-white text-sm border-2 p-2 rounded-xl hover:bg-red-600 hover:text-white focus:ring-2 focus:ring-purple-200 duration-400">Blog</button></a>
              <a href="assets/brochure.pdf" target="_blank"><button className="btn w-20 text-white text-sm border-2 p-2 rounded-xl hover:bg-red-600 hover:text-white focus:ring-2 focus:ring-purple-200 duration-400">Contact</button></a>
          </div>
        </div>

      </div>
    </div>
      </div>
    <div className="px-6 py-2 w-11/12 mx-auto">
  <p className="text-3xl text-center my-8 pb-2 font-semibold">Recent Blog Post</p>
    
<div className="flex flex-wrap justify-center items-center gap-5 md:gap-8 lg:gap-11 w-full mx-auto">
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">
    <a href="#">
        <img className="rounded-t-lg" src="/img.avif" alt="" />
        
    </a>
    <div className="p-5">
        <a href="#">
            <h2 className="mb-2 text-lg md:text-xl font-bold tracking-tight text-gray-900">Noteworthy technology acquisitions 2021</h2>
        </a>
        <p className="mb-3 py-2 font-normal text-sm text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. tis is the world of the world.</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">
    <a href="#">
        <img className="rounded-t-lg" src="/img.avif" alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h2 className="mb-2 text-lg md:text-xl font-bold tracking-tight text-gray-900">Noteworthy technology acquisitions 2021</h2>
        </a>
        <p className="mb-3 py-2 font-normal text-sm text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. tis is the world of the world.</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">
    <a href="#">
        {/* <img className="rounded-t-lg" src="/img.avif" alt="" /> */}
        <Image
      src="/img.avif"
      width={500}
      height={500}
      alt="Picture of the author"
    />
    </a>
    <div className="p-5">
        <a href="#">
            <h2 className="mb-2 text-lg md:text-xl font-bold tracking-tight text-gray-900">Noteworthy technology acquisitions 2021</h2>
        </a>
        <p className="mb-3 py-2 font-normal text-sm text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. tis is the world of the world.</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
</div>
<section>
    <h2 className="text-3xl text-center font-semibold my-12">Guidelines and Policies</h2>
    <div className="w-11/12 my-6 flex flex-col m-auto items-center justify-center md:flex-row md:space-x-6">
      <div className="mb-2 w-full bg-gray-100 rounded-lg lg:mb-0">
        <div className="m-2">
          <h3 className="text-lg font-medium my-4">Terms and Conditions</h3>
          <p>For enrolment into your desired specialised course from NerdCrafties visit
            our website www.NerdCrafties.com course from NerdCrafties visit...</p>
          <a href="terms-and-conditions.html"><button className="text-white bg-rose-600 hover:bg-red-600 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center mb-4 mt-12">Use
            now
            →</button></a>
        </div>
      </div>

      <div className="mb-2 w-full bg-gray-100 rounded-md lg:mb-0">
        <div className="m-2">
          <h3 className="text-lg font-medium my-4">Privacy Policy</h3>
          <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your
            information when You use the Service ...</p>
          <a href="privacy-policy.html"><button className="text-white bg-rose-600 hover:bg-red-600 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center mb-4 mt-12">Use
            now
            →</button></a>
        </div>
      </div>


    </div>
  </section>
  </div>
  </>
  );
}
