import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDir = path.resolve(process.cwd(), 'posts');

export const getFileContent = async fileName => {
    const fileContent = await fs.readFile(path.join(postsDir, fileName), 'utf-8');

    const { data, content } = matter(fileContent);

    return {
        ...data,
        slug: fileName.replace(/\.md$/, ''),
        content
    };
};

export const getAllPosts = async () => {
    const fileNames = await fs.readdir(postsDir);

    const files = await Promise.all(fileNames.map(fileName => getFileContent(fileName)));

    return files.sort((a, b) => (a.date > b.date ? -1 : 1));
};

export const getFeaturedPosts = async () => {
    const posts = await getAllPosts();

    return posts.filter(post => post.isFeatured);
};

export const getPostBySlug = async slug => {
    return await getFileContent(`${slug}.md`);
};
