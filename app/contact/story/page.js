'use client'
import BlueBtn from '@/components/BlueBtn';
import MainWrapper from '@/components/MainWrapper'
import SuccessForm from '@/components/SuccessForm';
import { Press_Start_2P } from 'next/font/google';
import Link from 'next/link';
import React from 'react'

const press = Press_Start_2P({ subsets: ["latin"], weight: ['400'] });

// export const metadata = {
//     title: "Smoljames ⋅ Coaching",
//     description: "Become a 10x super hyper mega developer today with these amazing learn to code courses.",
// };

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
            <SuccessForm />
        </MainWrapper>
    )
}
