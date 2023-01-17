import React, { forwardRef } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface AutocompleteProps {
    elements: any[];
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    value?: string | number | readonly string[];
}

const AutoComplete = forwardRef<HTMLInputElement, AutocompleteProps>((props, ref) => {
    const { elements, onChange, value } = props;

    const [isSearchActive, setIsSearchActive] = useState(false);



    const handleBlur = () => {
        setTimeout(() => setIsSearchActive(false), 200);
    }

    const active = isSearchActive ? 'h-80' : 'h-0';

    return (
        <div className="relative w-full">
            <input
                ref={ref}
                value={value}
                placeholder='Buscar'
                onChange={onChange}
                onClick={() => setIsSearchActive(true)}
                onBlur={handleBlur}
                type='text'
                className='border-transparent border-2 rounded-xl p-2 bg dark:bg-neutral-800/90 w-full'
            />

            {/* Results container */}
            <div className={`${active} mt absolute w-full transition-[height] overflow-y-auto max-h-80 bg-zinc-100 dark:bg-neutral-800 shadow-lg rounded-b-2xl`}>
                <ul >
                    {elements}
                </ul>
            </div>
        </div>

    )
})

export default AutoComplete
