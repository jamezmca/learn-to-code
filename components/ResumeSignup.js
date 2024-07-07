'use client'
import { Press_Start_2P } from 'next/font/google';
import React from 'react'
const press = Press_Start_2P({ subsets: ["latin"], weight: ['400'] });


export default function ResumeSignup() {
    return (
        <div className="flex flex-col gap-4">
            <p className='text-base sm:text-lg'>Sign up to access the resume that got me hired ✅</p>
            <div className='flex bg-slate-900'>
                <input className={'bg-transparent p-2 pl-3   border-none outline-none w-full ' + press.className} placeholder='Enter email...' />
                <button className='px-3 hover:scale-125 duration-200'>&rarr;</button>
            </div>
        </div>
    )
}
