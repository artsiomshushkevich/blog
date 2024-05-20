'use client';
import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';

const ThemeContext = createContext(null);

export const useSetTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState(null);
    const isFirstRenderRef = useRef(true);

    useEffect(() => {
        if (isFirstRenderRef.current && localStorage.getItem('theme')) {
            setCurrentTheme(localStorage.getItem('theme'));
        }
    }, []);

    useEffect(() => {
        if (!isFirstRenderRef.current) {
            if (
                localStorage.theme === 'dark' ||
                (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
            ) {
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
        if (theme) {
            localStorage.setItem('theme', theme);
        } else {
            localStorage.removeItem('theme');
        }

        setCurrentTheme(theme);
    }, []);

    return <ThemeContext.Provider value={setTheme}>{children}</ThemeContext.Provider>;
};
