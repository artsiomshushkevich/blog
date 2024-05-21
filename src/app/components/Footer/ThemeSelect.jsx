'use client';
import { useEffect, useState } from 'react';
import { useSetTheme } from '../ThemeProvider/ThemeProvider';
import { detectTheme } from '@/app/utils/theme';

export const ThemeSelect = () => {
    const [currentTheme, setCurrentTheme] = useState(null);
    const setTheme = useSetTheme();

    useEffect(() => {
        setCurrentTheme(detectTheme);
    }, []);

    const onChange = e => {
        const newTheme = e.target.value;

        setTheme(newTheme === 'system' ? null : newTheme);
        setCurrentTheme(newTheme);
    };

    return (
        <select onChange={onChange} value={currentTheme}>
            <option value='dark'>Dark</option>
            <option value='light'>Light</option>
            <option value='system'>System</option>
        </select>
    );
};
