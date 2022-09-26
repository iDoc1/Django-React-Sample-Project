import React from 'react';
import { useState, useEffect } from 'react';
import TableRow from '../components/TableRow';


function ViewQuotesPage() {
    const [quotesData, setQuotesData] = useState([]);

    const fetchQuotesData = async () => {
        let response = await fetch('/api/quotes/');
        let data = await response.json();

        if (response.status === 200) {
            setQuotesData(data);
        } else {
            alert(`Error while fetching Quotes, status code = ${response.status}`)
        }
    }

    useEffect(() => {
        fetchQuotesData();
    }, []);

    return (
        <>
            <table>
                <tr>
                    <th>id</th>
                    <th>Author</th>
                    <th>Quote</th>
                </tr>
                <tbody>

                    {quotesData.map((quote, i) => <TableRow 
                        id={quote.id}
                        author={quote.author}
                        quote={quote.quote}
                        key={i}/>                    
                    )}

                </tbody>
            </table>
        </>
    );
}

export default ViewQuotesPage;