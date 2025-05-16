/*
Create a React application that displays a simple counter. 
The counter should initially display 0 and have two buttons to increment or decrement the count. 
The count should update accordingly when a button is clicked.
*/

import React, { useState} from 'react'

const Puzzle1 = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Restart</button>
      </div>
    </div>
  )
}

export default Puzzle1