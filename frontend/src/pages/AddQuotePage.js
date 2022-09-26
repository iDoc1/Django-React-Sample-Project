import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function AddQuotePage() {
    const [author, setAuthor] = useState('');
    const [quote, setQuote] = useState('');

    let navigate = useNavigate();

    const submitQuote = async () => {
        const postObject = {
            quote: quote,
            author: author
        };

        let response = await fetch('/api/quotes/', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(postObject)
        });

        if (response.status === 201) {
           navigate('/'); 
        } else {
            alert(`Error while posting Quote, status code = ${response.status}`)
        }        
    }

    return (
        <>
            <h2>Add a Quote</h2>
            <p>Enter quote information below</p>
            <div>
                <input 
                    type="text"
                    placeholder="Author"
                    value={author}
                    onChange={e => setAuthor(e.target.value)}/>
                <br/>
                <input 
                    type="text"
                    placeholder="Quote"
                    value={quote}
                    onChange={e => setQuote(e.target.value)} />                
            </div>
            <button 
                className="submitButton"
                onClick={submitQuote}>
                Submit                   
            </button>
        </>
    );
}

export default AddQuotePage;