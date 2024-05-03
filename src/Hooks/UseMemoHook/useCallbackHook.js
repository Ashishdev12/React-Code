import React, { useCallback, useState } from 'react'
import Child from './useCallbackChildHook';

const UseCallbackHook = () =>{
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("Yo pls sub to my channel!");

  const returnComment = useCallback((name) =>{
      return data + name;
  },[data]);


  return(
    <div className='App'>
      <Child returnComment={returnComment}></Child>
      <button onClick={()=>{
        setToggle(!toggle);
      }}>Toggle</button>
      {toggle && <h1>toggle</h1>}
    </div>
  )
}

export default  UseCallbackHook;