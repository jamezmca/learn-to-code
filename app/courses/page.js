import MainWrapper from '@/components/MainWrapper'
import React from 'react'

import { Inter, Press_Start_2P, Roboto_Mono } from "next/font/google";
import Plaque from '@/components/Plaque';
import getPostMetadata from '@/components/getPostMetadata';
import Link from 'next/link';
const space = Roboto_Mono({ subsets: ["latin"], weight: ['400', '700'] });
// const inter = Inter({ subsets: ["latin"] });
const press = Press_Start_2P({ subsets: ["latin"], weight: ['400'] });

export const metadata = {
    title: "Smoljames ⋅ Courses",
    description: "Join 10,000+ programmers following our modern courses where we learn to code by building fun and cool projects.",
};




export default function CoursesPage() {
    const postMetadata = getPostMetadata('courses');

    // okay so each md course needs some data, which includes fireship pro stuff, and just take them to a course page that has the youtube url at the bottom

    let planBenefits = [
        'Unlimited access to PRO courses on YouTube',
        'Hands on exercises',
        'Premium educational material',
        'Learn at your own pace',
        'Invite to private Discord chat'
    ]

    let courses = [
        {
            name: 'The Complete JavaScript Course',
            description: 'Zero to Hero in 2024 🔥',
            link: 'https://www.udemy.com/course/the-complete-javascript-course-zero-to-hero/?referralCode=F6229ABBDBD16EB43FA4',
            imgLink: 'https://github.com/jamezmca/the-complete-javascript-course/blob/main/assets/thumbnail.jpg?raw=true',
            status: 'Complete',
            tags: [['pro', 'bg-emerald-400', 'text-white'], ['javascript', '', 'text-yellow-300'], ['nodejs', '', 'text-green-300']],
        },
        {
            name: 'React.JS & Firebase Full Stack Development - Full Course',
            description: 'Learn Full Stack development with React.JS & Firebase by building a mood tracker app.',
            link: 'https://www.udemy.com/course/the-complete-javascript-course-zero-to-hero/?referralCode=F6229ABBDBD16EB43FA4',
            imgLink: 'https://github.com/jamezmca/the-complete-javascript-course/blob/main/assets/thumbnail.jpg?raw=true',
            status: '',
            tags: [['pro', 'bg-emerald-400', 'text-white'], ['javascript', '', 'text-yellow-300'], ['nodejs', '', 'text-green-300']],
        },
        {
            name: 'The Ultimate Guide to Landing a Job as a Software Developer',
            description: 'Zero to Hero in 2024 🔥',
            link: 'https://www.udemy.com/course/the-complete-javascript-course-zero-to-hero/?referralCode=F6229ABBDBD16EB43FA4',
            imgLink: 'https://github.com/jamezmca/the-complete-javascript-course/blob/main/assets/thumbnail.jpg?raw=true',
            status: '',
            tags: [['pro', 'bg-emerald-400', 'text-white'], ['javascript', '', 'text-yellow-300'], ['nodejs', '', 'text-green-300']],
        },
        {
            name: 'Build a Profitable Full Stack Saas App with Next.JS 14, Stripe & AI',
            description: 'Zero to Hero in 2024 🔥',
            link: 'https://www.udemy.com/course/the-complete-javascript-course-zero-to-hero/?referralCode=F6229ABBDBD16EB43FA4',
            imgLink: 'https://github.com/jamezmca/the-complete-javascript-course/blob/main/assets/thumbnail.jpg?raw=true',
            status: '',
            tags: [['pro', 'bg-emerald-400', 'text-white'], ['javascript', '', 'text-yellow-300'], ['nodejs', '', 'text-green-300']],
        },
        {
            name: 'Learn Backend Development with Node.JS Express PostgreSQL & Docker',
            description: 'Zero to Hero in 2024 🔥',
            link: 'https://www.udemy.com/course/the-complete-javascript-course-zero-to-hero/?referralCode=F6229ABBDBD16EB43FA4',
            imgLink: 'https://github.com/jamezmca/the-complete-javascript-course/blob/main/assets/thumbnail.jpg?raw=true',
            status: '',
            tags: [['pro', 'bg-emerald-400', 'text-white'], ['javascript', '', 'text-yellow-300'], ['nodejs', '', 'text-green-300']],
        },
        {
            name: 'Build a Full Stack Market Place App w. Next.JS & Supabase',
            description: 'Zero to Hero in 2024 🔥',
            link: 'https://www.udemy.com/course/the-complete-javascript-course-zero-to-hero/?referralCode=F6229ABBDBD16EB43FA4',
            imgLink: 'https://github.com/jamezmca/the-complete-javascript-course/blob/main/assets/thumbnail.jpg?raw=true',
            status: '',
            tags: [['pro', 'bg-emerald-400', 'text-white'], ['javascript', '', 'text-yellow-300'], ['nodejs', '', 'text-green-300']],
        },
        {
            name: 'The Ultimate Guide to Backend Development for Beginners',
            description: 'Node.JS typeorm PostgreSQL & Docker',
            link: 'https://www.udemy.com/course/the-complete-javascript-course-zero-to-hero/?referralCode=F6229ABBDBD16EB43FA4',
            imgLink: 'https://github.com/jamezmca/the-complete-javascript-course/blob/main/assets/thumbnail.jpg?raw=true',
            status: '',
            tags: [['pro', 'bg-emerald-400', 'text-white'], ['javascript', '', 'text-yellow-300'], ['nodejs', '', 'text-green-300']],
        },
        {
            name: 'Beginners Guide to Full Stack Development',
            description: 'Node.JS typeorm PostgreSQL & Docker',
            link: 'https://www.udemy.com/course/the-complete-javascript-course-zero-to-hero/?referralCode=F6229ABBDBD16EB43FA4',
            imgLink: 'https://github.com/jamezmca/the-complete-javascript-course/blob/main/assets/thumbnail.jpg?raw=true',
            status: '',
            tags: [['pro', 'bg-emerald-400', 'text-white'], ['javascript', '', 'text-yellow-300'], ['nodejs', '', 'text-green-300']],
        },
        {
            name: 'Network Requests for Beginners',
            description: 'How Computers Communicate',
            link: 'https://www.udemy.com/course/the-complete-javascript-course-zero-to-hero/?referralCode=F6229ABBDBD16EB43FA4',
            imgLink: 'https://github.com/jamezmca/the-complete-javascript-course/blob/main/assets/thumbnail.jpg?raw=true',
            status: '',
            tags: [['pro', 'bg-emerald-400', 'text-white'], ['javascript', '', 'text-yellow-300'], ['nodejs', '', 'text-green-300']],
        },
    ]

    return (
        <MainWrapper>
            <div className='flex flex-col gap-4'>
                <h2 className={'text-3xl  ' + press.className}>
                    BECOME AN <span className='textGradient'>AWESOME</span> DEVELOPER!
                </h2>
                <p className='text-blue-300'>All the <span className='text-blue-200 font-bold'>coding courses</span> you need to become a pro developer <span className='text-blue-200 font-bold'>in one place</span> 🔥</p>
            </div>
            {/* <Plaque benefits={planBenefits} name={'SmolDev'} price={29} link={'https://www.youtube.com/channel/UCPBK_brqoVQtO-fOWpxQGXw/join'} /> */}
            <div className='flex items-center gap-4'>

                <h2 className={'text-3xl  ' + press.className}>
                    COURSES
                </h2>
                <div className='bg-blue-200 h-2 flex-1'></div>
            </div>
            {/* <p>
                Whether you want to excel in web development, mobile development or strengthen your fundamental software engineering skills, there is a course for you.
            </p> */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                {postMetadata.map((course, courseIndex) => {
                    return (
                        <Link href={'/courses/' + course.slug} className='rounded-lg bg-slate-900 border border-solid border-slate-800 overflow-hidden cursor-pointer hover:scale-[105%] duration-200 flex flex-col' key={courseIndex} >
                            <img src={`https://i.ytimg.com/vi/${course.img}/hqdefault.jpg`} alt={`${course.title}_name`} className='w-full aspect-video object-cover' />

                            {/* <div className='flex flex-col relative h-fit'>
                                {course.status != 'Complete' && (
                                    <div className='absolute inset-0 z-10 grid place-items-center'>
                                        <div className='absolute inset-0 bg-slate-900 opacity-60' />
                                        <h2 className={'text-lg text-blue-200 rotate-[-20deg] ' + press.className}>
                                            Coming soon!
                                        </h2>
                                    </div>
                                )}
                            </div> */}
                            <div className='flex flex-col gap-4 p-4'>
                                <h2 className={'text-lg text-blue-200 ' + press.className}>
                                    {course.title}
                                </h2>
                                <p className='text-blue-300'>{course.subtitle}</p>
                                {/* <div className='flex items-center gap-2 flex-wrap'>
                                    {course.tags.map((tag, tagIndex) => {
                                        return (
                                            <div className={'px-2 py-1.5  rounded-md ' + ` ${tag[1] ? tag[1] : 'bg-slate-950'}`} key={tagIndex}>
                                                <p className={'text-xs ' + tag[2]}>#{tag[0]}</p>
                                            </div>
                                        )
                                    })}
                                </div> */}
                            </div>
                        </Link>
                    )
                })}
            </div>
        </MainWrapper>
    )
}
