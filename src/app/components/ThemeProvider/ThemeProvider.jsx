'use client';
import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';

const ThemeContext = createContext([]);

export const useSetTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState('');
    const isFirstRenderRef = useRef(true);

    useEffect(() => {
        if (isFirstRenderRef.current) {
            const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

            if (localStorage.getItem('theme')) {
                setCurrentTheme(localStorage.getItem('theme'));
            } else {
                setCurrentTheme(isSystemDark ? 'dark' : 'light');
            }
        }
    }, []);

    useEffect(() => {
        isFirstRenderRef.current = false;
    }, []);

    const setTheme = useCallback(theme => {
        if (theme === 'system') {
            const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

            if (isSystemDark) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }

            localStorage.removeItem('theme');
            setCurrentTheme(isSystemDark ? 'dark' : 'light');
        } else {
            if (theme === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }

            localStorage.setItem('theme', theme);
            setCurrentTheme(theme);
        }
    }, []);

    return <ThemeContext.Provider value={[currentTheme, setTheme]}>{children}</ThemeContext.Provider>;
};
