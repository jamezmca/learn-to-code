import BlueBtn from '@/components/BlueBtn';
import MainWrapper from '@/components/MainWrapper'
import { Press_Start_2P } from 'next/font/google';
import Link from 'next/link';
import React from 'react'

const press = Press_Start_2P({ subsets: ["latin"], weight: ['400'] });

export const metadata = {
    title: "Smoljames ⋅ Coaching",
    description: "Become a 10x super hyper mega developer today with these amazing learn to code courses.",
};

const objectives = [
    'Learn to Code Guidance ⭐️',
    'Career Advising 💛',
    'Project Feedback 🔥',
    'Technical Consulting ⚡️',
    'Personal Mentorship 🎉',
    'Job Hunting Coaching 🏆'
]

export default function CoachingPage() {
    return (
        <MainWrapper>
            <div className='flex flex-col gap-6'>
                <h2 className={'text-3xl textGradient ' + press.className}>
                    COACHING
                </h2>
                <p className='text-blue-300'>Book a <span className='text-blue-200 font-bold'>1-on-1 coaching & mentorship</span>  session today :P Send me a message on my LinkedIn and we can organize a call!</p>
                <Link href={'https://www.linkedin.com/company/smoljames-education'} target="_blank" className=''>
                    <BlueBtn btnText="Book a session ✅" lg />
                </Link>
            </div>
            <div className='flex flex-col gap-6'>
                <h3 className={'text-blue-300  ' + press.className}>✦ Pricing ✦</h3>
                <p className='text-blue-300'><b>Hourly Rate</b> $140USD</p>
            </div>
            <div className='flex flex-col gap-6'>
                <h3 className={'text-blue-300  ' + press.className}>✦ Objectives ✦</h3>
                <ul className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    {objectives.map((objective, objectiveIndex) => {
                        return (
                            <div key={objectiveIndex} className='flex flex-col border border-solid hover:border-blue-700 duration-200 border-blue-900 rounded-lg'>
                                {/* <i className="fa-solid fa-check text-emerald-300 pr-2"></i> */}
                                <p className='p-2 text-center rounded'>{objective}</p>
                            </div>
                        )
                    })}
                </ul>
            </div>
        </MainWrapper>
    )
}
