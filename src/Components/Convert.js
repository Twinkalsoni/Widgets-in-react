import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Convert = ({ language, text }) => {
    const [translated, setTranslated] = useState('');
    useEffect(() => {
        const doTranslation = async () => {
            const { data } = await axios.post(
                'https://translations.googleapis.com/language/translate/v2',
                {},
                {
                    params: {
                        q: text,
                        target: language.value,
                        key:'AIzaSyAQ6NoOCwP9cNWkIq6kioYyCZ__Wbd6TsQ',
                    },
                }
            );
            setTranslated(data.data.traslations[0].translatedText);
        }

doTranslation();
    }, [language, text]);
    return (
        <div>
            <h1 className='ui header'>{translated}</h1>
        </div>
    )
}

export default Convert