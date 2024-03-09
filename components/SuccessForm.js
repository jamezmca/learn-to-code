import Link from 'next/link'
import React, { useState } from 'react'
import BlueBtn from './BlueBtn'
import { Press_Start_2P, Sumana } from 'next/font/google';

const press = Press_Start_2P({ subsets: ["latin"], weight: ['400'] });


export default function SuccessForm() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submission, setSubmission] = useState(null)
    async function handleSubmitForm() {
        if (submission || !message) { return }
        setSubmission('sending')
        try {
            // const url = 'http://localhost:9999/api/feedback'
            const url = 'https://jasmine-api.onrender.com/api/feedback'
            const options = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message, email, name })
            }
            const res = await fetch(url, options)
            if (res.ok) {
                setSubmission('sent')
                setEmail('')
                setName('')
                setMessage('')
            } else {
                setSubmission(null)
            }
        } catch (err) {
            console.log('Failed to submit story', err.message)
            setSubmission(null)
        }
    }
    return (
        <>
            <div className='flex flex-col gap-6'>
                <h2 className={'text-3xl textGradient ' + press.className}>
                    Share your success!
                </h2>
                <p className='text-blue-300'><span className='text-blue-200 font-bold'>Have you got a success story you would like to share?</span> It could be that you have landed a job, or that you feel confident with a new framework or language!<br /><br /> Help inspire others by sharing your progress 🔥 </p>

            </div>
            <div className='flex flex-col gap-4'>
                <div className='grid grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    <input value={name} onChange={(e) => {
                        setName(e.target.value)
                    }} placeholder='Name' className='resize-none bg-transparent border border-solid border-blue-900 p-2 rounded-xl focus:border-blue-700 duration-200 outline-none' />
                    <input value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    }} placeholder='Email' className='resize-none bg-transparent border border-solid border-blue-900 p-2 rounded-xl focus:border-blue-700 duration-200 outline-none' />
                </div>
                <textarea value={message} onChange={(e) => {
                    setMessage(e.target.value)
                }} placeholder='Share your victory!' className='resize-none bg-transparent border border-solid border-blue-900 p-2 rounded-xl focus:border-blue-700 duration-200 outline-none min-h-[140px]'></textarea>
            </div>
            <button onClick={handleSubmitForm} className='flex flex-col mr-auto'>
                <BlueBtn btnText={!submission ? "Submit ⭐️" : submission === 'sending' ? 'Sending' : 'Sent ✅'} lg noShadow />
            </button>
        </>
    )
}
