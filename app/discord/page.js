import BlueBtn from '@/components/BlueBtn';
import MainWrapper from '@/components/MainWrapper'
import { Press_Start_2P } from 'next/font/google';
import Link from 'next/link';
import React from 'react'

const press = Press_Start_2P({ subsets: ["latin"], weight: ['400'] });

export const metadata = {
    title: "Smoljames ⋅ Discord",
    description: "Learn how to access the Smoljames Coding Discord channel.",
};

export default function DiscordPage() {
    return (
        <MainWrapper>
            <div className='flex flex-col gap-6'>
                <h2 className={'text-3xl textGradient ' + press.className}>
                    Discord
                </h2>
                <p className='text-blue-300'><i className="fa-solid fa-triangle-exclamation pr-2 text-pink-400"></i>To preserve the quality of the Smoljames Discord channel, I have decided to make it a <span className='text-blue-200 font-bold'>private community</span> for channel members!</p>

                <Link href={'https://www.linkedin.com/company/smoljames-education'} target="_blank" className='mr-auto'>
                    <BlueBtn btnText="Become a member ✅" lg />
                </Link>
            </div>
            <div className='flex flex-col gap-6'>
                <h3 className={'text-blue-300  ' + press.className}>✦ Change Log - READ ME ✦</h3>
                <p className='text-blue-300'><b className='text-blue-200'>Old Discord</b><br /> The old channel has been officially shut down.</p>
                <p className='text-blue-300'><b className='text-blue-200'>Tutorial Questions</b> <br />For questions related to the YouTube tutorials, you may either ask them in the private Discord channel for a quick response, or create an <span className='text-blue-200 font-bold'>Issue</span> on the GitHub repo with the label <i>Help Wanted</i> or <i>Question</i>. </p>
            </div>
        </MainWrapper>
    )
}
