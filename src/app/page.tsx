import Link from "next/link";
import { SearchBar } from "./Components/SearchBar";
import {
  IconAugmentedReality,
  IconUser,
  IconArrowNarrowLeft,
  IconArrowNarrowRight
}    from "@tabler/icons-react"

export default function Home() {
  return (
<main className="min-h-screen antialiased bg-black text-white">
  <div className="flex flex-col w-full">       
    <div className="flex flex-row w-full my-8 justify-around items-center">
      <Link
      href={'/'}
      className="flex flex-row items-center justify-start gap-4" 
      >
      <IconAugmentedReality size={55} className="h-fit w-fit"/>
      <h1 className="max-lg:hidden xl:text-3xl text-neutral-400 font-bold">VIDEOLIB</h1>   
      </Link>
      <div id="search-bar" className="w-1/2 max-h-12 rounded-full shadow-lg z-10">
       <SearchBar/>
      </div>
      <Link 
        className="h-14 flex flex-row gap-2 items-center justify-center rounded-full border border-slate-800 animate-shimmer bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-neutral-300"
        href={"/SignIn"}
        > 
        <IconUser/>
        <button className="max-md:hidden">
          Sign In/Sign Up
        </button>
      </Link>  
    </div>
      <div className="flex flex-col ml-12">  
        <button role="button" className="flex items-center my-12 w-fit p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
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
        </button>
            <div className=" flex flex-row">
                <h1 className="max-lg:text-xl text-5xl font-bold">Your Videos</h1>
                <div className="lg:border border-gray-300 ml-72 lg:p-6 rounded-full lg:hover:bg-neutral-700">
                  <IconArrowNarrowLeft/>
                </div>
                <div className="lg:border border-gray-300 max-lg:ml-4 max-lg:mr-4 ml-2 rounded-full lg:p-6 lg:hover:bg-neutral-700">
                  <IconArrowNarrowRight/>
                </div>
            </div>
            <ul className="mb-5">
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
  </div> 
</main>

    )
}
