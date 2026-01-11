import fs from "fs";
import matter from "gray-matter";

const getPostMetadata = (basePath) => {
    const folder = basePath + "/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));

    // Get gray-matter data from each file.
    const posts = markdownPosts.map(fileName => {
        const fileContents = fs.readFileSync(`${basePath}/${fileName}`, "utf8")

        let matterResult
        try {
            matterResult = matter(fileContents)
        } catch {
            return null
        }

        const slug = fileName.replace(".md", "").trim()
        if (!slug) return null

        const data = matterResult.data || {}

        if (basePath === "notes") {
            return { title: data.title ?? "", order: data.order, status: data.status, slug }
        }

        if (basePath === "courses") {
            return { title: data.title ?? "", img: data.img, subtitle: data.subtitle, slug }
        }

        return { title: data.title ?? "", date: data.date, subtitle: data.subtitle, slug }
    }).filter(Boolean)


    return posts;
};

export default getPostMetadata;