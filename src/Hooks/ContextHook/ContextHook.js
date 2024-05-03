// The useContext hook is used to consume values from a React context. Context provides a way to pass data through the component tree without having to pass props manually at every level.

import React, { useState } from 'react';
import Login from './Login';
import User from './User';
import { createContext } from 'react';

export const AppContext = createContext(null);


const ContextHook = () =>{
  const [username, setUsername] = useState("");
  return(
    <AppContext.Provider value={{username, setUsername}}>
      <Login ></Login> <User ></User>
    </AppContext.Provider>
  )
}

export default  ContextHook;