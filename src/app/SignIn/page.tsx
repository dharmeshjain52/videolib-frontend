'use client'
import React from "react";
import { SignUpForm } from "../Components/SignInForm";
import Link from 'next/link'
import { IconAugmentedReality } from "@tabler/icons-react";

export default function SignIn(){
    return(
        <main className="min-h-screen bg-black text-white antialiased">
            <div 
            className="min-h-screen flex flex-col gap-8 items-center justify-center"
            >
                 <Link
                    href={'/'}
                    className="flex flex-row items-center justify-start gap-4" 
                >
                    <IconAugmentedReality size={55} className="h-fit w-fit"/>
                    <h1 className="max-lg:hidden xl:text-3xl text-neutral-400 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">VIDEOLIB</h1>   
                </Link>
                <SignUpForm/>
            </div>
        </main>
    )
}