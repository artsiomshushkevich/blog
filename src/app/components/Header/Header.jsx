import Link from 'next/link';
import { HeaderLink } from './HeaderLink';

export const Header = () => {
    return (
        <header className='flex justify-between items-center py-4 px-10 bg-slate-900 shadow-inner'>
            <Link className='font-bold font-slab text-2xl text-white' href='/'>
                Artsiom&apos;s blog
            </Link>
            <nav>
                <ul className='flex gap-3'>
                    <li>
                        <HeaderLink href='/'>Home</HeaderLink>
                    </li>
                    <li>
                        <HeaderLink href='/posts'>Posts</HeaderLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
