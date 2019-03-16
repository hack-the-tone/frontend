import React, { useState } from 'react';

export const TokenContext = React.createContext({});

function TokenManager({ children }) {
    const [token, setValue] = useState(window.localStorage.getItem('token'));

    const setToken = (value) => {
        setValue(value);
        window.localStorage.setItem('token', value);
    }

    return (
        <TokenContext.Provider value={{ token, setToken }}>
            {children}
        </TokenContext.Provider>
    );
}

export default TokenManager;