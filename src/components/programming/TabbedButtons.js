import React, { memo, useState, useEffect } from 'react';
import '../../css/buttons/tabbed-buttons.css';
import '../../css/select-list.css';


const TabbedButtons = memo(({ item, text, setText }) => {
    const categories = ["", "Front-end", "Back-end", "Frameworks", "Data Modeling", "CMS"];
    const [selectedValue, setSelectedValue] = useState('');

    const getButtons = () => {
        return categories.map((item, keyID) =>
            <button key={keyID} value={item} onClick={setValue} className={item === selectedValue ? 'active' : ''}>{item === '' ? 'All' : item}</button>
        );
    }

    const getOptions = () => {
        return categories.map((item, keyID) =>
            <option key={keyID} value={item}>{item === '' ? 'All' : item}</option>
        );
    }

    const setValue = (e) => {
        const value = e.target.value;

        setSelectedValue(value);
        item(value);
        setText('');
    }

    useEffect(() => {
        if (text !== '') {
            setSelectedValue('');
            item('');
        }
    }, [text, item]);

    return (
        <>
            <div className="tabbed-buttons" id="tabbed-buttons">
                {getButtons()}
            </div>

            <select id="selectList" value={selectedValue} onChange={setValue}>
                {getOptions()}
            </select>
        </>
    );
}); 

export default TabbedButtons;