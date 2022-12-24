
import React, { useState } from 'react'
import { useEffect } from 'react';

export const useDarkmode = () => {

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        window.localStorage.setItem('isDarks', `${darkMode}`);
    }, [darkMode]);

    useEffect(() => {
        const currentMode = window.localStorage.getItem('isDarks');
        currentMode != null && setDarkMode(Boolean(currentMode));
    }, [])

    const toggleMode = () => setDarkMode(prev => !prev);

    return { isDarkMode: darkMode, toggleMode };
}
