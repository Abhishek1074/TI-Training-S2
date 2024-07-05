import React, { useState } from 'react'

function Count() {
    const [counter,setCounter]=useState(0);
    const handleclick=(value)=>{
        setCounter(counter+value);
    }
    const handleclick2=(value)=>{
        setCounter(counter-value);
    }
  return (
    <div>
      <h1>Counter:{counter}</h1>
      <button className='Inc' onClick={()=>handleclick(1)}>Inc </button>
    

      <button  className='Dec' onClick={()=>handleclick2(1)}>Dec </button>

    
    </div>
  )
}

export default Count
