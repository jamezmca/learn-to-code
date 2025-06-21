import fs from "fs";
import matter from "gray-matter";

const getPostMetadata = (basePath) => {
    const folder = basePath + "/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));

    // Get gray-matter data from each file.
    const posts = markdownPosts.map((fileName) => {
        const fileContents = fs.readFileSync(`${basePath}/${fileName}`, "utf8");
        const matterResult = matter(fileContents);
        return basePath === 'notes' ? {
            title: matterResult.data.title,
            order: matterResult.data.order,
            status: matterResult.data.status,
            slug: fileName.replace(".md", ""),
        } : basePath == 'courses' ? {
            title: matterResult.data.title,
            img: matterResult.data.img,
            subtitle: matterResult.data.subtitle,
            slug: fileName.replace(".md", ""),
        } : {
            title: matterResult.data.title,
            date: matterResult.data.date,
            subtitle: matterResult.data.subtitle,
            slug: fileName.replace(".md", ""),
        };
    });

    return posts;
};

export default getPostMetadata;