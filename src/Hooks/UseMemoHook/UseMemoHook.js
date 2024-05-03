// useMemo is a valuable tool in the React framework, designed to optimize performance by memoizing expensive computations. With useMemo , React can store the result of a function call and reuse it when the dependencies of that function haven't changed, rather than recalculating the value on every render.

import axios from 'axios';
import React, { useEffect, useState, useMemo } from 'react'

const UseMemoHook = () => {

  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(()=>{
    axios
    .get("https://jsonplaceholder.typicode.com/comments")
    .then((response)=>{
      setData(response.data)
    })
  }, []);

  const findLongestName = (comments) =>{
    if(!comments) return null;

    let  longestName = "";
    for(let i = 0; i < comments.length; i++){
      let currentName = comments[i].name;
      if(currentName.length >  longestName.length){
        longestName = currentName;
      
      }
    }

    console.log("THIS WAS COMPUTED");
    return longestName;
  }

  const getLongestName = useMemo(()=>findLongestName(data), [data])
 
  return(
    <div className='App'>
      <div>{getLongestName}</div>

      <button onClick={()=>{
        setToggle( !toggle );
      }}>Toggle</button>
      {toggle && <h1> toggle</h1>}
    </div>
  )
}

export default  UseMemoHook;