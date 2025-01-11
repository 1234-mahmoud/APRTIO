import { createContext,useState } from "react";

import React from 'react'
export const AppContext = createContext();
function AppProvider({children}) {
  const [show,setShow]=useState(false)
  const Hide=()=>{
      setShow(!show)
  }
  
  const values={
    show,Hide
  }
  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider;