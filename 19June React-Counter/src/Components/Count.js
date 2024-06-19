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
      <button className='Inc' onClick={()=>handleclick(1)}>Inc by 1</button>
      <button  className='Inc' onClick={()=>handleclick(5)}>Inc by 5</button>
      <button  className='Inc' onClick={()=>handleclick(10)}>Inc by 10</button>
      <button  className='Inc' onClick={()=>handleclick(15)}>Inc by 15</button>
      <button  className='Inc' onClick={()=>handleclick(20)}>Inc by 20</button>

      <button  className='Dec' onClick={()=>handleclick2(1)}>Dec by 1 </button>
      <button className='Dec' onClick={()=>handleclick2(5)}>Dec by 5 </button>
      <button className='Dec' onClick={()=>handleclick2(10)}>Dec by 10</button>
      <button className='Dec' onClick={()=>handleclick2(15)}>Dec by 15</button>
      <button className='Dec' onClick={()=>handleclick2(20)}>Dec by 20</button>
    
    </div>
  )
}

export default Count
