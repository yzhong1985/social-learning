import React from 'react';
import { useParams } from 'react-router-dom';
 
function SquareDetails(square_details) {
    const params = useParams();
    const id = params.squareid
    let currSquare = square_details.square_details.find((square)=>square.id===id);
    return (
        <div>
            <h1>{currSquare.content}</h1>
        </div>
    )
    }
 
export default SquareDetails