import { PostItem } from './PostItem';

export const PostsGrid = ({ className = '', postItemHeadingLevel = 'h3', posts }) => {
    return (
        <ul className={`grid w-full grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-14 ${className}`}>
            {posts.map(post => (
                <PostItem key={post.slug} {...post} postItemHeadingLevel={postItemHeadingLevel} />
            ))}
        </ul>
    );
};
