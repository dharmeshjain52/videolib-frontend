"use client"
import React from "react";


export default function History(){
return (
<main className="min-h-screen bg-black antialiased text-white">     
    <div className="max-w-screen flex flex-col items-stretch mt-6 xl:mt-16 mb-auto ml-6 xl:ml-16">
            <div className="flex flex-row gap-x-48 xl:gap-x-96">
                <h1 className="text-3xl xl:text-6xl mt-auto mb-20 text-neutral-400 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Watch History</h1>
                <a href="#" className="flex flex-row items-center h-12 transform transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800 mt-2">
                    <span className="text-2xl font-black mx-auto max-xl:mr-2">Manage</span>
                </a> 
            </div>
        <ul className="mb-auto items-center justify-center"> 
        <p className="block font-sans text-xl xl:text-3xl antialiased font-semibold leading-normal tracking-normal text-blue-gray-900">
                    date 2
                </p>
            <li className="w-fit">
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
            </li>
            </ul>
        <ul className="mb-auto items-center justify-center">   
            <p className="block font-sans text-xl xl:text-3xl antialiased font-semibold leading-normal tracking-normal text-blue-gray-900 mt-4 xl:mt-8">
                date 1
            </p>
            <li className="w-fit">
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
            </li>  
            <li className="w-fit">
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
            </li>  
        </ul>    
    </div> 
</main>
    )
}