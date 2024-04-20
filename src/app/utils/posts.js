import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDir = path.resolve(process.cwd(), 'posts');

export const getFileContent = fileName => {
    const fileContent = fs.readFileSync(path.join(postsDir, fileName), 'utf-8');

    const { data, content } = matter(fileContent);

    return {
        ...data,
        slug: fileName.replace(/\.md$/, ''),
        content
    };
};

export const getAllPosts = () => {
    const fileNames = fs.readdirSync(postsDir);

    return fileNames.map(fileName => getFileContent(fileName)).sort((a, b) => (a.date > b.date ? -1 : 1));
};

export const getFeaturedPosts = () => getAllPosts().filter(post => post.isFeatured);

export const getPostBySlug = slug => {
    return getFileContent(`${slug}.md`);
};
