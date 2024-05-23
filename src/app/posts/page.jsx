import { PostsGrid } from '@/app/components/PostsGrid/PostsGrid';
import { getAllPosts } from '@/app/utils/posts';

export const metadata = {
    title: 'All my posts',
    description: 'List of all my posts and tutorials'
};

export default async function AllPosts() {
    const posts = await getAllPosts();

    return (
        <>
            <h1 className='font-bold text-center'>All posts</h1>
            <PostsGrid className='mt-12' posts={posts} postItemHeadingLevel='h2' />
        </>
    );
}
