import { PostItem } from './PostItem';

export const PostsGrid = ({ className = '', postItemHeadingLevel = 'h3', posts }) => {
    return (
        <ul
            className={`grid grid-cols-1 justify-center ${posts.length === 1 ? '' : 'md:grid-cols-2'} ${
                posts.length < 3 ? '' : 'xl:grid-cols-3'
            } w-full md:w-auto gap-10 md:gap-14 ${className}`}
        >
            {posts.map(post => (
                <PostItem key={post.slug} {...post} postItemHeadingLevel={postItemHeadingLevel} />
            ))}
        </ul>
    );
};
