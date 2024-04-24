import { getAllPosts, getPostBySlug } from '@/app/utils/posts';
import { PostDetails } from '../components/PostDetails/PostDetails';

export const generateMetadata = ({ params }) => {
    const { slug } = params;

    const post = getPostBySlug(slug);

    return {
        title: post.title,
        description: post.excerpt
    };
};

export const generateStaticParams = () => {
    const posts = getAllPosts();

    return posts.map(post => ({
        slug: post.slug
    }));
};

export default function SpecificPostPage({ params }) {
    const { slug } = params;

    const post = getPostBySlug(slug);

    return (
        <main className='flex justify-center mt-10'>
            <PostDetails post={post} />
        </main>
    );
}
