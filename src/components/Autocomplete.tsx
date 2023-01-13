import React, { forwardRef } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface AutocompleteProps {
    elements: any[]
}

const AutoComplete = forwardRef<HTMLInputElement, AutocompleteProps>((props, ref) => {
    const { elements } = props;
    const [search, setSearch] = useState('');
    const [isSearchActive, setIsSearchActive] = useState(false);

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(evt.target.value)
    }

    const handleBlur = () => {
        setTimeout(() => setIsSearchActive(false), 200);
    }

    const active = isSearchActive ? 'h-80' : 'h-0';

    return (
        <div className="relative w-full">
            <input
                ref={ref}
                value={search}
                placeholder='Search'
                onChange={handleChange}
                onClick={() => setIsSearchActive(true)}
                onBlur={handleBlur}
                type='text'
                className='border-transparent border-2 rounded-xl p-2 bg-neutral-800/90 w-full'
            />

            {/* Results container */}
            <div className={`${active} mt absolute w-full transition-[height] overflow-y-auto max-h-80 bg-neutral-800 shadow-lg rounded-b-2xl`}>
                <ul >
                    {elements}
                </ul>
            </div>
        </div>

    )
})

export default AutoComplete
