import Image from 'next/image';
import Link from 'next/link';

export const PostItem = ({ title, date, excerpt, slug, image, postItemHeadingLevel }) => {
    const formattedDate = date.toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const headingClass = 'mt-2 text-xl font-roboto font-bold';

    return (
        <li>
            <article className='relative flex flex-col md:flex-row p-4 rounded-2xl shadow-lg dark:bg-slate-800'>
                <Image
                    src={`/images/posts/${slug}/${image}`}
                    alt={title}
                    width={120}
                    height={120}
                    className='absolute top-0 md:top-[50%] left-[50%] md:left-0 translate-x-[-50%] translate-y-[-24px] md:translate-x-[-24px] md:translate-y-[-50%] rounded-2xl shadow-2xl'
                />
                <div className='p-3 mt-28 md:mt-0 md:ml-28 text-center md:text-left'>
                    <time className='text-sm font-medium text-slate-500 dark:text-slate-400'>{formattedDate}</time>

                    {postItemHeadingLevel === 'h2' ? (
                        <h2 className={headingClass}>{title}</h2>
                    ) : (
                        <h3 className={headingClass}>{title}</h3>
                    )}
                    <p className='mt-2 text-slate-500 dark:text-slate-400'>{excerpt}</p>

                    <Link
                        href={`/posts/${slug}`}
                        className='block mt-4 px-4 py-2 w-full md:w-fit rounded-3xl bg-gradient-to-r from-indigo-500 to-pink-500 text-white shadow-lg'
                    >
                        Read more
                    </Link>
                </div>
            </article>
        </li>
    );
};
