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
            <label className='block text-white' htmlFor={id}>
                {label}
            </label>
            <select
                id={id}
                className='mt-2 py-1 min-w-40 rounded-md bg-inherit text-white border border-white'
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
    );
};
