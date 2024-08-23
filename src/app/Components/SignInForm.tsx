"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { BackgroundGradient } from "./ui/background-gradient";


export function SignUpForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  const [mode,setMode] = useState(false)
  return (
  <div>
    <div className ={`${mode?"hidden":""}`}>
      <BackgroundGradient className="rounded">
        <div className="max-w-md w-fit mx-auto rounded-2xl p-4 md:p-8 shadow-input bg-black border border-gray-900">
          <h2 className="font-bold text-xl text-neutral-200">
            Welcome to VIDEOLIB
          </h2>
          <p className="text-sm max-w-sm mt-2 text-neutral-300">
            Join Us
          </p>
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">Full name</Label>
            <Input id="firstname" placeholder="Name" type="text" required={true}/>
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Username</Label>
            <Input id="lastname" placeholder="username" type="text" required={true}/>
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="email" type="email" required={true}/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password" required={true}/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="twitterpassword">Confirm Password</Label>
          <Input
            id="twitterpassword"
            placeholder="••••••••"
            type="password"
            required={true}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="avatar">Avatar</Label>
          <Input
            id="avatar"
            type="file"
            accept="image/png,image/jpeg"
            className="text-neutral-600"
            required={true}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="cover-image">Cover Image (optional)</Label>
          <Input
            id="cover-image"
            type="file"
            accept="image/png,image/jpeg"
            className="text-neutral-600"
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900  block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
      <div className="text-center">
            <p>Already have an account? <button className="underline font-semibold" onClick={()=>setMode(mode => !mode)}>Log in here.</button></p>
        </div>
        </div>
      </BackgroundGradient>
    </div>  
    <div className ={`${!mode?"hidden":""}`}>
    <BackgroundGradient className="rounded"> 
    <div className="max-w-lg w-full mx-auto rounded-2xl px-4 py-2 md:px-8 shadow-input bg-black border border-gray-900">
      <h2 className="font-bold text-xl text-neutral-200">
        Welcome back
      </h2>
      <p className="text-sm max-w-sm mt-2 text-neutral-300">
        Log In
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
      <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Username</Label>
          <Input id="username" placeholder="username" type="text" required={true}/>
        </LabelInputContainer>
        <p className="text-lg max-w-sm m-2 text-neutral-300">
          (or)
        </p>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="email" type="email" required={true}/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password" required={true}/>
        </LabelInputContainer>
        <button
          className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900  block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sign In &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
      <div className="text-center mb-2">
            <p>Don't have an account? <button className="underline font-semibold" onClick={()=>setMode(mode =>!mode)}>Register here.</button></p>
        </div>
    </div>
    </BackgroundGradient>
    </div>
  </div>  
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
