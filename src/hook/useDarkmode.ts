
import React, { useState } from 'react'
import { useEffect } from 'react';

export const useDarkmode = () => {

    const [mode, setMode] = useState<string>();

    useEffect(() => {
       mode != null && window.localStorage.setItem('mode', `${mode}`);
    }, [mode]);

    useEffect(() => {
        const currentMode = window.localStorage.getItem('mode');
        currentMode != null && setMode(currentMode);
    }, [])

    const toggleMode = () => setMode(prev => prev === 'light' ? 'dark' : 'light');

    return { mode, toggleMode };
}
