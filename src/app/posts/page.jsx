import { PostsGrid } from '@/app/components/PostsGrid/PostsGrid';

export default function AllPosts() {
    const posts = [
        {
            slug: 'post-1',
            title: 'Title of post 1',
            date: new Date('2023-04-15'),
            excerpt: 'Descitpion of post long long long long 1',
            image: '/images/posts/nextjs.png'
        },
        {
            slug: 'post-2',
            title: 'Title of post 2',
            date: new Date('2023-04-16'),
            excerpt: 'Descitpion of post long long long long 2',
            image: '/images/posts/nextjs.png'
        },
        {
            slug: 'post-3',
            title: 'Title of post 3',
            date: new Date('2023-04-17'),
            excerpt: 'Descitpion of post long long long long 3',
            image: '/images/posts/nextjs.png'
        },

        {
            slug: 'post-4',
            title: 'Title of post 4',
            date: new Date('2023-04-18'),
            excerpt: 'Descitpion of post long long long long 4',
            image: '/images/posts/nextjs.png'
        },
        {
            slug: 'post-5',
            title: 'Title of post 5',
            date: new Date('2023-04-19'),
            excerpt: 'Descitpion of post long long long long 5',
            image: '/images/posts/nextjs.png'
        }
    ];

    return (
        <main className='flex flex-col items-center w-full p-10 bg-slate-900'>
            <h1 className='mt-3 mb-5 font-serif font-bold text-center text-4xl'>All posts</h1>
            <PostsGrid className='max-w-screen-xl' posts={posts} postItemHeadingLevel='h2' />
        </main>
    );
}
