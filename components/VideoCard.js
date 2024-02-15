import Link from 'next/link'
import React from 'react'

export default function VideoCard(props) {
    const { link, name, duration, recommended, children, video_id, resourceIndex, img_link } = props
    return (
        <div className='flex flex-col gap-4'>
            <Link href={link} target='_blank' className='flex items-start gap-4 group'>
                <div className='flex flex-col gap-2 flex-1'>
                    <h5 className={'text-base md:text-lg group-hover:text-blue-300 duration-200 ' + (recommended === 'recommended' ? 'text-white' : '')}>
                        {resourceIndex ? (`${resourceIndex}. `) : ''}{name}
                    </h5>
                    <div className='flex items-center justify-between gap-2 text-xs sm:text-sm'>
                        <div className='flex items-center gap-2'>
                            <p><strong className='font-bold'>Duration</strong></p>
                            <p className=''>{duration}</p>
                        </div>
                        {recommended && (
                            <div className={'rounded-xl w-fit px-2 font-light py-0.5 flex items-center justify-center  text-white ' + (recommended === 'recommended' ? 'bg-green-400' : 'bg-blue-400')}>
                                {recommended === 'recommended' ? (
                                    <p className='text-xs normShadow'>Recommended</p>
                                ) : (
                                    <p className='text-xs '>Optional</p>
                                )}
                            </div>
                        )}
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center aspect-video max-w-32 sm:max-w-40 overflow-hidden rounded-md'>
                    <img className='w-full h-full object-cover' src={img_link ? img_link : video_id ? `https://i.ytimg.com/vi/${video_id}/hqdefault.jpg` : 'https://yt3.googleusercontent.com/jDkmkuUvuG1tNDIYiBJq7_l1DWw2e6uA4po--mjWnqRycF4kIg9luunDBiUaWesKOLxdWxRV=w2120-fcrop64=1,00000000ffffffff-k-c0xffffffff-no-nd-rj'} alt={`video-thumbnail-${name}`} />
                </div>
            </Link>
            {children}
        </div>
    )
}
