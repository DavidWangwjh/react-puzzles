/*
Create a React application that checks the strength of a password entered by the user. 
The application should display a visual indicator of the password's strength, with the following criteria: 
Weak (less than 8 characters) 
Medium (8-12 characters) 
Strong (more than 12 characters)
*/

import React, { useState } from 'react'

const Puzzle4 = () => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("Weak");

  const updatePassword = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (newPassword.length < 8) {
      setStrength("Weak");
    } else if (newPassword.length < 13) {
      setStrength("Medium");
    } else {
      setStrength("Strong");
    }
  }
  
  return (
    <div>
      <input type="password" value={password} onChange={updatePassword}/>
      <p>password length: {password.length}</p>
      <p>password strength: {strength}</p>
    </div>
  )
}

export default Puzzle4