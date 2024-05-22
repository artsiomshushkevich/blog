'use client';
import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';

const ThemeContext = createContext([]);

export const useSetTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState('');
    const isFirstRenderRef = useRef(true);

    useEffect(() => {
        if (isFirstRenderRef.current && localStorage.getItem('theme')) {
            const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

            if (localStorage.getItem('theme')) {
                setCurrentTheme(localStorage.getItem('theme'));
            } else {
                setCurrentTheme(isSystemDark ? 'dark' : 'light');
            }
        }
    }, []);

    useEffect(() => {
        if (!isFirstRenderRef.current) {
            const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

            if (localStorage.theme === 'dark' || (!localStorage.getItem('theme') && isSystemDark)) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        }
    }, [currentTheme]);

    useEffect(() => {
        isFirstRenderRef.current = false;
    }, []);

    const setTheme = useCallback(theme => {
        if (theme === 'system') {
            localStorage.removeItem('theme');
        } else {
            localStorage.setItem('theme', theme);
        }

        setCurrentTheme(theme);
    }, []);

    return <ThemeContext.Provider value={[currentTheme, setTheme]}>{children}</ThemeContext.Provider>;
};
