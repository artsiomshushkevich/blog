import { getFeaturedPosts } from '../../utils/posts';
import { PostsGrid } from '../PostsGrid/PostsGrid';

export const FeaturedPosts = () => {
    const posts = getFeaturedPosts();

    return (
        <section className='flex flex-col items-center w-full mt-6 md:mt-10 md:px-6'>
            <h2 className='md:text-4xl font-bold text-center'>Featured posts</h2>
            <PostsGrid className='mt-12' posts={posts} />
        </section>
    );
};
