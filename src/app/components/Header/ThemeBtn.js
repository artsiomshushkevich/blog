'use client';
import { useSetTheme } from '../ThemeProvider/ThemeProvider';

export const ThemeBtn = () => {
    const setTheme = useSetTheme();

    const onClick = () => {
        setTheme('light');
    };

    return <button onClick={onClick}>trigger</button>;
};
