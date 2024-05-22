'use client';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coyWithoutShadows, dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useSetTheme } from '../ThemeProvider/ThemeProvider';

export const CodeSnipet = props => {
    const { children, className, node, ...rest } = props;
    const match = /language-(\w+)/.exec(className || '');

    const [theme] = useSetTheme();

    return match ? (
        <SyntaxHighlighter
            {...rest}
            PreTag='div'
            language={match[1]}
            style={{ ...(theme === 'dark' ? dracula : coyWithoutShadows) }}
            customStyle={{ margin: '32px 0' }}
        >
            {children}
        </SyntaxHighlighter>
    ) : (
        <code {...rest} className={className}>
            {children}
        </code>
    );
};
