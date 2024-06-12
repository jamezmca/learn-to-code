import MainWrapper from '@/components/MainWrapper'
import React from 'react'

import { Inter, Press_Start_2P, Roboto_Mono } from "next/font/google";
const space = Roboto_Mono({ subsets: ["latin"], weight: ['400', '700'] });
// const inter = Inter({ subsets: ["latin"] });
const press = Press_Start_2P({ subsets: ["latin"], weight: ['400'] });

export const metadata = {
    title: "Smoljames ⋅ Portfolio",
    description: "Why hello there general kenobi.",
};

export default function PortfolioPage() {

    let projects = [
        {
            bio: 'Swolenormous is a SvelteKit & TailwindCSS fitness app to turn you into a mass monstrosity.',
            github: 'https://github.com/jamezmca/swolenormous',
            link: 'https://www.swolenormous.smoljames.com',
            image: 'https://d33wubrfki0l68.cloudfront.net/64a75621ec4dcb000841c43b/screenshot_2023-07-07-00-03-11-0000.png',
            date: 'Jan 24, 2024'
        },
        {
            bio: 'AI-LTR is SvelteKit & TailwindCSS a platform that aids you with prompt generation to develop the ultimate cover letters with ChatGPT.',
            github: 'https://github.com/jamezmca/cvrltr',
            link: 'https://www.ai-ltr.smoljames.com',
            image: 'ailtr.png',
            date: 'Oct 01, 2023'
        },
        {
            bio: 'Betternotes is a platform that using Transformer.js & HuggingFace ML models in a React.JS app w. Firebase Auth + DB to transcribe audio to text in the browser.',
            github: '',
            link: 'https://www.betternotes.smoljames.com',
            image: 'https://d33wubrfki0l68.cloudfront.net/64bf5d4147e8750007add880/screenshot_2023-07-25-05-28-05-0000.png',
            date: 'Oct 24, 2023'
        },
        {
            bio: 'After School Maths is an educational platform built with Next.js TailwindCSS & Firebase w. the ChatGPT API integrated to make personalized learning and assistance accessable for all.',
            github: '',
            link: 'https://www.afterschoolmaths.co.nz',
            image: 'https://d33wubrfki0l68.cloudfront.net/651f36e50766aa0008df3d8c/screenshot_2023-10-05-22-23-27-0000.png',
            date: 'Feb 23, 2022'
        },
        {
            bio: 'Becky Bradley Counselling is a SvelteKit & TailwindCSS therapy landing page.',
            github: 'https://github.com/jamezmca/rebecca-v2',
            link: 'https://www.beckybradleycounselling.com',
            image: 'https://screenshot-proxy.netlify.app/f_avif,fit_cover,s_1920x1200/https://d33wubrfki0l68.cloudfront.net/65ad9d80c25c860008f06c06/screenshot_2024-01-21-22-41-38-0000.webp',
            date: 'Jan 14, 2023'
        },
    ]
    return (
        <MainWrapper>
            <div className='flex flex-col gap-4'>
                <h2 className={'text-3xl  ' + press.className}>James McArthur</h2>
                <p className='text-blue-300'>I write code & build projects :P</p>
            </div>
            <div className='flex flex-col sm:flex-row sm:items-stretch gap-8 text-blue-300'>
                <img className='rounded-full w-32' src='https://media.licdn.com/dms/image/C5603AQG6Q4W3kWANtw/profile-displayphoto-shrink_800_800/0/1630988413596?e=1723680000&v=beta&t=9F4EsCzPPgzq8PTr9OaFqE66keMkUA2uvOvyP9kW0QE' alt='profile-img' />
                <div className='flex flex-col gap-2 text-base sm:text-lg'>
                    <div className='flex items-center flex-1 gap-2 '>
                        <div className='grid place-items-center w-8'>
                            <i className="fa-brands fa-youtube"></i>
                        </div>
                        <p className="">21,000 YouTube Subscibers</p>
                    </div>
                    <div className='flex items-center flex-1 gap-2 '>
                        <div className='grid place-items-center w-8'>

                            <i className="fa-brands fa-github"></i>
                        </div>
                        <p className="">268 GitHub Followers</p>
                    </div>
                    <div className='flex items-center flex-1 gap-2 '>
                        <div className='grid place-items-center w-8'>

                            <i className="fa-solid fa-arrow-trend-up"></i>
                        </div>
                        <p className="">600,000+ YouTube Views</p>
                    </div>
                </div>
            </div>
            <p>Hi, I'm James, a software developer who loves building cool things with code. In addition to coding, I also make YouTube videos where I teach people how to program and I love going to the gym, reading & video games too.</p>
            <div className='text-blue-300 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-8'>
                <a href="mailto:jamesismathematicool@gmail.com" className="hover:text-blue-100 duration-200 flex items-center gap-4">
                    <i className="fa-solid fa-arrow-right -rotate-45"></i>
                    <p>Email me</p>
                </a>
                <a className='hover:text-blue-100 duration-200' href='https://www.linkedin.com/in/jamezmcarthur/' target='_blank'>LinkedIn</a>
                <a className='hover:text-blue-100 duration-200' href='https://github.com/jamezmca' target='_blank'>GitHub</a>
            </div>
            <section className="flex flex-col gap-10">
                <h2 className={'text-2xl text-blue-300  ' + press.className}>Latest Projects</h2>
                {projects.map((project, projectIndex) => {
                    return (
                        <div key={projectIndex} className="flex items-start gap-4">
                            <div className='flex flex-col gap-2'>
                                <p className="text-blue-300">{project.date}</p>
                                <p>{project.bio}</p>
                                <div className="flex items-center gap-4">
                                    {project?.github && (<a target="_blank" href="https://www.swolenormous.smoljames.com" className="flex items-center gap-2 hover:text-blue-300 duration-200">
                                        <div>
                                            <i className="fa-brands fa-github"></i>
                                        </div>
                                        <p className="">GitHub</p>
                                    </a>)}
                                    {project?.link && (<a target="_blank" href={project.link} className="flex items-center gap-2 hover:text-blue-300 duration-200">
                                        <div>
                                            <i className="fa-solid fa-bolt"></i>
                                        </div>
                                        <p className="">Live</p>
                                    </a>)}
                                </div>
                            </div>
                            <div className='flex items-center justify-center max-w-36 sm:max-w-44 md:max-w-56 rounded-lg overflow-hidden aspect-video'>
                                <img className='w-full h-full object-fit' src={project.image} alt={'project-img'} />
                            </div>
                        </div>
                    )
                })}
            </section>
        </MainWrapper>
    )
}
