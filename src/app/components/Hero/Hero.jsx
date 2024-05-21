import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export const Hero = () => {
    return (
        <section className='flex flex-col md:items-start md:flex-row gap-6 md:gap-8'>
            <Image
                className='rounded-3xl mx-auto shadow-xl'
                src='/images/site/me.jpg'
                alt='Artsiom Shushkevich'
                width={250}
                height={250}
            />
            <div className='flex gap-2'>
                <FontAwesomeIcon
                    icon={faChevronRight}
                    className='relative top-1 text-2xl md:text-3xl animate-pulse text-pink-500'
                />
                <h1 className='text-2xl md:text-3xl font-mono'>
                    Welcome to my blog!👋 I&apos;m <b>Artsiom Shushkevich</b>, a JavaScript developer. Here I&apos;ll
                    share my journey, insights and tutorials in JavaScript development. Whether you&apos;re a
                    experienced developer or a beginner, I hope you&apos;ll find my posts useful. Let&apos;s explore the
                    world of JavaScript together!🚀
                </h1>
            </div>
        </section>
    );
};
