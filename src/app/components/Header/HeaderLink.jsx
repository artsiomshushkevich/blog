import Link from 'next/link';

export const HeaderLink = ({ href, children }) => {
    return (
        <Link className='p-2 rounded-md hover:transition-all hover:bg-indigo-500 hover:text-white' href={href}>
            {children}
        </Link>
    );
};
