import './globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { Roboto, Roboto_Mono, Roboto_Slab, Roboto_Serif } from 'next/font/google';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { ThemeProvider } from './components/ThemeProvider/ThemeProvider';

config.autoAddCss = false;

const roboto = Roboto({
    subsets: ['latin', 'cyrillic'],
    variable: '--font-roboto',
    display: 'swap',
    weight: ['100', '300', '400', '500', '700', '900']
});

const mono = Roboto_Mono({
    subsets: ['latin', 'cyrillic'],
    variable: '--font-roboto-mono',
    display: 'swap',
    weight: ['100', '300', '400', '500', '700']
});

const slab = Roboto_Slab({
    subsets: ['latin', 'cyrillic'],
    variable: '--font-roboto-slab',
    display: 'swap',
    weight: ['700']
});

const serif = Roboto_Serif({
    subsets: ['latin', 'cyrillic'],
    variable: '--font-roboto-serif',
    display: 'swap',
    weight: ['100', '300', '400', '500', '700']
});

export const metadata = {
    title: "Artsiom Shushkevich's blog",
    description: 'Personal blog'
};

export default function RootLayout({ children }) {
    return (
        <html lang='en' className={`${roboto.variable} ${mono.variable} ${slab.variable} ${serif.variable}`}>
            <body className={`${roboto.className} flex flex-col h-screen`}>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            try {
                            if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                                document.documentElement.classList.add('dark');
                            } else {
                                document.documentElement.classList.remove('dark');
                            }
                            } catch (_) {}
                        `
                    }}
                ></script>
                <ThemeProvider>
                    <Header />
                    <main className='flex flex-col items-center flex-grow w-full p-6 md:p-10'>
                        <div className='flex flex-col items-center w-full max-w-screen-xl'>{children}</div>
                    </main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
