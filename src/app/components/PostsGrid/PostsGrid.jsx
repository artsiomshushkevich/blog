import { PostItem } from './PostItem';

export const PostsGrid = ({ className = '', postItemHeadingLevel = 'h3', posts }) => {
    return (
        <ul className={`grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 ${className}`}>
            {posts.map(post => (
                <PostItem key={post.slug} {...post} postItemHeadingLevel={postItemHeadingLevel} />
            ))}
        </ul>
    );
};
