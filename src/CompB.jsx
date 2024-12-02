import React, { useContext } from 'react'
import { StudentContext } from './ContextCom';
const CompB = () => {

    const myData= useContext(StudentContext);
    console.log(myData, 'Comp B')
  return (
    <div>
      <h3>Comp B</h3> 
        {myData.city}   
    </div>
  )
}

export default CompB