import { PostsGrid } from '@/app/components/PostsGrid/PostsGrid';
import { getAllPosts } from '@/app/utils/posts';

export default function AllPosts() {
    const posts = getAllPosts();

    return (
        <main className='flex flex-col items-center w-full p-10 bg-slate-900'>
            <h1 className='mt-3 mb-5 font-serif font-bold text-center text-4xl'>All posts</h1>
            <PostsGrid className='max-w-screen-xl' posts={posts} postItemHeadingLevel='h2' />
        </main>
    );
}
