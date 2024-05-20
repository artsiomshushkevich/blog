import { Roboto, Roboto_Slab } from 'next/font/google';
import { Header } from './components/Header/Header';
import './globals.css';
import { ThemeProvider } from './components/ThemeProvider/ThemeProvider';

const roboto = Roboto({
    subsets: ['latin', 'cyrillic'],
    variable: '--font-roboto',
    display: 'swap',
    weight: ['100', '300', '400', '500', '700', '900']
});

const slab = Roboto_Slab({
    subsets: ['latin', 'cyrillic'],
    variable: '--font-roboto-slab',
    display: 'swap',
    weight: ['100', '300', '400', '500', '700', '900']
});

export const metadata = {
    title: "Artsiom Shushkevich's blog",
    description: 'Personal blog'
};

export default function RootLayout({ children }) {
    return (
        <html lang='en' className={`${roboto.variable} ${slab.variable}`}>
            <body className={roboto.className}>
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
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
