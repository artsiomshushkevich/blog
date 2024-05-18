import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const PostDetails = ({ post }) => {
    return (
        <article className='w-full max-w-screen-lg p-10 rounded-lg shadow-2xl'>
            <header className='flex justify-between'>
                <div>
                    <h1 className='mb-4 font-slab'>{post.title}</h1>
                    <time className='text-sm italic'>{post.date}</time>
                </div>

                <Image src={`/images/posts/${post.slug}/${post.image}`} alt={post.title} width={300} height={200} />
            </header>
            <ReactMarkdown
                urlTransform={url => (url.startsWith('http') ? url : `/images/posts/${post.slug}/${url}`)}
                components={{
                    img(props) {
                        return <Image {...props} alt={props.alt} width={300} height={200} />;
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
