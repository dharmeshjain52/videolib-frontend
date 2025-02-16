'use client'
import React from "react";
import Link from "next/link";
import {
  IconAugmentedReality,
  IconCopyPlus,
  IconShare,
  IconThumbDown,
  IconThumbUp,
  IconUser,
}    from "@tabler/icons-react"
import { SearchBar } from "./SearchBar";

const Video = () => {
  return (
    <div className="max-w-screen h-screen mx-auto p-6 bg-black text-white font-sans">
      {/* Header Section */}
      <header className="flex justify-between items-center p-4 rounded-lg shadow-md mb-6">
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
      </header>

      {/* Video Player and Details Section */}
      <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Video Player */}
        <div className="flex-1">
          <div className="bg-black rounded-lg overflow-hidden">
            <iframe
              className="w-full h-[50vh]"  // Set video player height to 50% of the viewport height
              src=""
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Video Details Section */}
        <div className="flex-none w-full lg:w-96">
          {/* Video Title */}
          <h2 className="text-xl font-semibold mb-2">Example Video Title</h2>
          {/* Video Stats */}
          <div className="text-gray-500 mb-4">
            <span>1M likes</span> • <span>50 dislikes</span> • <span>2 days ago</span>
          </div>
          {/* Video Description */}
          <p className="text-gray-700 text-sm mb-6">
            This is a description of the video. It explains what the video is
            about in detail and provides additional context. The video includes
            various topics, discussions, and insights that will help you better
            understand the subject matter.
          </p>

          {/* Video Interaction Buttons */}
          <div className="flex space-x-4 mb-6">
            <button className="py-2 px-4 text-white rounded-full hover:bg-gray-900 transition duration-300">
              <IconThumbUp/>
            </button>
            <button className="py-2 px-4  text-white rounded-full hover:bg-gray-900 transition duration-300">
              <IconThumbDown/>
            </button>
            <button className="py-2 px-4  text-white rounded-full hover:bg-gray-900 transition duration-300">
              <IconShare/>
            </button>
            <button className="py-2 px-4  text-white rounded-full hover:bg-gray-900 transition duration-300">
              <IconCopyPlus/>
            </button>
          </div>

          {/* Subscribe Button */}
          <button className="w-full py-2 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition duration-300">
           Subscribe
          </button>
        </div>
      </div>

      {/* Comments Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4">Comments</h3>

        {/* Add Comment Section */}
        <div className="flex flex-col md:flex-row items-start space-x-4 mb-6">
          <img
            src="https://docs.material-tailwind.com/img/face-3.jpg"
            alt="User Avatar"
            className="rounded-full size-16"
          />
          <div className="flex-1">
            <input
              type="text"
              placeholder="Add a public comment..."
              className="p-2 w-full border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800-500 text-black"
            />
          </div>
          <button className="py-2 px-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition duration-300 mt-4 md:mt-0">
            Comment
          </button>
        </div>

        {/* Comment List (example comments) */}
        <div className="space-y-4">
          <div className="flex space-x-4">
            <img
              src="https://docs.material-tailwind.com/img/face-3.jpg"
              alt="User Avatar"
              className="rounded-full size-16"
            />
            <div>
              <div className="font-semibold text-sm">John Doe</div>
              <div className="text-gray-700 text-sm">Great video! Really enjoyed it.</div>
            </div>
          </div>
          <div className="flex space-x-4">
            <img
              src="https://docs.material-tailwind.com/img/face-3.jpg"
              alt="User Avatar"
              className="rounded-full size-16"
            />
            <div>
              <div className="font-semibold text-sm">Jane Smith</div>
              <div className="text-gray-700 text-sm">This was very informative, thanks for sharing!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
