import React from 'react'

import { Inter, Press_Start_2P, Roboto_Mono } from "next/font/google";
import Link from 'next/link';
// const inter = Inter({ subsets: ["latin"] });
const press = Press_Start_2P({ subsets: ["latin"], weight: ['400'] });

export default function Question(props) {
    const { question, link, linkText, target, answer } = props
    return (
        <div className='flex flex-col gap-2'>
            <h3 className={'text-base sm:text-lg ' + press.className}> {question}</h3>
            <p className=''>{answer}</p>
            {link && (
                <>

                    <Link
                        href={link} target={target || ''}
                        className="p-[1.5px] w-fit my-2 rounded-lg relative group"
                    >
                        <div
                            className={"absolute inset-0 blueBorder duration-500 rounded-lg "}
                        />


                        <div
                            className={"absolute -inset-2 blur-xl blueBorder opacity-20 duration-500 rounded-lg "}
                        />
                        <p
                            className="bg-white dark:bg-slate-950 text-xs sm:text-sm px-2 py-1 z-1 group-hover:bg-transparent group-hover:text-white duration-200 relative rounded-lg"
                        >
                            {linkText}
                        </p>
                    </Link>
                </>
            )}
        </div>
    )
}
