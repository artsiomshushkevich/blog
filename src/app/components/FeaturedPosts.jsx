import { PostsGrid } from './PostsGrid/PostsGrid';

export const FeaturedPosts = () => {
    const posts = [
        {
            slug: 'post-1',
            title: 'Title of post 1',
            date: '2023-04-15',
            excerpt: 'Descitpion of post long long long long 1',
            image: 'nextjs.png'
        },
        {
            slug: 'post-2',
            title: 'Title of post 2',
            date: '2023-04-16',
            excerpt: 'Descitpion of post long long long long 2',
            image: 'nextjs.png'
        },
        {
            slug: 'post-3',
            title: 'Title of post 3',
            date: '2023-04-17',
            excerpt: 'Descitpion of post long long long long 3',
            image: 'nextjs.png'
        },

        {
            slug: 'post-4',
            title: 'Title of post 4',
            date: '2023-04-18',
            excerpt: 'Descitpion of post long long long long 4',
            image: 'nextjs.png'
        },
        {
            slug: 'post-5',
            title: 'Title of post 5',
            date: '2023-04-19',
            excerpt: 'Descitpion of post long long long long 5',
            image: 'nextjs.png'
        }
    ];

    return (
        <section className='flex flex-col items-center w-full mt-5 p-5 bg-slate-900'>
            <h2 className='mt-3 mb-5 font-serif font-bold text-center text-3xl'>Featured posts</h2>
            <PostsGrid className='max-w-screen-xl' posts={posts} />
        </section>
    );
};
