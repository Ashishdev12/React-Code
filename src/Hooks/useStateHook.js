// UseState Hook is function to add state in  functional component
// It returns an array with two values, first value is the current state and second one is a setter function for that state.

import React, { useState } from 'react'
// const UseStateHook = () => {
//   const [counter, setCounter] = useState(0);

//   const increment = () =>{
//     setCounter(counter + 1);
//   }

//   return (
//     <div>{counter} <button onClick={increment}>Increment</button></div>
//   )

// }

const UseStateHook = () =>{
  const [inputValue, setInputValue] = useState("Ashish");

  const onChange = (event) =>{
      const newInputValue = event.target.value;
      setInputValue(newInputValue);
    
  };
  return(
    <div>
      <input type="text" placeholder='Enter something' onChange={onChange} />
      {inputValue} 
      

    </div>
  )
}


export  default UseStateHook;

