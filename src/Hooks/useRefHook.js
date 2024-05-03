// The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.

import React, { useRef } from 'react'
const UseRefHook = () => {
  const inputEl = useRef(null);

  const onClick = () => {
    console.log(inputEl.current.value);
    inputEl.current.value = "";
}

  return (
    <div>
      <h1>Ashish</h1>
      <input type="text" placeholder='Ex...' ref={inputEl} />
      <button onClick={onClick}>Change Name</button>
    </div>
  )
}


export default UseRefHook;