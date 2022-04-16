import React, { useState, useEffect } from "react"
import axios from 'axios';


function Quote() {
    const[quote, setQuote] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const {data} = await axios.get('https://api.kanye.rest/')

        setQuote(data)

}

    return (
        <div>
            <h5>"{quote.quote}"</h5>
            <h5>-Kanye West</h5>
        </div>
    );
}



export default Quote;