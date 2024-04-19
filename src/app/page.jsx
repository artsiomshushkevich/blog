import { FeaturedPosts } from './components/FeaturedPosts';
import { Hero } from './components/Hero';

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col items-center p-24'>
            <Hero />
            <FeaturedPosts />
        </main>
    );
}
