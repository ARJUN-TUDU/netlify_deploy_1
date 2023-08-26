import React, { useEffect, useState } from 'react';
import list from './list';


function App() {


  const [data,setData] = useState([]);

  useEffect(()=>{
      
   setData(list)

  },[])
     
    
   
    return (
      <div>
         {
          data.map((x)=>{
            return <h1>{x.name}</h1>
          })
         }
        
      </div>
   
  );
}


export default App;
