import React from 'react';

function TableRow({id, author, quote}) {
    return (
        <>
            <tr>
                <td>{id}</td>
                <td>{author}</td>
                <td>{quote}</td>
            </tr>
        </>
    );
}

export default TableRow;