import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const PostDetails = ({ post }) => {
    return (
        <article className='w-full max-w-screen-lg p-10 rounded-lg bg-slate-500'>
            <header className='flex justify-between'>
                <div>
                    <h1 className='mb-4 text-4xl font-serif'>{post.title}</h1>
                    <time className='text-sm italic text-gray-100'>{post.date}</time>
                </div>

                <Image src={`/images/posts/${post.slug}/${post.image}`} alt={post.title} width={300} height={200} />
            </header>
            <ReactMarkdown
                urlTransform={url => (url.startsWith('http') ? url : `/images/posts/${post.slug}/${url}`)}
                components={{
                    img(props) {
                        return <Image {...props} alt={props.alt} width={300} height={200} />;
                    },
                    code(props) {
                        const { children, className, node, ...rest } = props;
                        const match = /language-(\w+)/.exec(className || '');

                        return match ? (
                            <SyntaxHighlighter {...rest} PreTag='div' language={match[1]} style={atomDark}>
                                {children}
                            </SyntaxHighlighter>
                        ) : (
                            <code {...rest} className={className}>
                                {children}
                            </code>
                        );
                    }
                }}
            >
                {post.content}
            </ReactMarkdown>
        </article>
    );
};