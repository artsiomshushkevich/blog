'use client';
import { useEffect, useState } from 'react';
import { detectTheme } from '@/app/utils/theme';
import { useSetTheme } from '../ThemeProvider/ThemeProvider';
import { Select } from '../Select/Select';

export const ThemeSelect = ({ className = '' }) => {
    const [currentTheme, setCurrentTheme] = useState('');
    const [, setTheme] = useSetTheme();

    useEffect(() => {
        setCurrentTheme(detectTheme());
    }, []);

    const onChange = newTheme => {
        setTheme(newTheme);
        setCurrentTheme(newTheme);
    };

    const options = [
        {
            value: 'dark',
            label: 'Dark'
        },
        {
            value: 'light',
            label: 'Light'
        },
        {
            value: 'system',
            label: 'System'
        }
    ];

    return (
        <Select
            className={className}
            id='theme-select'
            label='Choose theme'
            value={currentTheme}
            options={options}
            onChange={onChange}
        />
    );
};
