"use client"
import React, { useState, useEffect } from 'react'
import DATA from '../public/roadmap.json'

import { Inter, Press_Start_2P, Roboto_Mono } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });
const press = Press_Start_2P({ subsets: ["latin"], weight: ['400'] });

export default function Chapters(props) {
    const { eleIndex, ele } = props

    const [completed, setCompleted] = useState([])

    let resources = DATA.chapters[ele].resources

    function handleToggleResource(valIndex) {
        let newData = []
        if (completed.includes(valIndex)) {
            newData = completed.filter(i => i !== valIndex)
        } else {
            newData = [...completed, valIndex]
        }

        setCompleted(newData)
        let tempData = JSON.parse(localStorage.getItem('roadmap') || "{}")
        tempData[eleIndex] = newData.join(',')
        localStorage.setItem('roadmap', JSON.stringify(tempData))
        console.log(completed)
    }


    useEffect(() => {
        let tempData = JSON.parse(localStorage.getItem('roadmap') || "{}")
        if (eleIndex in tempData) {
            setCompleted(tempData[eleIndex].split(',').filter(val => val !== '').map(val => parseInt(val)))
        }
    }, [])


    return (
        <div className={'flex items-stretch duration-200  mb-4 ' + (completed.length === resources.length ? ' bg-blue-300 text-white ' : ' text-[#030615] bg-white ') + press.className}>

            <p className={' py-1 px-2 sm:hidden '}>Ch 0{eleIndex}</p>
            <p className={' py-1 px-2 sm:inline hidden  '}>Chapter 0{eleIndex}</p>
            <div className=' w-4 bg-[#030615]'></div>
            <div className='flex items-stretch flex-1 bg-[#030615] gap-1'>
                {[...Array(resources.length).keys()].map((val, valIndex) => {
                    return (
                        <button onClick={() => handleToggleResource(valIndex)} key={valIndex} className={'flex-1 duration-200 grid place-items-center ' + (completed.includes(valIndex) ? ' bg-blue-300 text-white ' : ' bg-white hover:bg-blue-300 hover:text-white')}>
                            <p className=''>{valIndex + 1}</p>
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
