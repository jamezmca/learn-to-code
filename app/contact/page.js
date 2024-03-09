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

export default function ContactPage() {
    return (
        <MainWrapper>
            <div className='flex flex-col gap-6'>
                <h2 className={'text-3xl textGradient ' + press.className}>
                    Share your success!
                </h2>
                <p className='text-blue-300'><span className='text-blue-200 font-bold'>Have you got a success story you would like to share?</span> It could be that you have landed a job, or that you feel confident with a new framework or language! Let me know - I would love to hear 🔥 </p>

            </div>
            <div className='flex flex-col gap-4'>
                <div className='grid grid-cols-2 gap-4'>
                    <input  className='resize-none bg-transparent border-none outline-none'/>
                    <input  className='resize-none bg-transparent border-none outline-none'/>
                </div>
                <textarea className='resize-none bg-transparent border-none outline-none'></textarea>
            </div>
            <Link href={'https://www.linkedin.com/company/smoljames-education'} target="_blank" className=''>
                <BlueBtn btnText="Submit ⭐️" lg noShadow />
            </Link>
        </MainWrapper>
    )
}
