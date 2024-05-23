import { CodeSnipet } from '@/app/components/CodeSnipet/CodeSnipet';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

export const PostDetails = ({ post }) => {
    const formattedDate = new Date(post.date).toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <article className='w-full max-w-screen-lg'>
            <header className='mb-4 pb-2 border-b border-slate-500 dark:border-slate-500'>
                <h1 className='mb-2 font-slab font-bold'>{post.title}</h1>
                <p className='text-sm font-semibold text-slate-500 dark:text-slate-400'>
                    Published on <time>{formattedDate}</time>
                </p>
            </header>
            <ReactMarkdown
                urlTransform={url => (url.startsWith('http') ? url : `/images/posts/${post.slug}/${url}`)}
                components={{
                    img(props) {
                        return <Image {...props} alt={props.alt} width={400} height={400} className='my-8 mx-auto' />;
                    },
                    h1(props) {
                        return <h1 className='post-h1'>{props.children}</h1>;
                    },
                    h2(props) {
                        return <h2 className='post-h2'>{props.children}</h2>;
                    },
                    h3(props) {
                        return <h3 className='post-h3'>{props.children}</h3>;
                    },
                    h4(props) {
                        return <h4 className='post-h4'>{props.children}</h4>;
                    },
                    p(props) {
                        return <p className='post-p'>{props.children}</p>;
                    },
                    ul(props) {
                        return <ul className='post-ul'>{props.children}</ul>;
                    },
                    ol(props) {
                        return <ol className='post-ol'>{props.children}</ol>;
                    },
                    a(props) {
                        return (
                            <a className='post-a font-[500]' href={props.href}>
                                {props.children}
                            </a>
                        );
                    },
                    code(props) {
                        return <CodeSnipet {...props} />;
                    }
                }}
            >
                {post.content}
            </ReactMarkdown>
        </article>
    );
};
