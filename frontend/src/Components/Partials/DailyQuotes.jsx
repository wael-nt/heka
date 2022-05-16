import React from 'react'
import { useState, useEffect } from 'react'


const DailyQuotes = () => {
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');
    const updateQuote = async () => {
        let random = Math.floor(Math.random() * 1600);
        let result = await (await fetch("https://type.fit/api/quotes/")).json();
        console.log(result[random]);
        setAuthor(result[random].author);
        setText(result[random].text);
    }
    const MINUTE_MS = 4000;

    useEffect(() => {
        const interval = setInterval(() => {
            updateQuote();
        }, MINUTE_MS);

        return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
    }, [])

    return (
        <blockquote>
            <h3>
                "{text}"
            </h3>
            <h3>
                <strong>Author : </strong>
                {author}
            </h3>
        </blockquote>

    )
}


export default DailyQuotes


