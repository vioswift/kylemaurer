import React, { useState, useCallback } from 'react';
import Icons from './Icons';
import TabbedButtons from './TabbedButtons';
import SearchInput from './SearchInput';

export default function Programming(){
    const [searchText, setSearchText] = useState('');
    const [category, setCategory] = useState('');
    
    const setText = useCallback((e) => {
        setSearchText(e);
    }, []);

    const setItem = useCallback((e) => {
        setCategory(e);
    }, []);

    return (
        <>
            <div className="row r100">
                <div className="col">
                    <TabbedButtons item={setItem} text={searchText} setText={setText}/>
                    <SearchInput text={setText} item={category}/>
                </div>
            </div>
            <Icons text={searchText} category={category}/>
        </>
    );
}