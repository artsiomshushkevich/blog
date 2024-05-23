import { ThemeSelect } from './ThemeSelect';
import { SocialLink } from './SocialLink';

export const Footer = () => {
    return (
        <footer className='flex justify-center p-6 md:p-10 bg-slate-700 dark:bg-inherit dark:border-t dark:border-slate-500'>
            <div className='w-full max-w-screen-lg'>
                <ThemeSelect className='pb-4 border-b border-b-white' />

                <div className='flex justify-between items-center flex-wrap gap-4 pt-4'>
                    <nav>
                        <ul className='flex gap-2'>
                            <li>
                                <SocialLink type='github' />
                            </li>
                            <li>
                                <SocialLink type='linkedin' />
                            </li>
                        </ul>
                    </nav>

                    <p className='text-white'>
                        Built with ❤️ and{' '}
                        <a className='font-medium hover:underline' href='https://nextjs.org/' target='_blank'>
                            Next.js
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};
