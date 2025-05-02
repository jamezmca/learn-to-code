import React from 'react'

export default function BlueBtn(props) {
    const { btnText, noShadow, lg } = props
    return (
        <div
            className="p-[1.5px] w-fit my-2 rounded-lg relative group"
        >
            <div
                className={"absolute inset-0 blueBorder duration-500 rounded-lg "}
            />


            {!noShadow && (<div
                className={"absolute -inset-2 blur-xl blueBorder opacity-20 duration-500 rounded-lg "}
            />)}
            <p
                className={"bg-slate-950 text-center  z-1 group-hover:bg-transparent group-hover:text-white duration-200 relative rounded-lg " + (lg ? 'px-4 py-2 ' : ' px-2 py-1 text-xs sm:text-sm')}
            >
                {btnText}
            </p>
        </div>
    )
}
