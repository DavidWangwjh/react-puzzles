import React, { useState } from 'react';

const Puzzle8 = () => {

  const [input, setInput] = useState('');
  const [textArt, setTextArt] = useState('')

  const handleInput = (e) => {
    setInput(e.target.value);
    generateTextArt(e.target.value);
  }

  const generateTextArt = (input) => {
    const chars = input.split('');
    const textArtChars = [];
    for (let i = 0; i < chars.length; i++) {
      textArtChars.push(<span style={{ fontSize: `${10 + i * 2}px`, color: i%2 === 0? 'blue' : 'green'}}>{chars[i]}</span>)
    }
    setTextArt(textArtChars)
  }

  const clear = () => {
    setInput('');
    setTextArt('');
  }

  return (
    <div>
      <p>{textArt}</p>
      <input value={input} onChange={handleInput}/>
      <button onClick={clear} style={{ margin: '1rem' }}>clear</button>
    </div>
  );
};

export default Puzzle8;
