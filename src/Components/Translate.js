import React, { useState } from 'react'
import Dropdown from './Dropdown'
import Convert from './Convert'

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Dutch',
        value: 'nl'
    },
]
const Translate = () => {
    const [language, setlanguage] = useState(options[0]);
    const [text, settext] = useState('');
    return (
        <div>
            <div className='ui form'>
                <div className='field'>
            <label>Enter value</label>
            <input value={text} onChange={(e)=>settext(e.target.value)}/>
            </div>
            </div>
            <Dropdown
                label="Select a Language" selected={language} onselectedChange={setlanguage} options={options} />
        <hr/>
        <h3 className='ui header'>Output</h3>
        <Convert text={text} language={language}/>
        </div>
    )
}

export default Translate