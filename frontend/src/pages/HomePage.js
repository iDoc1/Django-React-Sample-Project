import React from 'react';
import { Link } from 'react-router-dom';


function HomePage() {
    return (
        <>
            <Link to='/view-quotes'>View all Quotes</Link><br/>
            <Link to='/add-quote'>Add a Quote</Link>
        </>
    );
}

export default HomePage;