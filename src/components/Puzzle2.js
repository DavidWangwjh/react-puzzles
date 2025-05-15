import React, { useState } from 'react'

const Puzzle2 = () => {
  const [listItems, setListItems] = useState([
    { text: "item 1", completed: true},
    { text: "item 2", completed: false},
    { text: "item 3", completed: true},
  ])

  const toggleCompleted = (target) => {
    setListItems(listItems.map((item, index) => index === target? {...item, completed: !item.completed} : item));
  }

  return (
    <ul style={{ listStyleType: 'none' , padding: 0}}>
      {listItems.map((item, index) => (
        <li key={index}>
          <input type="checkbox" checked={item.completed} onChange={() => toggleCompleted(index)} />
          <span style={{ textDecoration: item.completed? "line-through" : "none"}}>{item.text}</span>
        </li>
      ))}
    </ul>
  );
}

export default Puzzle2