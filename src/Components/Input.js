import React from 'react'

function Input(props) {
  const {label, type, placeholder, name, change} = props  
  return (
    
    <div>
        <label>{label}</label>
        <input type={type || "text"} onChange={change} name={name} placeholder={placeholder}/>
    </div>
    
  )
}

export default Input

