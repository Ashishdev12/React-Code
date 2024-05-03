// useLayoutEffect ensures that any changes made within the hook are applied synchronously before the browser repaints the screen. While this might not seem ideal, it is highly encouraged in specific use cases, such as when measuring DOM elements, or animating or transitioning elements.

import React, { useEffect, useLayoutEffect, useRef } from 'react'
const UseLayoutEffect  = () => {

  const inputRef = useRef(null);

  useLayoutEffect(()=>{
    console.log(inputRef.current.value);
  }, []);

  useEffect(()=>{
    inputRef.current.value = "Sindhu";
  }, [])

  return(
    <div className='App'>
      <input ref={inputRef} value="Ashish" style={{width: 400, height:60}}/>
    </div>
  )
}

export default  UseLayoutEffect;