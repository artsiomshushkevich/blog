import { getAllPosts, getPostBySlug } from '@/app/utils/posts';
import { PostDetails } from '../components/PostDetails/PostDetails';

export const generateMetadata = async ({ params }) => {
    const { slug } = params;

    const post = await getPostBySlug(slug);

    return {
        title: post.title,
        description: post.excerpt
    };
};

export const generateStaticParams = async () => {
    const posts = await getAllPosts();

    return posts.map(post => ({
        slug: post.slug
    }));
};

export default async function SpecificPostPage({ params }) {
    const { slug } = params;

    const post = await getPostBySlug(slug);

    return <PostDetails post={post} />;
}
