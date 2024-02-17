import { useState, useEffect } from 'react';

const useStorage = (initialValue) => {
    const storedValue = localStorage.getItem('InputValue') || initialValue;
    const [input, setInput] = useState(storedValue);
    
    useEffect(() => {
        localStorage.setItem('InputValue', input);
        sessionStorage.setItem('InputValue', input);
    }, [input]);

    return [input, setInput];
};

export default useStorage;