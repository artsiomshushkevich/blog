import { getFeaturedPosts } from '../utils/posts';
import { PostsGrid } from './PostsGrid/PostsGrid';

export const FeaturedPosts = () => {
    const posts = getFeaturedPosts();

    return (
        <section className='flex flex-col items-center w-full mt-5 p-5'>
            <h2 className='mt-3 mb-5 font-slab font-bold text-center'>Featured posts</h2>
            <PostsGrid className='max-w-screen-xl' posts={posts} />
        </section>
    );
};
