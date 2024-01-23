import React from 'react'
import MainWrapper from '@/components/MainWrapper';
import Link from 'next/link';
import Username from '@/components/Username';
import DATA from '../../public/roadmap.json'
import Chapters from '@/components/Chapters';

import { Inter, Press_Start_2P, Roboto_Mono } from "next/font/google";
import Question from '@/components/Question';
// const inter = Inter({ subsets: ["latin"] });
const press = Press_Start_2P({ subsets: ["latin"], weight: ['400'] });

export const metadata = {
    title: "Roadmap ⋅ Learn To Code",
    description: "Learn to code for free and land your Software Developer job 🔥 Get all the best learning resources for programming and gain the skills you need to land your job.",
};

export default function RoadmapPage() {

    return (
        <MainWrapper>
            <div className="flex flex-col gap-2">
                <h2 className={'text-3xl text-white  ' + press.className}>Welcome to the Roadmap</h2>
                <p className={' '}>&rarr; Learn to Code & Land a Job 🔥</p>
            </div>

            {Object.keys(DATA.chapters).map((ele, eleIndex) => {
                return (
                    <div key={eleIndex} className='flex flex-col gap-2'>
                        <Chapters ele={ele} eleIndex={eleIndex} />
                        <h2 className={'specialShadow uppercase text-2xl ' + press.className}>{ele.replaceAll('_', ' ')}</h2>
                        {/* <p className=''>&rarr; {DATA.chapters[ele].description}</p> */}
                        <ul className='py-4 flex flex-col gap-4 '>
                            {DATA.chapters[ele].resources.map((resource, resourceIndex) => {
                                // accessVideoId(resource.link)
                                return (
                                    <li key={resourceIndex} className=''>
                                        <Link href={resource.link} target='_blank' className='flex items-start gap-4 group'>
                                            <div className='flex flex-col gap-2 flex-1'>

                                                <h5 className='text-base md:text-lg group-hover:text-blue-300 duration-200'>
                                                    {resourceIndex + 1}. {resource.name}
                                                </h5>
                                                <div className='flex items-center justify-between gap-2 text-xs sm:text-sm'>
                                                    <div className='flex items-center gap-2'>
                                                        <p><strong className='font-bold'>Duration</strong></p>
                                                        <p className=''>{resource.duration}</p>
                                                    </div>
                                                    {/* <div className='flex items-center gap-2'>
                                                        <p><strong className='font-bold'>Order</strong></p>
                                                        <p className=''>{resourceIndex + 1}</p>
                                                    </div> */}
                                                    {/* <div className='flex items-center gap-2'>
                                                        <p><strong className='font-bold'>Status</strong></p>
                                                        <p className=''>{resourceIndex + 1}</p>
                                                    </div> */}
                                                </div>
                                            </div>
                                            <div className='flex flex-col items-center justify-center aspect-video max-w-32 sm:max-w-40 overflow-hidden rounded-md'>
                                                <img className='w-full h-full object-cover' src={resource?.video_id ? `https://i.ytimg.com/vi/${resource.video_id}/hqdefault.jpg` : 'https://yt3.googleusercontent.com/jDkmkuUvuG1tNDIYiBJq7_l1DWw2e6uA4po--mjWnqRycF4kIg9luunDBiUaWesKOLxdWxRV=w2120-fcrop64=1,00000000ffffffff-k-c0xffffffff-no-nd-rj'} alt={`video-thumbnail-${resource.name}`} />
                                            </div>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                        <p><b className={' ' + press.className}>&rarr; Project</b> </p>
                        <p>{DATA.chapters[ele].project}</p>
                    </div>
                )
            })}

            <h2 className={'text-2xl text-white specialShadow  ' + press.className}>Projects</h2>

            <div className='flex flex-col gap-8'>
                <div className='flex flex-col gap-2'>
                    <h2 className={'text-g   ' + press.className}>Recommended</h2>
                    {DATA.projects.recommendations.map((e, eIndex) => {
                        return (
                            <div key={eIndex}><p>· {e}</p></div>
                        )
                    })}
                </div>
                <div className='flex flex-col gap-2'>
                    <h2 className={'text-g   ' + press.className}>Full Stack</h2>
                    {DATA.projects.full_stack.map((e, eIndex) => {
                        return (
                            <Link href={e.link} target='_blank' key={eIndex} className='duration-200 hover:text-blue-300'><p><i className="fa-solid fa-arrow-right -rotate-45 pr-2"></i> {e.name}</p></Link >
                        )
                    })}
                </div>
                <div className='flex flex-col gap-2'>
                    <h2 className={'text-g   ' + press.className}>Frontend</h2>
                    {DATA.projects.frontend.map((e, eIndex) => {
                        return (
                            <Link href={e.link} target='_blank' key={eIndex} className='duration-200 hover:text-blue-300'><p><i className="fa-solid fa-arrow-right -rotate-45 pr-2"></i> {e.name}</p></Link >
                        )
                    })}
                </div>
                <div className='flex flex-col gap-2'>
                    <h2 className={'text-g   ' + press.className}>Backend</h2>
                    {DATA.projects.backend.map((e, eIndex) => {
                        return (
                            <Link href={e.link} target='_blank' key={eIndex} className='duration-200 hover:text-blue-300'><p><i className="fa-solid fa-arrow-right -rotate-45 pr-2"></i> {e.name}</p></Link >
                        )
                    })}
                </div>
            </div>


            <Link href={'/blog/land_a_job'} className="bg-blue-950 text-blue-100 rounded-lg btnBorder relative grid place-items-center p-4">
                <p className={'text-xl ' + press.className}>Land a Job</p>
            </Link>

            <div className='flex flex-col gap-4'>
                <h2 className={'text-2xl text-white specialShadow  ' + press.className}>Frequently Asked Questions</h2>
                <p>For those with questions, qualms or queries.</p>
            </div>

            <Question question={'When can I start?'} answer='No better time to start than today!' link={'https://youtu.be/70T2GMDKl6M'} target={'_blank'} linkText="Start learning now 🔥"></Question>
            <Question question={'Is the course relevant in 2024?'} answer={'Absolutely - It receives constant updates to ensure it remains relevant to the current day :P'} ></Question>
            <Question question={'Is there a support community?'} answer={"There's a huge community here to support you on your coding journey at every step of the way. We're pretty active in the Discord channel which you might like to join!"} link={'https://discord.gg/BYr6gujs4k'} target={'_blank'} linkText="Join the Discord!"></Question>
            <Question question={'Do I need any prior programming experience?'} answer={'No programming experience is required to get started with this roadmap! It\'s Zero to Hero.'} ></Question>
            <Question question={'How do I stay notified for new releases?'} answer='Be sure to subscribe to the newsletter where each release will be announced, and turn on your notification bell for the Smoljames channel on YouTube.' link={'https://smoljames.beehiiv.com/subscribe'} target={'_blank'} linkText="Subscribe ->"></Question>
            {/* ◊ */}
            {/* <h2 className={'text-2xl text-white  ' + press.className}>Feeling Stuck?</h2> */}

            <p className='text-center'>Together we can become great developers ⚡️</p>

        </MainWrapper>
    )
}
