// Custom hooks are your logic which you created as reusable functions.
// you can use multiple hooks and create something that will help you to skip repeated tasks in your projects.
// They allow you to extract and reuse code across different components in a React application. 

import React from 'react'
import useFetch from './useFetch';


const CustomHook = () =>{
 
  const data = useFetch("https://jsonplaceholder.typicode.com/users")
  return(
    <div>
      {data.map((res)=>{
        return(
          <h4 key={res.id}>{res.id} - {res.name}</h4>
        )
      })}
    </div>
  )
}

export default  CustomHook;