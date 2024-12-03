import React, { createContext} from 'react'
import Card from './UI/Card';

  // ----step 1-----
 export const StudentContext= createContext();

// -------step 2------
export const StuProvider = ({children}) => {
    const name = "vinay"; 
    const city= 'Delhi'; 
      const card = <Card/>

return(
      <StudentContext.Provider value={{name, city, card} }>
        {children}
      </StudentContext.Provider>
    )  
}

