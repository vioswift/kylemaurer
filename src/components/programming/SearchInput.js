import React, { memo, useState, useEffect } from 'react';
import '../../css/search-input.css';

const SearchInput = memo(({ text, item }) => {
    const [textValue, setTextValue] = useState('');

    const onChange = (e) => {
        text(e.target.value);
        setTextValue(e.target.value);
    }

    useEffect(() => {
        if (item !== '') {
            setTextValue('');
        }
    }, [item]);

    return (
        <input type="text" className="searchInput margin-bottom" id="searchInput"
        placeholder="Search for a language..." onChange={onChange} value={textValue}/> 
    );
}); 

export default SearchInput;