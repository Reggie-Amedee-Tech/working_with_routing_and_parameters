import React from 'react';

const WordRepeater = (props) => {



    return (
        <div style={{backgroundColor: props.backgrnd}}>
            <h1 style={{ color: props.font }}>The word is {props.word}</h1>
        </div>
    )
}

export default WordRepeater