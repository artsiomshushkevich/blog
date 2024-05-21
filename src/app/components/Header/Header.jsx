import Link from 'next/link';
import { HeaderLink } from './HeaderLink';

export const Header = () => {
    return (
        <header
            className={`
                flex justify-between sticky w-full top-0 items-center z-[1] py-3 px-6 md:px-10
                bg-white dark:bg-slate-900 shadow-md dark:shadow-none dark:border-b dark:border-slate-500
            `}
        >
            <Link className='p-2 rounded-xl font-bold text-xl bg-indigo-600 text-white' href='/'>
                AS
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
