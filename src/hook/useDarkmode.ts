
import React, { useState } from 'react'
import { useEffect } from 'react';

export const useDarkmode = () => {

    const [mode, setMode] = useState<string>();

    useEffect(() => {
        mode != null && window.localStorage.setItem('mode', `${mode}`);
        const html = document.querySelector('html');
        if (html) {
            html.className = `${mode || ''}`
        }
    }, [mode]);

    useEffect(() => {
        const currentMode = window.localStorage.getItem('mode');
        setMode(currentMode || '');
    }, [])

    const toggleMode = () => setMode(prev => prev === 'light' ? 'dark' : 'light');

    return { mode, toggleMode };
}
