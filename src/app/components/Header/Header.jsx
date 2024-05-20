import Link from 'next/link';
import { HeaderLink } from './HeaderLink';
import { ThemeBtn } from './ThemeBtn';

export const Header = () => {
    return (
        <header className='flex justify-between items-center py-4 px-10 shadow-inner'>
            <Link className='font-bold font-slab text-2xl dark:text-red-700' href='/'>
                Artsiom&apos;s blog
            </Link>
            <ThemeBtn />
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
