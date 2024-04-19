import Image from 'next/image';

export const Hero = () => {
    return (
        <section>
            <Image
                className='rounded-full mx-auto'
                src='/images/site/me.jpg'
                alt='Artsiom Shushkevich'
                width={300}
                height={300}
            />
            <h1 className='my-2 text-center text-3xl font-serif'>Artsiom Shushkevich</h1>
            <p className='my-3 text-center text-base'>
                Experienced Front-end developer passionate about learning new things.
            </p>
        </section>
    );
};
