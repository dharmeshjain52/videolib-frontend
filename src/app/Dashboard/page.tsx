"use client"
import Link from "next/link"
import React from "react"

export default function Dashboard(){
    return(
    <main className="min-h-screen bg-black antialiased text-white">
     <div className="flex flex-col ml-10 mt-10">  
      <h1 className="text-6xl font-bold  text-neutral-400 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Dashboard</h1>
        <Link href={"/"} role="button" className="flex items-center my-12 w-fit p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                    <div className="grid mr-4 place-items-center">
                        <img alt="emma" src="https://docs.material-tailwind.com/img/face-3.jpg" className="relative inline-block h-20 w-20 lg:h-40 lg:w-40 !rounded-full  object-cover object-center" />
                    </div>
                <div>
                <h6 className="block font-sans max-lg:text-xl text-5xl antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900 m-auto">
                    Emma Willever
                </h6>
                <p className="block font-sans max-lg:text-sm text-lg antialiased font-normal leading-normal text-gray-700">
                    UI/UX Designer @ Material Tailwind
                </p>
                </div>
        </Link>
        <h1 className="text-3xl  text-neutral-400 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Playlists</h1>
        <Link href={"/Playlists"} className="mb-5 w-fit">
              <div className="flex items-center w-full pt-5 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                    <div className="grid mr-4 place-items-center">
                        <img alt="thumbnail" src="https://docs.material-tailwind.com/img/face-3.jpg" className="relative inline-block size-32 lg:w-60 lg:h-44 rounded-lg object-cover object-center" />
                    </div>
                <div>
                <p className="block font-sans text-2xl antialiased font-semibold leading-normal tracking-normal text-blue-gray-900">
                    Emma Willever
                </p>
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
                    UI/UX Designer @ Material Tailwind
                </p>
                </div>
              </div>
        </Link>
        <h1 className="text-3xl mt-10  text-neutral-400 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Liked Videos</h1>
        <Link href={"/"} className="mb-5 w-fit">
              <div className="flex items-center w-full pt-5 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                    <div className="grid mr-4 place-items-center">
                        <img alt="thumbnail" src="https://docs.material-tailwind.com/img/face-3.jpg" className="relative inline-block size-32 lg:w-60 lg:h-44 rounded-lg object-cover object-center" />
                    </div>
                <div>
                <p className="block font-sans text-2xl antialiased font-semibold leading-normal tracking-normal text-blue-gray-900">
                    Emma Willever
                </p>
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
                    UI/UX Designer @ Material Tailwind
                </p>
                </div>
              </div>
        </Link>       
       <h1 className="text-3xl mt-10  text-neutral-400 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Comments</h1>
       <ul>
        <li>
        <a href="#" className="flex flex-row items-center h-12 transform transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800 mt-2">
                    <span className="text-2xl font-black">comment 1</span>
        </a>
        <a href="#" className="flex flex-row items-center h-12 transform transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800 mt-2">
                    <span className="text-2xl font-black">comment 2</span>
        </a>  
        </li>
       </ul> 
       <h1 className="text-3xl mt-10  text-neutral-400 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Tweets</h1>
       <ul>
        <li>
        <a href="#" className="flex flex-row items-center h-12 transform transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800 mt-2">
                    <span className="text-2xl font-black">Tweet 1</span>
        </a>
        <a href="#" className="flex flex-row items-center h-12 transform transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800 mt-2">
                    <span className="text-2xl font-black">Tweet 2</span>
        </a>  
        </li>
       </ul>     
       </div>
    </main>
    )
}