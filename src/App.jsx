
import './App.css'
import  {StuProvider } from './ContextCom'
import CompB from './CompB';
import CompC from './CompC';
function App(){  
  return ( 
    <>
   <StuProvider> 
      <CompC />
      <CompB/>
   </StuProvider>
   </>
   )
} 
export default App
