import React, { useContext } from 'react'
import { StudentContext} from './ContextCom';

const CompC = () => {
    const myData= useContext(StudentContext); 
  console.log(myData, "Comp C")
  return (
    <div>
     
        <h3 style={{padding:'10px'}}>comp C</h3>
        <p> {myData.name}</p>
        <p>{myData.city}</p>
        <hr></hr>
    </div>
  )
} 
export default CompC