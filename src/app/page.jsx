import { FeaturedPosts } from './components/FeaturedPosts';
import { Hero } from './components/Hero';

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col items-center mt-10'>
            <Hero />
            <FeaturedPosts />
        </main>
    );
}
