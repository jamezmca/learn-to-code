import React from 'react'

export default function MainWrapper(props) {
    const { children } = props
    return (
        <main className="flex flex-col gap-14 justify-center py-10 flex-1">
            {children}
        </main>
    )
}
