'use client'
import { Press_Start_2P } from 'next/font/google';
import React, { useEffect, useState } from 'react'
const press = Press_Start_2P({ subsets: ["latin"], weight: ['400'] });


//MILLI SECOND STARTS THURSDAY JAN 1ST 1970 00:00 HOURS
const offsetToSaturday = 172800000; // event happens at 7AM Sunday (NZT) | 2PM Saturday (EDT) | 6PM Saturday (UTC)
const offsetToSaturdayArvo = 64800000;
const millisecondsPerWeek = 604800000;
const millisecondsPerDay = millisecondsPerWeek / 7;
const millisecondsPerHour = millisecondsPerDay / 24;
const millisecondsPerMinute = millisecondsPerHour / 60;
const millisecondsPerSecond = millisecondsPerMinute / 60;

export default function Countdown() {
    const [timer, setTimer] = useState('')

    const countdown = () => {
        const currTime = new Date().getTime();
        const distance = currTime - offsetToSaturday - offsetToSaturdayArvo;
        const remainder =
            millisecondsPerWeek - (distance % millisecondsPerWeek);

        let daysToGo = Math.floor(remainder / millisecondsPerDay);
        let hoursToGo = Math.floor(
            (remainder - daysToGo * millisecondsPerDay) / millisecondsPerHour
        );
        let minutesToGo = Math.floor(
            (remainder -
                (daysToGo * millisecondsPerDay +
                    hoursToGo * millisecondsPerHour)) /
            millisecondsPerMinute
        );
        let secondsToGo = Math.floor(
            (remainder -
                (daysToGo * millisecondsPerDay +
                    hoursToGo * millisecondsPerHour +
                    minutesToGo * millisecondsPerMinute)) /
            millisecondsPerSecond
        );
        setTimer(`${daysToGo < 10 ? `0${daysToGo}` : daysToGo}:${hoursToGo < 10 ? `0${hoursToGo}` : hoursToGo}:${minutesToGo < 10 ? `0${minutesToGo}` : minutesToGo}:${secondsToGo < 10 ? `0${secondsToGo}` : secondsToGo} `)
    }

    useEffect(() => {
        const interval = setInterval(() => countdown(), 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='w-full mx-auto max-w-[65ch] flex flex-col items-center justify-center'>
            <div className='relative group py-2'>
                <p className={'text-center hidden absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-[#030615] text-xs whitespace-nowrap z-10 group-hover:inline ' + press.className}>
                    Office Hours
                </p>
                <p className={'text-center text-xs blueGradient ' + press.className}>
                    {timer}
                </p>
            </div>
            {/* <ruby className={'text-xs mx-auto flex flex-col w-fit text-center py-1   ' + press.className}>
                <rt className='text-center mx-auto'>Stream Countdown</rt>
            </ruby> */}
        </div>
    )
}
