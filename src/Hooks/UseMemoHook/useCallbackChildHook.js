// The useCallback hook is a built-in hook in React that lets you memoize a callback function by preventing it from being recreated on every render. In simple terms, it means that the callback function is cached and does not get redefined on every render.

import React, { useEffect } from 'react'
const Child = ({returnComment}) =>{

  useEffect(()=>{
    console.log("Child component did mount")
  },[returnComment])
  return(
    <div>
      {returnComment("Ashish")}
    </div>
  )
}

export default Child;