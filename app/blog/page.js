import MainWrapper from "@/components/MainWrapper";
import getPostMetadata from "@/components/getPostMetadata";
import Link from "next/link";
import React from 'react'

import { Inter, Press_Start_2P, Space_Mono } from "next/font/google";
const press = Press_Start_2P({ subsets: ["latin"], weight: ['400'] });

export const metadata = {
    title: "Smoljames ⋅ Blog",
    description: "Articles pertinent to all things programming and learning to code.",
};

const PostPreview = (props) => {
    return (
        <div
            className="flex flex-col gap-2"
        >
            <p className={"text-xs text-blue-300  " + press.className}>{props.date}</p>
            <Link href={`/blog/${props.slug}`}>
                <h2 className={"text-base text-white sm:text-lg md:text-xl hover:text-blue-300 duration-200 " + press.className}>{props.title}</h2>
            </Link>
            <p className="">&rarr;   {props.subtitle}</p>
        </div>
    );
};

export default function PostsPage() {
    const postMetadata = getPostMetadata('posts');

    return (
        <MainWrapper>
            <h3 className={'text-blue-300 ' + press.className}>✦ Blog ✦</h3>
            {postMetadata.sort((a, b) => {
                return new Date(b.date) - new Date(a.date)
            }).map((post) => (
                <PostPreview key={post.slug} {...post} />
            ))}
        </MainWrapper>
    );
}


