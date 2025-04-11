import React from 'react'
import MainWrapper from '@/components/MainWrapper';
import Link from 'next/link';
import Username from '@/components/Username';
import DATA from '../../public/roadmap.json'
import Chapters from '@/components/Chapters';

import { Inter, Press_Start_2P, Roboto_Mono } from "next/font/google";
import Question from '@/components/Question';
import BlueBtn from '@/components/BlueBtn';
import VideoCard from '@/components/VideoCard';
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
                <p className={' '}>Join over 25,000+ aspiring programmers following this roadmap to learn-to-code and land-a-developer-job 🔥 By completing this roadmap, you will:</p>
                <ul>
                    <li className='font-medium'>✅ Save $15,000 (average cost of a bootcamp)</li>
                    <li className='font-medium'>✅ Learn everything from the beginner that you need to become a 10x developer</li>
                    <li className='font-medium'>✅ Build numerous projects that will get your hired</li>
                </ul>
                <p className={' italic'}>If you're ever feeling stuck or overwhelmed, know that there is always help and assistance available in the GitHub repos for each course!</p>
                <Link href={'https://www.hyr.sh'} target='_blank'>
                    <BlueBtn btnText="Build a better resume ✅" noShadow />
                </Link>

            </div>

            {Object.keys(DATA.chapters).map((ele, eleIndex) => {

                return (
                    <div key={eleIndex} className='flex flex-col gap-2'>
                        <Chapters ele={ele} eleIndex={eleIndex} />
                        <h2 className={'specialShadow uppercase text-2xl ' + press.className}>{ele.replaceAll('_', ' ')}</h2>
                        {/* <p className=''>&rarr; {DATA.chapters[ele].description}</p> */}
                        {ele !== 'javascript' ? (
                            <>
                                <ul className='py-4 flex flex-col gap-4 '>
                                    {DATA.chapters[ele].resources.map((resource, resourceIndex) => {
                                        return (
                                            <li key={resourceIndex} className=''>
                                                <VideoCard {...resource} resourceIndex={`${resourceIndex + 1}`} />
                                            </li>
                                        )
                                    })}
                                </ul>
                                {/* {DATA?.chapters?.[ele]?.project && (
                                    <>
                                        <p><b className={' ' + press.className}>&rarr; Project</b> </p>
                                        <p>{DATA.chapters[ele].project}</p>
                                    </>
                                )} */}
                            </>
                        ) : (
                            <div className='py-4 flex flex-col gap-4'>
                                <p className='italic'>Learning JavaScript is a mighty beast, and there are two extremely brilliant pathways you could choose to follow on your conquest!</p>
                                <VideoCard name="🔥 The Complete JavaScript Course - Zero to Hero in 2024" link="https://youtu.be/qr6sKTzjlUo" duration="1hr" recommended="recommended" img_link="https://github.com/jamezmca/the-complete-javascript-course/raw/main/assets/thumbnail.jpg">
                                    <div className='flex items-center gap-4'>
                                        <Link href={'https://www.udemy.com/course/the-complete-javascript-course-zero-to-hero/?referralCode=F6229ABBDBD16EB43FA4'} target='_blank'>
                                            <BlueBtn btnText="Get the Full Course ⭐️" noShadow />
                                        </Link>
                                        <p>✦</p>
                                        <Link href={'https://github.com/jamezmca/the-complete-javascript-course'} target={'_blank'} className="flex items-center gap-4 duration-200 hover:text-blue-300">
                                            <i className={' text-lg fa-brands fa-github '}></i>
                                            <p className='hidden sm:inline'>GitHub</p>
                                        </Link>
                                        <p>✦</p>
                                        <Link href={'https://linkedin.com/company/smoljames-education'} target={'_blank'} className="flex items-center gap-4 duration-200 hover:text-blue-300">
                                            <i className={' text-lg fa-brands fa-linkedin '}></i>
                                            <p className='hidden sm:inline'>LinkedIn</p>
                                        </Link>
                                    </div>
                                </VideoCard>
                                <div className='flex items-center gap-4 pt-2'>
                                    <h5 className={'text-base  md:text-lg group-hover:text-blue-300 duration-200 ' + press.className}>
                                        &rarr;  Alternative Pathway
                                    </h5>
                                </div>
                                <VideoCard {...DATA.chapters[ele].resources[0]} img_link="https://yt3.googleusercontent.com/ytc/AIf8zZTDkajQxPa4sjDOW-c3er1szXkSAO-H9TiF4-8u_Q=s900-c-k-c0x00ffffff-no-rj" recommended="optional" />
                            </div>
                        )
                        }
                    </div >
                )
            })}

            <div className='flex flex-col gap-2'>
                <Chapters ele={'javascript'} eleIndex={6} />
                <h2 className={'specialShadow uppercase text-2xl ' + press.className}>Full Stack Development</h2>
                <div className='flex flex-col aspect-video'>
                    <iframe className='w-full h-full' src="https://www.youtube.com/embed/dKch_WrYwd4?si=5Q-Y3_FCTtzwwvSs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
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

        </MainWrapper >
    )
}
