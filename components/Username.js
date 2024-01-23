"use client"
import React, { useState } from 'react'

import { Inter, Press_Start_2P, Roboto_Mono } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });
const press = Press_Start_2P({ subsets: ["latin"], weight: ['400'] });

export default function Username() {
    const [user, setUser] = useState('')

    //component shows progress bar in addition to next resource
    return (
        <div className='text-lg sm:text-xl md:text-2xl '>

            <input placeholder='Enter Username' value={user} onChange={(e) => setUser(e.target.value)} className={'py-2 bg-transparent  outline-none text-blue-300 focus:outline-none w-full flex-1  ' + press.className} />

        </div>
    )
}
