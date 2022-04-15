import React, { useEffect, useRef, useState } from 'react'

const Dropdown = ({label, options, selected, onselectedChange }) => {
    const [open, setopen] = useState(false);
    const ref = useRef();
    useEffect(() => {
        const onBodyClick = (Event) => { 
        if (ref.current.contains(Event.target)) {
            return;
        }
        setopen(false);
    };
    document.body.addEventListener('click',onBodyClick);
    return () => {
document.body.removeEventListener('click',onBodyClick);
    };
}, []);
const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
        return null;
    }
    return (
        <div key={option.value} className="item"
            onClick={() => onselectedChange(option)}>
            {option.label}
        </div>
    );
});
return (
    <div ref={ref} className='ui form'>
        <div className='field'>
            <label className='label'>{label}</label>
            <div onClick={() => setopen(!open)}
                className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                <i className='dropdown icon'></i>
                <div className='text'>{selected.label}</div>
                <div className={`menu ${open ? 'visible transition' : ''}`}> {renderedOptions}</div>
            </div>
        </div>
    </div>
)
}

export default Dropdown