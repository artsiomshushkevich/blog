import { PostsGrid } from '@/app/components/PostsGrid/PostsGrid';
import { getAllPosts } from '@/app/utils/posts';

export const metadata = {
    title: 'All my posts',
    description: 'List of all my posts and tutorials'
};

export default function AllPosts() {
    const posts = getAllPosts();

    return (
        <main className='flex flex-col items-center w-full p-1'>
            <h1 className='mt-3 mb-5 font-serif font-bold text-center'>All posts</h1>
            <PostsGrid className='max-w-screen-xl' posts={posts} postItemHeadingLevel='h2' />
        </main>
    );
}
