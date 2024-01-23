import MainWrapper from "@/components/MainWrapper";
import getPostMetadata from "@/components/getPostMetadata";
import Link from "next/link";
import React from 'react'

import { Inter, Press_Start_2P, Space_Mono } from "next/font/google";
const press = Press_Start_2P({ subsets: ["latin"], weight: ['400'] });

export const metadata = {
    title: "Smoljames ⋅ Notes",
    description: "Companion summary notes to accompany and assist you on your quest to learn to code!",
};

const PostPreview = (props) => {
    return (
        <div
            className="flex flex-col gap-2"
        >
            <Link href={`/notes/${props.slug}`}>
                <h2 className={"text-base text-white sm:text-lg md:text-xl hover:text-blue-300 duration-200 " + press.className}>{props.title}</h2>
            </Link>
            <div className="flex items-center justify-between">
                <p className="">&rarr; Chapter {props.order.toString().length < 2 ? '0' : ''}{props.order}</p>
                <p className={"text-xs  capitalize  " + (props.status === 'complete' ? 'text-green-300 ' : 'text-amber-300 ') + press.className}>{props.status.replaceAll('_', ' ')}</p>
            </div>
        </div>
    );
};

export default function NotesPage() {
    const postMetadata = getPostMetadata('notes');

    return (
        <MainWrapper>
            <h3 className={'text-blue-300 ' + press.className}>✦ Study Notes ✦</h3>

            {postMetadata.filter(val => {
                return val?.order
            }).sort((a, b) => {
                return a.order - b.order
            }).map((post) => (
                <PostPreview key={post.slug} {...post} />
            ))}
        </MainWrapper>
    );
}


