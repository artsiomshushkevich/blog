'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const HeaderLink = ({ href, children }) => {
    const pathname = usePathname();

    const match = pathname === href;

    return (
        <Link
            className={`p-2 rounded-md hover:transition-all hover:bg-indigo-500 hover:text-white ${
                match ? 'border border-indigo-500' : ''
            }`}
            href={href}
        >
            {children}
        </Link>
    );
};
