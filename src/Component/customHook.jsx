import React from 'react';
import useStorage from './UseStorage';

export default function CustomHook() {
    const [inputValue, setInputValue] = useStorage('');
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };
  return (
    <div>
        <input type="text" value={inputValue}  onChange={handleChange} />
        <p>Type and check the local and session storage</p>
    </div>
  )
}