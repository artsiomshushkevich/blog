import Image from 'next/image';

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
            <h1 className='text-2xl md:text-3xl font-[monospace]'>
                Welcome to my blog!👋 I&apos;m <b>Artsiom Shushkevich</b>, a JavaScript developer. Here, I&apos;ll share
                my journey, insights and tutorials on JavaScript development. Whether you&apos;re a experienced
                developer or a beginner, I hope you&apos;ll find my posts useful. Let&apos;s explore the world of
                JavaScript together!🚀
            </h1>
        </section>
    );
};
