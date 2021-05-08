import React from 'react';
import './flashcard.css'

function Flashcard(props) {
    return (
        <div className="flashcard"><br></br>
            <h2>{props.word}</h2>
            <p>Definition:</p>
            <p>{props.pl}</p>
            <p>Example:</p>
            <p>{props.esp}</p>
        </div>
    );
}

export default Flashcard;