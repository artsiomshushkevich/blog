import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

export const PostDetails = () => {
    const post = {
        slug: 'post-1',
        title: 'Title of post 1',
        date: '2023-04-15',
        content: '# some content',
        image: 'nextjs.png'
    };

    return (
        <article className='w-full max-w-screen-lg p-10 rounded-lg bg-slate-500'>
            <header className='flex justify-between'>
                <div>
                    <h1 className='mb-4 text-4xl font-serif'>{post.title}</h1>
                    <time className='text-sm italic text-gray-100'>{post.date}</time>
                </div>

                <Image src={`/images/posts/${post.slug}/${post.image}`} alt={post.title} width={300} height={200} />
            </header>
            <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
    );
};
