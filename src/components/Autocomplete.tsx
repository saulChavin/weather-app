import React, { forwardRef } from 'react'
import { useState } from 'react';

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

    const active = isSearchActive ? 'h-80' : 'h-0';

    return (
        <div className="relative w-full">
            <input
                ref={ref}
                value={search}
                placeholder='Search'
                onChange={handleChange}
                onClick={() => setIsSearchActive(true)}
                onBlur={() => setIsSearchActive(false)}
                type='select'
                className='border-transparent border-2 rounded-xl p-2 bg-neutral-800/90 w-full'
            />

            {/* Results container */}
            <div className={`${active} mt absolute w-full transition-[height] overflow-y-auto max-h-80 bg-neutral-800 shadow-lg rounded-b-2xl`}>
                <ul className='p-4'>
                    {elements
                        .filter(el => el.toLowerCase().startsWith(search.toLowerCase()))
                        .map((el, index) => <li key={`${el}-${index}`} className='py-1'>{el}</li>)
                    }
                </ul>
            </div>
        </div>

    )
})

export default AutoComplete
