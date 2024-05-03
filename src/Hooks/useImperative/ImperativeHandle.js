// useImperativeHandle is generally used whenever we need a child function component to expose some of its functionalities to the parent component. For instance, maybe the function component will encapsulate some logic that might be useful in another part of the parent component.

import React, { useRef } from 'react'
import Button from './Button'


function ImperativeHandle (){

  const buttonRef = useRef(null);

  return(
    <div>
      <button onClick={()=>{
        buttonRef.current.alterToggle()
      }}>Button From Parent</button>
      <Button ref={buttonRef}/>
    </div>
  )
}

export default ImperativeHandle;