'use client'
import { Press_Start_2P } from 'next/font/google';
import Link from 'next/link';
import React from 'react'
import BlueBtn from './BlueBtn';
const press = Press_Start_2P({ subsets: ["latin"], weight: ['400'] });


export default function ResumeSignup() {
    return (
        <div className="flex items-center flex-wrap gap-4 gap-y-2 text-base sm:text-lg">
            <p className='font-medium'> Free resume review 🔥</p>
            <Link target='_blank' href={'https://www.hyr.sh/feedback'}>
                <BlueBtn btnText="Follow these instructions ✅" />
            </Link>
            {/* <p className='font-medium'> Get hired faster 🔥</p>
            <Link target='_blank' href={'https://www.hyr.sh'}>
                <BlueBtn btnText="Create free resume ✅" />
            </Link> */}
            {/* <Link href={'/blog/land_a_job'} className="bg-blue-950 text-blue-100 rounded-lg btnBorder relative grid place-items-center p-4">
                <p className={'text-xl ' + press.className}>Land a Job</p>
            </Link> */}

            {/* <div className='flex bg-slate-900'>
                <input className={'bg-transparent p-2 pl-3   border-none outline-none w-full ' + press.className} placeholder='Enter email...' />
                <button className='px-3 hover:scale-125 duration-200'>&rarr;</button>
            </div> */}
        </div>
    )
}
