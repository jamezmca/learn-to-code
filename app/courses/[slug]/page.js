import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../components/getPostMetadata";
import MainWrapper from "@/components/MainWrapper";
import Link from "next/link";

import { Inter, Press_Start_2P, Space_Mono } from "next/font/google";
import BlueBtn from "@/components/BlueBtn";
const press = Press_Start_2P({ subsets: ["latin"], weight: ['400'] });

const getPostContent = (slug) => {
    const folder = "courses/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
};

export const generateStaticParams = async () => {
    const posts = getPostMetadata('courses');
    return posts.map((post) => ({
        slug: post.slug,
    }));
};

export async function generateMetadata({ params, searchParams }, parent) {
    // read route params
    const id = params?.slug ? ' ⋅ ' + params?.slug : ''

    return {
        title: `Smoljames ⋅ Courses${id.replaceAll('-', ' ')}`,
    }
}

const CoursePage = async ({ params }) => {
    const { slug } = await params
    const post = getPostContent(slug)
    
    return (
        <MainWrapper>
            <div className="flex flex-col">

                <div className="">
                    <h1 className={"text-2xl text-white textGradient " + press.className}>{post.data.title}</h1>
                    <p className=" mt-2">{post.data.subtitle}</p>
                </div>
                <div className="relative w-full pb-[56.25%] my-12">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={"https://www.youtube.com/embed/" + post.data.img}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>
                <article className="prose mx-auto markdown">
                    <Markdown>{post.content}</Markdown>
                </article>

                <Link href={'/courses'} >
                    <BlueBtn btnText="&larr; Back to Courses" />
                </Link>

            </div>
        </MainWrapper>
    );
};

export default CoursePage;