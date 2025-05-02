'use client'
import MainWrapper from '@/components/MainWrapper'
import React, { useState } from 'react'

export default function TodoPage() {
    const [data, setData] = useState({})
    return (
        <MainWrapper>
            <div className='flex items-center gap-1'>
                <div>
                    {/* for all the dots (hover a dot and it'll show the date, blue if it has stuff) */}
                </div>

            </div>
            <div className='flex-1 '>
                {/* text display - if today, can edit, otherwise can't edit (have an editable tag and if it's not, then a reuse btn) */}
                
            </div>
        </MainWrapper>
    )
}
