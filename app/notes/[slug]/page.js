import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../components/getPostMetadata";
import MainWrapper from "@/components/MainWrapper";
import Link from "next/link";

import { Inter, Press_Start_2P, Space_Mono } from "next/font/google";
const press = Press_Start_2P({ subsets: ["latin"], weight: ['400'] });

const getPostContent = (slug) => {
    const folder = "notes/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata('notes')

  return posts
    .map(p => p.slug?.trim())
    .filter(Boolean)
    .map(slug => ({ slug }))
}

export async function generateMetadata({ params, searchParams }, parent) {
    // read route params
    const id = params?.slug ? ' ⋅ ' + params?.slug : ''

    return {
        title: `Smoljames ⋅ Notes${id.replaceAll('_', ' ')}`,
    }
}

const NotePage = (props) => {
    const slug = props.params.slug;
    const post = getPostContent(slug);
    return (
        <MainWrapper>
            <div className="flex flex-col">
                <Link href={'/notes'} className="relative mr-auto overflow-hidden group hover:after:translate-x-full after:duration-200 after:absolute after:top-0 after:h-full after:w-full after:right-full after:bg-blue-100 after:z-[-1]">
                    <p className="group-hover:text-[#030615] duration-200">&larr; Back</p>
                </Link>

                <div className="my-12 ">
                    <h1 className={"text-2xl text-white " + press.className}>{post.data.title}</h1>
                    {/* <p className=" mt-2">{post.data.date}</p> */}
                </div>

                <article className="prose mx-auto markdown max-w-full">
                    <Markdown>{post.content}</Markdown>
                </article>
            </div>
        </MainWrapper>
    );
};

export default NotePage;