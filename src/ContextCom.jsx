import React, { createContext} from 'react'

  // ----step 1-----
 export const StudentContext= createContext();

// -------step 2------
export const StuProvider = ({children}) => {
    const name = "vinay"; 
    const city= 'Delhi'; 
 

return(
      <StudentContext.Provider value={{name, city}}>
        {children}
      </StudentContext.Provider>
    )  
}

