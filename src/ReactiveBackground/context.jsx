import React, { createContext, useContext, useState } from 'react';

import { BACKGROUND_COLOR_THEME } from './enums';

const BackgroundContext = createContext();

/**
 * Context provider pour le background
 * fournit la fonction de mise a jour du state, et la valeur du state
 * @param {*} children 
 * @returns 
 */
const BackgroundProvider = ({children, defaultValue}) => {
    const [ backgroundValue, setBackgroundValue ] = useState(BACKGROUND_COLOR_THEME.init)

    function handleBackgroundValue(value) {
        setBackgroundValue(BACKGROUND_COLOR_THEME[value]);
    }

    return (
        <BackgroundContext.Provider value={{
            backgroundValue,
            handleBackgroundValue,
        }} >
            {children}
        </BackgroundContext.Provider>
    );
}

const useBackground = () => {
    const context = useContext(BackgroundContext);
    return context;
}
export {
    BackgroundProvider,
    useBackground,
} 