import { Inter } from 'next/font/google';
import { Header } from './components/Header/Header';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: "Artsiom Shushkevich's blog",
    description: 'Personal blog'
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <Header />
                {children}
            </body>
        </html>
    );
}
