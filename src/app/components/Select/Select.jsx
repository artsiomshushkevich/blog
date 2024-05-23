'use client';
import { useEffect, useState } from 'react';

export const Select = ({ className = '', id, label, value = '', onChange, options }) => {
    const [currentValue, setCurrentValue] = useState(value);

    useEffect(() => {
        setCurrentValue(value);
    }, [value]);

    const handleChange = e => {
        const newValue = e.target.value;

        setCurrentValue(newValue);
        onChange(newValue);
    };

    return (
        <div className={className}>
            <label className='block text-white ' htmlFor={id}>
                {label}
            </label>
            <div
                className={`
                    relative inline-block after:content-[''] after:block after:absolute 
                    after:top-[50%] after:right-2 after:w-0 after:h-0 after:border-l-[0.3rem] after:border-l-transparent after:border-r-[0.3rem] after:border-r-transparent 
                    after:border-t-[0.4rem] after:border-t-white
                `}
            >
                <select
                    id={id}
                    className={`
                    mt-2 py-1 pl-2 pr-5 max-w-28 appearance-none rounded-md bg-inherit text-white border border-white

                `}
                    onChange={handleChange}
                    value={currentValue}
                >
                    {options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};
