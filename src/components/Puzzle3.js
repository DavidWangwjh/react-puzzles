import React, { useState } from 'react'

const Puzzle3 = () => {
  const [color, setColor] = useState('#000000');

  const handleColorChange = (e) => {
    setColor(e.target.value);
  }

  return (
    <div>
      <input type="color" value={color} onChange={handleColorChange} />
      <p>Selected Color: <span style={{ color, fontWeight: 'bold' }}>{color}</span></p>
    </div>
  )
}

export default Puzzle3