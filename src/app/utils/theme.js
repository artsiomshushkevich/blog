export const detectTheme = () => {
    const themeInLS = localStorage.getItem('theme');

    if (themeInLS) {
        return themeInLS;
    }

    return 'system';
};
