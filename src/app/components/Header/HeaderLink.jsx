import Link from 'next/link';

export const HeaderLink = ({ href, children }) => {
    return (
        <Link className='p-2 rounded-md hover:transition-all hover:bg-slate-600' href={href}>
            {children}
        </Link>
    );
};
