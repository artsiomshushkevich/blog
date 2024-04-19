import Image from 'next/image';
import Link from 'next/link';

export const PostItem = ({ title, date, excerpt, slug, image, postItemHeadingLevel }) => {
    const formattedDate = date.toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const headingClass = 'font-serif font-semibold mt-3 mb-2 text-2xl';

    return (
        <li>
            <Link
                className='flex flex-col overflow-hidden rounded-3xl  bg-slate-600 hover:bg-slate-700 focus:bg-slate-700'
                href={`/posts/${slug}`}
            >
                <Image
                    className='w-full'
                    src={`/images/posts/${slug}/${image}`}
                    alt={title}
                    width={300}
                    height={200}
                    layout='responsive'
                />

                <div className='p-3 text-center'>
                    {postItemHeadingLevel === 'h2' ? (
                        <h2 className={headingClass}>{title}</h2>
                    ) : (
                        <h3 className={headingClass}>{title}</h3>
                    )}
                    <time className='text-sm italic text-gray-300'>{formattedDate}</time>
                    <p className='mt-2'>{excerpt}</p>
                </div>
            </Link>
        </li>
    );
};
